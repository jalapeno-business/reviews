const mongooseWrapper = require('./mongoose/db.js');
const app = require('./app.js');

mongooseWrapper.connect();
const PORT = process.env.PORT || 8080;

// Start
app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed to start server');
  } else {
    console.log('Server started on', PORT);
  }
});
