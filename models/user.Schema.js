// const { type } = require('express/lib/response');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type :String,
        require:true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;