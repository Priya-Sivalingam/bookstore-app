// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }, quantity: Number }],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
