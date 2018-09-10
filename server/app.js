const express = require('express');
const { Restaurant } = require('./mongoose/Restaurant.js');

// Config
const app = express();

// Models
const selectRestaurant = (id, callback) => {
  Restaurant.findOne({ _id: id }, (error, restaurant) => {
    if (error) {
      callback(error);
    } else {
      callback(null, restaurant);
    }
  });
};

// Controllers
const getRestaurant = (req, res) => {
  console.log('Getting restaurant');
  const { id } = req.params;
  selectRestaurant(id, (error, restaurant) => {
    if (error) {
      res.status(400).end();
    } else {
      console.log('Get successful');
      res.status(200).json(restaurant);
    }
  });
};

// Routes
app.get('/api/restaurant/:id', getRestaurant);

module.exports = app;
