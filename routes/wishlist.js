// routes/wishlist.js
const express = require('express');
const { getWishlist, addToWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getWishlist);
router.post('/', authMiddleware, addToWishlist);
router.delete('/:bookId', authMiddleware, removeFromWishlist);

module.exports = router;
