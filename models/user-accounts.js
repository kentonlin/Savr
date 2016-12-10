var Sequelize = require('sequelize');
const db = require('../db');

var Transaction = require('./transactions');
var Profile = require('./profile');

var User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

// Profile.belongsTo(User);
// User.sync({force: true})


// User.belongsToMany(Transaction, {through: 'userTransaction'})
// Transaction.belongsToMany(User, {through: 'userTransaction'})

module.exports = User;
