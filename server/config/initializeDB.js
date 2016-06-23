const Promise = require('bluebird');
const db = require('./db');
const connection = db.connection;
connection.query = Promise.promisify(connection.query);
const data = require('./data');

connection.query('CREATE DATABASE IF NOT EXISTS gobble_profile')
.then(() => connection.query('USE gobble_profile'))
.then(() => connection.query('CREATE TABLE IF NOT EXISTS historical_user_nutrients('
  + 'id INT NOT NULL AUTO_INCREMENT,'
  + 'PRIMARY KEY(id),'
  + 'date DATE NOT NULL,'
  + 'username VARCHAR(30) NOT NULL,'
  + 'cholesterol VARCHAR(30),'
  + 'sodium VARCHAR(30),'
  + 'carbohydrates VARCHAR(30),'
  + 'fiber VARCHAR(30),'
  + 'protein VARCHAR(30),'
  + 'vitamina VARCHAR(30),'
  + 'vitaminc VARCHAR(30),'
  + 'vitamind VARCHAR(30),'
  + 'vitamine VARCHAR(30),'
  + 'vitamink VARCHAR(30),'
  + 'vitaminb1 VARCHAR(30),'
  + 'vitaminb2 VARCHAR(30),'
  + 'vitaminb6 VARCHAR(30),'
  + 'vitaminb9 VARCHAR(30),'
  + 'vitaminb12 VARCHAR(30),'
  + 'vitaminpp VARCHAR(30),'
  + 'calcium VARCHAR(30),'
  + 'iron VARCHAR(30),'
  + 'energy VARCHAR(30),'
  + 'fat VARCHAR(30),'
  + 'saturatedfat VARCHAR(30),'
  + 'monounsaturatedfat VARCHAR(30),'
  + 'polyunsaturatedfat VARCHAR(30),'
  + 'omega3fat VARCHAR(30),'
  + 'transfat VARCHAR(30),'
  + 'starch VARCHAR(30),'
  + 'polyols VARCHAR(30),'
  + 'salt VARCHAR(30),'
  + 'alcohol VARCHAR(30),'
  + 'biotin VARCHAR(30),'
  + 'pantothenicacid VARCHAR(30),'
  + 'potassium VARCHAR(30),'
  + 'phosphorus VARCHAR(30),'
  + 'magnesium VARCHAR(30),'
  + 'zinc VARCHAR(30),'
  + 'copper VARCHAR(30),'
  + 'manganese VARCHAR(30),'
  + 'selenium VARCHAR(30),'
  + 'chromium VARCHAR(30),'
  + 'molybdenum VARCHAR(30),'
  + 'iodine VARCHAR(30),'
  + 'caffeine VARCHAR(30),'
  + 'taurine VARCHAR(30)'
  + ')'))
.then(() => {
  console.log('CREATED TABLE historical_user_nutrients in DATABASE gobble_profile');
  return Promise.all(data.map((item) =>
    connection.query(`INSERT INTO historical_user_nutrients (date, username, calcium, 
      energy) VALUES("${item.date}", "${item.username}", "${item.calcium}", "${item.energy}")`
  )));
})
.catch((err) => {
  console.log(err);
});
