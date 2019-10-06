const express = require("express")
const app = express()
const dotenv = require('dotenv')
const countryRoute = require("./routes/countryRoute")
const redisService = require('./services/redis/redis')

dotenv.config()
redisService({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
})

app.use("/country", countryRoute)

app.use(function (_, resp) {
    resp.statusCode = 501
    resp.json({
        data: {
            status: "error",
            messeage: "resquest is not supported"
        }
    })

})

app.listen(process.env.NODE_PORT || 8080)



module.exports = app;

