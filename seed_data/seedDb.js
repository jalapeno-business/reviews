const { MongoClient } = require('mongodb');
const seedData = require('./zagat-data.json');

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';
const options = { useNewUrlParser: true };

const handleConnect = (error, db) => {
  if (error) {
    // console.log('Error connecting to the DB', error);
  } else {
    // console.log('Connected successfully to mlab');
    const dbo = db.db('fec-zagat-reviews');
    dbo.collection('restaurants').insertMany(seedData, (err) => {
      if (err) throw err;
      // console.log('Database seeded');
      db.close();
    });
  }
};

MongoClient.connect(mlab, options, handleConnect);
