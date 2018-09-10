const mongoose = require('mongoose');

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';
mongoose.connect(mlab, { useNewUrlParser: true });

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

module.exports = {
  Restaurant,
};
