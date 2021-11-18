var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var echo_controller = require('../controllers/echo');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// echo ROUTES ///
// POST request for creating a echo.
router.post('/echo', echo_controller.echo_create_post);
// DELETE request to delete echo.
router.delete('/echo/:id', echo_controller.echo_delete);
// PUT request to update echo.
router.put('/echo/:id', echo_controller.echo_update_put);
// GET request for one echo.
router.get('/echo/:id', echo_controller.echo_detail);
// GET request for list of all echo items.
router.get('/echo', echo_controller.echo_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"echo", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};