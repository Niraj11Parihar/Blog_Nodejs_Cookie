const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        // required : true
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