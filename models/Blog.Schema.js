// const { type } = require('express/lib/response');
const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    date : {
        type :Date,
        require:true
    },
    image : {
        type : String,
        required : false
    },
    description : {
        type : String,
        required : true
    }
})

const blogModel = mongoose.model('blogModel',BlogSchema);

module.exports = blogModel;