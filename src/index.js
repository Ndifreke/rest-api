const express = require("express")
const app = express()
const countryRoute = require("./routes/countryRoute")


app.use("/country", countryRoute)

app.use(function (_, resp) {
    console.log(_.path)
    resp.statusCode = 501
    resp.json({
        data: {
            status: "error",
            messeage: "resquest is not supported"
        }
    })

})

app.listen(8080)



module.exports = app;

