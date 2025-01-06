const express = require("express");
const { addToCart, getCart, removeFromCart, clearCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .get(protect, getCart)           // Get user's cart
  .post(protect, addToCart)        // Add item to cart
  .delete(protect, clearCart);     // Clear cart

router.route("/:itemId")
  .delete(protect, removeFromCart); // Remove specific item from cart

module.exports = router;
