var Sequelize = require('sequelize');
const db = require('../db');

var User = require('./user-accounts.js');

var Transaction = db.define('transaction', {
  entertainment: Sequelize.STRING,
  food: Sequelize.STRING,
  other: Sequelize.STRING,
  shopping: Sequelize.STRING,
  transportation: Sequelize.STRING,
  travel: Sequelize.STRING,
  utilities: Sequelize.STRING
})

// Transaction.belongsTo(User)
Transaction.sync({force: true})

module.exports = Transaction;
//Note to self: Create an associating between the user and transaction tables.
