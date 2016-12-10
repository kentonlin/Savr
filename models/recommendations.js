const Sequelize = require('sequelize');
const db = require('../db');

var Recommendation = db.define('recommendation', {
  recommendation: Sequelize.STRING
}); 

// Recommendation.sync({force: true})


module.exports = Recommendation;
