var express = require('express');
var router = express.Router();

const countryController = require('../../controllers/countryApi');
const worldNewsApiController = require('../../controllers/worldNewsApiController');
/* GET countrywise listing. */
router.get('/world-data', function (req, res, next) {
    countryController.getAllCountriesStat(req, res);
});

router.get('/latest-news', (req, res) => {
    worldNewsApiController.getLatestNewsFeed(req, res);
})

module.exports = router;