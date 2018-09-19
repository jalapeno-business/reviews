const express = require('express');
const path = require('path');
const cors = require('cors');

const Restaurant = require('./mongoose/Restaurant.js');

// Config
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client', 'dist')));

// Models
const selectRestaurant = id => Restaurant.findOne({ _id: id })
  .then(restaurant => restaurant)
  .catch(error => error);

// Controllers
const getRestaurant = (req, res) => {
  console.log('Getting restaurant');
  const { id } = req.params;
  selectRestaurant(id).then((restaurant) => {
    console.log('Get successful');
    res.status(200).json(restaurant);
  }).catch((error) => {
    console.log(error);
    res.status(400).end();
  });
};

// Routes
app.get('/api/restaurant/reviews/:id', getRestaurant);

module.exports = app;
