const mongoose = require("mongoose");

const fileschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tag:{
        type:String
    },
    email:{
        type:String
    }
})
const File = mongoose.model("File",fileschema);
module.exports = File;