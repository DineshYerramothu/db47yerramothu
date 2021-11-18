const mongoose = require("mongoose")
const echoSchema = mongoose.Schema({name: String,model: String,frequency: Number})
module.exports = mongoose.model("echo", echoSchema)

exports.echo_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await echo.findById( req.query.id)
    res.render('echodetail',
   { title: 'Echo Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };