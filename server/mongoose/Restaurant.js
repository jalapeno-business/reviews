const mongoose = require('mongoose');

// Schema
const Restaurant = mongoose.model('Restaurant', {
  _id: Number,
  reviews: [
    {
      name: String,
      date: Date,
      text: String,
      profilePic: String,
      star: Boolean,
      numOfStars: Number,
    },
  ],
});

module.exports = Restaurant;
