// controllers/wishlistController.js
const User = require('../models/User');
const Book = require('../models/Book');

// Get user's wishlist
exports.getWishlist = async (req, res) => {
  const user = await User.findById(req.user.id).populate('wishlist');
  res.json(user.wishlist);
};

// Add book to wishlist
exports.addToWishlist = async (req, res) => {
  const { bookId } = req.body;
  const user = await User.findById(req.user.id);
  user.wishlist.push(bookId);
  await user.save();
  res.json(user.wishlist);
};

// Remove book from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { bookId } = req.params;
  const user = await User.findById(req.user.id);
  user.wishlist.pull(bookId);
  await user.save();
  res.json(user.wishlist);
};
