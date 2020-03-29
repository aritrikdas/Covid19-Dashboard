var express = require('express');
var router = express.Router();

const countryController = require('../../controllers/countryApi');

/* GET countrywise listing. */
router.get('/world-data', function (req, res, next) {
    countryController.getAllCountriesStat(req, res);
});

module.exports = router;