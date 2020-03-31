var express = require('express');
var router = express.Router();

const countryController = require('../../controllers/countryApi');
const worldNewsApiController = require('../../controllers/worldNewsApiController');

/* GET countrywise listing. */
router.get('/world-data', function (req, res, next) {
    countryController.getAllCountriesStat(req, res);
});

/* GET Latest News. */
router.get('/latest-news', (req, res) => {
    worldNewsApiController.getLatestNewsFeed(req, res);
})

/* GET All Country. */
router.get('/total-data', function (req, res, next) {
    countryController.totalStat(req, res);
});


/* GET India Data. */
router.get('/india-data', function (req, res, next) {
    countryController.indiaData(req, res);
});

module.exports = router;