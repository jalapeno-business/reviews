const { MongoClient } = require('mongodb');

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';
const options = { useNewUrlParser: true };

const handleConnection = (error, db) => {
  if (error) {
    // console.log('Error connecting to the DB', error);
    return error;
  }
  // console.log('Connected successfully to mlab');
  return db.db('fec-zagat-reviews');
};

const connection = MongoClient.connect(mlab, options, handleConnection);

module.exports = {
  db: connection,
};
