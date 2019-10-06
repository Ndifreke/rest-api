const express = require('express')
const router = express.Router()
const countryController = require("../controller/countryCountroller")
const redisService = require('../services/redis/redis')

const { getCountry } = countryController({ redis: redisService() })
router.get("/:mode/:id", getCountry)

module.exports = router