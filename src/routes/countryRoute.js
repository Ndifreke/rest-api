const express = require('express')
const router = express.Router()
const { getCountry } = require("../coontroller/countryCountroller")

router.get("/:name", function (req, resp) {
    console.log("came here")
    resp.setHeader("content-type", "text/html")
    resp.statusCode = 200
    resp.end(`<h1>Thanks ${req.params.name}</h1>`)
})

module.exports = router