const geoquery = require('geoquery');

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
    result["data"].status = "ok",
      result["data"].message = "successfull"
    res.json(result)
  }
}

module.exports = { getCountry }