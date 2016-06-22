const db = require('../config/db');
const connection = db.connection;
const Promise = require('bluebird');
Promise.promisifyAll(connection, { multiArgs: true });
