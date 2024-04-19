// server.js
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({path:'./config.env'});

const chatbotRoutes = require('./routes/chatbotRoutes'); // Importing the router

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/chatbotDB";
mongoose.connect(MONGODB_URL);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/', chatbotRoutes); // Include the router

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});