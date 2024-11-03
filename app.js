const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors'); 

const app = express();


// Connect to Database
connectDB();
app.use(cors()); 

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
