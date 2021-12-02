const mongoose = require("mongoose")
const echoSchema = mongoose.Schema({
name: String,
model: String,
frequency: {type:Number,min:15,max:100}} )
module.exports = mongoose.model("echo",echoSchema)