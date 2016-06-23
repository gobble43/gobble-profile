require('./setup');
const expect = require('chai').expect;

// We're using supertest, which allows for use of any super-agent methods
// and really easy HTTP assertions.
// See https://www.npmjs.com/package/supertest for a better reference
const appUrl = `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}`;
const request = require('supertest');

describe('Gobble profile - nutrientsController', () => {
  describe('get User Historical Nutrients', () => {
    it('should return status code 200 and typeof the data, object', (done) => {
      request(appUrl)
        .get('/api/nutrients')
        .expect(200, 'object')
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });
  // More tests (as in A LOT more!) and describe blocks below
});
