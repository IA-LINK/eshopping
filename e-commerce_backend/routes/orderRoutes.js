const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createOrder)    // Create a new order
  .get(protect, getOrders);      // Get user's orders

module.exports = router;
