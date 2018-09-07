const MongoClient = require('mongodb').MongoClient;

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';

const connection = MongoClient.connect(
  mlab,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Error connecting to the DB', error);
    } else {
      console.log('Connected successfully to mlab');
      return client;
    }
  },
);

module.exports = {
  db: connection,
};
