const express = require("express");
const { addproduct, getProduct, deleteData, updateData} = require("../controllers/product.controller");

const router = express.Router();


router.post('/addproduct', addproduct);
router.get('/data', getProduct);
router.delete('/delete/:id',deleteData);
router.patch('/update/:id',updateData);
// router.get("/shop",shopPage)


module.exports = router;
