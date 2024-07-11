const express = require("express");
const { addproduct, getProduct } = require("../controllers/product.controller");

const router = express.Router();


router.post('/addproduct', addproduct);
router.get('/shop', getProduct);

module.exports = router;
