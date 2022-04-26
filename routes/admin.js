const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const productController = require("../controllers/productController")
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}))


router.get("/add-product",productController.getAddProduct)
router.post("/product",productController.postAddProduct)


module.exports=router