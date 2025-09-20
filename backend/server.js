require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const monasteryRoutes = require('./routes/monasteries');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/monasteries', monasteryRoutes);
app.use('/api/events', eventRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });