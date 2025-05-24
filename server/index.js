require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const path = require('path');

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

// Connect to Database
connectDB();

// Routes
app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
