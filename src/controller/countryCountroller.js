const geoquery = require('geoquery');

const countryController = function (options) {

  const { redis } = options

  const countryTemplate = `{
  country(id: "#id", mode: "#mode"){
    phone
    capital
    name
    continent
    areaCode
  }
}`

  const getCountry = async (req, res) => {
    const { mode, id } = req.params
    const key = `${mode}:${id}`
    const cached = await redis.asyncGet(key)
    if (cached) {
      res.json(JSON.parse(cached))
    } else {
      const query = countryTemplate.replace("#id", id).replace("#mode", mode)
      let result = await geoquery(query);
      if ("errors" in result) {
        res.statusCode = 404
        result = {
          data: {
            country: null,
            status: "error",
            message: `No country ${id} using mode ${mode}`
          }
        }
        res.json(result)
      } else {
        result["data"].status = "ok"
        result["data"].message = "successfull"
        await redis.asyncSet(key, JSON.stringify(result))
        res.json(result)
      }
    }
  }

  return { getCountry }
}

module.exports = countryController