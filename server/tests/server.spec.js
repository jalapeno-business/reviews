const request = require('supertest');
const app = require('../app.js');

describe('GET /api/restaurant', () => {
  it('should get a restaurant', (done) => {
    request(app)
      .get('/api/restaurant/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
