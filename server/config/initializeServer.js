const morgan = require('morgan');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  // app.use(express.static(__dirname + './../../client'));
};
