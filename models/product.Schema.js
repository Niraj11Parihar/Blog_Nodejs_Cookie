const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    bookname : {
        type : String,
        // required : true
    },
    author :{
        type: String,
    },
    price : {
        type : Number,
        // require:true
    },
    image : {
        type : String,
        // required : true
    },
    description : {
        type : String,
        // required : true
    }
})

const productModel = mongoose.model('productModel',productSchema);

module.exports = productModel;