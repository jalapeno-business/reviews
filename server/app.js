const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';

// Config
const mongoOptions = { useNewUrlParser: true };
// Models
const selectRestaurant = (id, callback) => {
  const select = (connError, client) => {
    if (connError) {
      console.log('Error connecting to the DB', connError);
      callback(connError);
    } else {
      console.log('Connected successfully to mlab');
      const dbo = client.db('fec-zagat-reviews');
      dbo.collection('restaurants').findOne({ _id: Number(id) }, (findError, result) => {
        if (findError) {
          callback(findError);
        } else {
          console.log('Got restaurant');
          callback(null, result);
        }
        client.close();
      });
    }
  };
  MongoClient.connect(mlab, mongoOptions, select);
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
