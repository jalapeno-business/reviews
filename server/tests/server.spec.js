const request = require('supertest');
const mongoWrapper = require('../mongoose/db.js');
const app = require('../app.js');

describe('Get a restaurant', () => {
  beforeAll(() => {
    mongoWrapper.connect();
  });

  afterAll((done) => {
    mongoWrapper.disconnect(done);
  });

  test('It should have an id', () => {
    request(app)
      .get('/api/restaurant/1')
      .then(res => JSON.parse(res.text))
      .then((restaurant) => {
        expect(restaurant).toHaveProperty('_id');
      });
  });

  test('It should have reviews', () => {
    request(app)
      .get('/api/restaurant/1')
      .then(res => JSON.parse(res.text))
      .then((restaurant) => {
        expect(restaurant).toHaveProperty('reviews');
      });
  });

  test('It should have 0 to many reviews', () => {
    request(app)
      .get('/api/restaurant/1')
      .then(res => JSON.parse(res.text))
      .then((restaurant) => {
        expect(Array.isArray(restaurant.reviews)).toBe(true);
      });
  });
});
