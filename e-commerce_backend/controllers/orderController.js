const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

    const order = new Order({
      userId: req.user.id,
      items: cart.items.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price,
      })),
      totalPrice: cart.totalPrice,
      paymentInfo: {
        paymentMethod: req.body.paymentMethod,
        paymentStatus: "Pending",
      },
    });

    await order.save();
    await Cart.findOneAndDelete({ userId: req.user.id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate("items.productId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders };
