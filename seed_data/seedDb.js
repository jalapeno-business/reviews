const seedData = require('./zaget-data.json');

const MongoClient = require('mongodb').MongoClient;

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-navbar';

MongoClient.connect(
  mlab,
  { useNewUrlParser: true },
  (error, db) => {
    if (error) {
      console.log('Error connecting to the DB', error);
    } else {
      console.log('Connected successfully to mlab');
      const dbo = db.db('fec-zagat-navbar');
      dbo.collection('restaurants').insertMany(seedData, (err, res) => {
        if (err) throw err;
        console.log('Database seeded');
        db.close();
      });
    }
  },
);
