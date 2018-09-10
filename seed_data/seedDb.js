const mongoose = require('mongoose');
const seedData = require('./zagat-data.json');
const { Restaurant } = require('../server/mongoose/Restaurant.js');

const Restaurants = seedData.map((restaurant) => {
  const r = new Restaurant(restaurant);
  return r;
});

Restaurant.collection.insertMany(Restaurants, (error) => {
  if (error) {
    console.log('Seed error', error);
  } else {
    console.log('DB seeded');
  }
  mongoose.disconnect();
});
