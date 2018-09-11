const app = require('./app.js');

console.log('server.js');

const PORT = process.env.PORT || 8000;

// Start
app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed to start server');
  } else {
    console.log('Server started on', PORT);
  }
});
