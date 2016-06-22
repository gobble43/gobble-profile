const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: dbConfig.password,
});

module.exports = {
  connection,
};
