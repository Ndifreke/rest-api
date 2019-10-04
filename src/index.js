const express = require("express")
const app = express()
const countryRoute = require("./routes/countryRoute")


app.get("/country/", countryRoute)

app.use(function (_, resp) {
    resp.statusCode = 501
    resp.json({
        status: "error",
        messeage: "resquest is not supported"
    })

})

app.listen(8080)



module.exports = app;

