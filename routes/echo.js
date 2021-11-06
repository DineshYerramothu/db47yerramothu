var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('echo', { title: 'search results for echo' });
});

module.exports = router;