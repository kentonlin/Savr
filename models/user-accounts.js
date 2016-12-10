var Sequelize = require('sequelize');
const db = require('../db');

var Transaction = require('./transactions')

var User = db.define('user', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

User.sync({force: true})


// User.belongsToMany(Transaction, {through: 'userTransaction'})
// Transaction.belongsToMany(User, {through: 'userTransaction'})

module.exports = User;
