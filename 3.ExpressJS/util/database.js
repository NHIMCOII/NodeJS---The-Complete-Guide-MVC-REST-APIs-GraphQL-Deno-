// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejs-complete',
//   password: '123456'
// });

// module.exports = pool.promise(); //async

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-complete','root','123456',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;