const mongoose = require('mongoose');

const monasterySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
  },
  heroImage: { type: String, required: true },
  virtualTourUrl: { type: String },
  digitalArchives: [{
    title: String,
    description: String,
    imageUrl: String,
  }],
});

module.exports = mongoose.model('Monastery', monasterySchema);