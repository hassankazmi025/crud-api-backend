const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controller.js");

//get all  api route

router.get("/", getProducts);

//get api through id route

router.get("/:id", getProduct);

//create api route
router.post("/", createProduct);

//update api route
router.put("/:id", updateProduct);

//delete api route

router.delete("/:id", deleteProduct);

module.exports = router;
