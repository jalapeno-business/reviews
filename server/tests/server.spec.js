const request = require('supertest');
const mongoWrapper = require('../mongoose/db.js');
const app = require('../app.js');

// describe('GET /api/restaurant', () => {
//   it('should get a restaurant', (done) => {
//     request(app)
//       .get('/api/restaurant/1')
//       .then((response) => {
//         console.log(response.statusCode);
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//     // .then(mongoose.disconnect)
//     // .then(done);
//     // request(app)
//     //   .get('/api/restaurant/1')
//     //   .set('Accept', 'application/json')
//     //   .expect('Content-Type', /json/)
//     //   .expect(200, done);
//   });
// });


describe('Get a restaurant', () => {
  beforeAll(() => {
    mongoWrapper.connect();
  });

  test('It should return 200', () => {
    request(app)
      .get('/api/restaurant/1')
      .then(res => expect(res.statusCode).toBe(200));
  });

  afterAll((done) => {
    mongoWrapper.disconnect(done);
  });
});
