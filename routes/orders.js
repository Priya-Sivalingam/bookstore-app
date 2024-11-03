// routes/orders.js
const express = require('express');
const { getOrderHistory, createOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getOrderHistory);
router.post('/', authMiddleware, createOrder);

module.exports = router;
