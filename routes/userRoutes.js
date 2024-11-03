const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// Get User Profile
router.get('/profile', auth, getUserProfile);

module.exports = router;
