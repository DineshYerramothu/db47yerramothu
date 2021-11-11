var echo = require('../models/echo');
// List of all echos
exports.echo_list = async function(req, res) {
    try{
    theecho = await echo.find();
    res.send(theecho);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific echo.
exports.echo_detail = function(req, res) {
res.send('NOT IMPLEMENTED: echo detail: ' + req.params.id);
};
// Handle echo create on POST.
exports.echo_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new echo(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.model = req.body.model; 
    document.frequency = req.body.frequency; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle echo delete form on DELETE.
exports.echo_delete = function(req, res) {
res.send('NOT IMPLEMENTED: echo delete DELETE ' + req.params.id);
};
// Handle echo update form on PUT.
exports.echo_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: echo update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view 
exports.echo_view_all_Page = async function(req, res) {
    try{
        theecho = await echo.find();
        res.render('echo', { title: 'Echo Search Results', results: theecho });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    };