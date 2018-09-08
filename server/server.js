const express = require('express');
const { db } = require('./db/connection');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';

///////////////////////////////////////////
// Config
const PORT = process.env.PORT || 8000;
///////////////////////////////////////////
// Models
const selectRestaurant = (id, callback) => {
  MongoClient.connect(
    mlab,
    { useNewUrlParser: true },
    (error, db) => {
      if (error) {
        console.log('Error connecting to the DB', error);
      } else {
        console.log('Connected successfully to mlab');
        const dbo = db.db('fec-zagat-reviews');
        dbo.collection('restaurants').findOne({ id: Number(id) }, (error, result) => {
          if (error) {
            callback(error);
          } else {
            console.log('Got restaurant', result);
            callback(null, result);
          }
          db.close();
        });
      }
    },
  );
};
///////////////////////////////////////////
// Controllers
const getRestaurant = (req, res) => {
  console.log('Getting restaurant');
  const id = req.params.id;
  selectRestaurant(id, (error, restaurant) => {
    if (error) {
      res.status(400).end();
    } else {
      console.log('Get successful');
      res.status(200).json(restaurant);
    }
  });
};
///////////////////////////////////////////
// Routes
app.get('/api/restaurant/:id', getRestaurant);
///////////////////////////////////////////
// Start
app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed to start server');
  } else {
    console.log('Server started on', PORT);
  }
});
