// controllers/orderController.js
const User = require('../models/User');
const Order = require('../models/Order');
const Book = require('../models/Book');

// Get user's order history
exports.getOrderHistory = async (req, res) => {
  const user = await User.findById(req.user.id).populate('orders');
  res.json(user.orders);
};

// Create new order
exports.createOrder = async (req, res) => {
  const { items, total } = req.body;
  const order = new Order({ user: req.user.id, items, total });
  await order.save();
  
  const user = await User.findById(req.user.id);
  user.orders.push(order._id);
  await user.save();

  res.status(201).json(order);
};
