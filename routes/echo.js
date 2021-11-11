var express = require('express');
const echo_controlers= require('../controllers/echo');
var router = express.Router();

/* GET home page. */
router.get('/', echo_controlers.echo_view_all_Page) ;
  
module.exports = router;