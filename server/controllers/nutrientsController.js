const Promise = require('bluebird');
const db = require('../config/db');
const connection = db.connection;
connection.query = Promise.promisify(connection.query);

const getUserHistoricalNutrients = (req, res) => {
  const username = 'jinsoocha';
  connection.query(`SELECT * FROM historical_user_nutrients WHERE username="${username}"`)
  .then((data) => {
    console.log('====data', data);
    res.status(200).send(typeof data);
  })
  .catch((err) => {
    console.log('error retrieving historical user nutrients: ', err);
    res.send(err);
  });
};

module.exports = {
  getUserHistoricalNutrients,
};
