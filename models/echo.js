const mongoose = require("mongoose")
const echoSchema = mongoose.Schema({name: String,model: String,frequency: Number})
module.exports = mongoose.model("echo", echoSchema)