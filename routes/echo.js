var express = require('express');
const echo_controlers= require('../controllers/echo');
var router = express.Router();

/* GET home page. */
router.get('/', echo_controlers.echo_view_all_Page) ;
  
router.get('/detail', echo_controlers.echo_view_one_Page);

router.get('/create', echo_controlers.echo_create_Page);
 
router.get('/update', echo_controlers.echo_update_Page);

router.get('/delete', echo_controlers.echo_delete_Page); 

module.exports = router;