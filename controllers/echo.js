var echo = require('../models/echo');
// List of all echos
exports.echo_list = function(req, res) {
res.send('NOT IMPLEMENTED: echo list');
};
// for a specific echo.
exports.echo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: echo detail: ' + req.params.id);
};
// Handle echo create on POST.
exports.echo_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: echo create POST');
};
// Handle echo delete form on DELETE.
exports.echo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: echo delete DELETE ' + req.params.id);
};
// Handle echo update form on PUT.
exports.echo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: echo update PUT' + req.params.id);
};