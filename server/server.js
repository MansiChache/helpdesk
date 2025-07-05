const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const path = require("path");

dotenv.config();
const app = express();

app.use(express.json());

const allowedOrigin = process.env.NODE_ENV === 'production'
  ? 'https://helpdesk-tntw.onrender.com' 
  : 'http://localhost:3000'; 

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));



app.use('/api', authRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}


mongoose.connect(process.env.MONGO_URI, { dbName: 'helpdesk' })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err);
  });