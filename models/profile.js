var Sequelize = require('sequelize');
const db = require('../db');

var User = require('./user-accounts')

var Profile = db.define('profile', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  sex: Sequelize.STRING,
  occupation: Sequelize.STRING,
  income: Sequelize.INTEGER,
  address: Sequelize.STRING,
  zipcode: Sequelize.INTEGER
})

// User.hasOne(Profile);
Profile.sync({force: true})

module.exports = Profile;
