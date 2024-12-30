const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product
router.post("/", async (req, res) => {
  const { name, price, description, image, stock } = req.body;
  const product = new Product({ name, price, description, image, stock });
  const savedProduct = await product.save();
  res.json(savedProduct);
});

module.exports = router;
