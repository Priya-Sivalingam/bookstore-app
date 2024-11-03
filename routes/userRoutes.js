// routes/auth.js
const express = require('express');
const { register, login, getUserProfile, updateUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
