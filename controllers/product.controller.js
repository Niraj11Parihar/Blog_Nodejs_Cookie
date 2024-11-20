const productModel = require("../models/product.Schema");

const addproduct = async (req, res) => {
        const {title, author, price, description, image} = req.body;
    try {
         const pdata = await productModel.create(req.body)
         res.redirect("/shop");
    } catch (error) {
        console.error(error);
        res.status(500).send('Issue while adding the product');
    }
};

const deleteData = async(req,res) => {
    try {
        let {id} = req.params;
        await productModel.findByIdAndDelete(id)
        res.send("Product deleted")
    } catch (error) {
        console.log(error);
        res.send("Unable to delete data");
    }
}

const updateData = async(req,res) => {
    try {
        let {id} = req.params;
        await productModel.findByIdAndUpdate(id);
        res.send("Product updated")
    } catch (error) {
        console.log(error)
    }
}

const getProduct = async (req, res) =>{
    try {
        let data = await productModel.find({})  
        res.send(data);
    } catch (error) {
        console.log(error)
        res.send('unable to send data')
    }
}



module.exports = { addproduct, getProduct, deleteData, updateData };
