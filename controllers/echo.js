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
exports.echo_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await echo.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};
// Handle echo create on POST.
exports.echo_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new echo(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"echo_type":"goat", "cost":12, "size":"large"} 
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
//Handle echo update form on PUT. 
exports.echo_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await echo.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  toUpdate.name= req.body.name; 
        if(req.body.model) toUpdate.model = req.body.model; 
        if(req.body.frequency) toUpdate.frequency = req.body.frequency; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

    exports.echo_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await echo.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
    }; 

// Handle a show one view with id specified by query
exports.echo_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await echo.findById( req.query.id)
    res.render('echodetail',
   { title: 'echo Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

 
exports.echo_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('echocreate', { title: 'echo Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a costume. 
// query provides the id 
exports.echo_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await echo.findById(req.query.id) 
        res.render('echoupdate', { title: 'echo Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a delete one view with id from query 
exports.echo_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await echo.findById(req.query.id) 
        res.render('echodelete', { title: 'echo Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 