const nutrientsController = require('../controllers/nutrientsController');
const postController = require('../controllers/postController');
const reviewController = require('../controllers/reviewController');
const wishController = require('../controllers/wishController');
const Promise = require('bluebird');


module.exports = (app) => {
  app.get('/api/nutrients', nutrientsController.getUserHistoricalNutrients);
};

