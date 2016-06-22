const morgan = require('morgan');

module.exports = (app, express) => {
  app.set('port', 1337);
  app.use(morgan('dev'));
  // app.use(express.static(__dirname + './../../client'));
};
