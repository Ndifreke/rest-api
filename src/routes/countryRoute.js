const express = require('express')
const router = express.Router()
const { getCountry } = require("../controller/countryCountroller")

router.get("/:mode/:id", getCountry)

module.exports = router