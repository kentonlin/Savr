var Sequelize = require('sequelize');
const db = require('../db');

var User = require('./user-accounts.js');

var Transaction = db.define('transaction', {
  userId: Sequelize.STRING,
  company: Sequelize.STRING,
  price: Sequelize.DECIMAL(10,2),
  dealCompany: Sequelize.STRING,
  dealURL: Sequelize.STRING,
  dealImage: Sequelize.STRING
})

Transaction.sync({force: true})

// Transaction.belongsTo(User)
// Transaction.sync({force: true})


module.exports = Transaction;
//Note to self: Create an associating between the user and transaction tables.
