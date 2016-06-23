const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  database: process.env.APP_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = {
  connection,
};
