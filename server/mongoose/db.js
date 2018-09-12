const mongoose = require('mongoose');

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';

module.exports = {
  mongoose,
  connect: () => {
    console.log('Connecting to the DB');
    mongoose.Promise = Promise;
    mongoose.connect(mlab, { useNewUrlParser: true });
  },
  disconnect: (done) => {
    console.log('Disconnecting from the DB');
    mongoose.disconnect(done);
  },
};
