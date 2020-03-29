var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ 'resp' :'respond with a resource'});
});

module.exports = router;
