const db = require('../config/db');
const connection = db.connection;
const Promise = require('bluebird');
Promise.promisifyAll(connection, { multiArgs: true });

const getUserHistoricalNutrients = (req, res) => {
  let username;
  connection.query(`SELECT * FROM historical_user_nutrients WHERE username="${username}"`)
  .then((rows, fields) => {
    console.log('====rows', rows, '====fields', fields);
  })
  .catch((err) => {
    console.log('error retrieving historical user nutrients: ', err);
    res.send(err);
  });
};

module.exports = {
  getUserHistoricalNutrients,
};
