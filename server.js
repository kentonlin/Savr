var express = require('express');
var app = express();
var router = require('express').Router;
var Sequelize = require('sequelize');
var db = require('./db');
var path = require('path');

var bodyParser = require('body-parser');

//imports the models for each database table
var Profile = require('./models/profile.js');
var Recommendation = require('./models/recommendations.js');
var Transaction = require('./models/transactions.js');
var User = require('./models/user-accounts.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public/bundle')));
app.use(express.static(path.join(__dirname, '/src')));


//Endpoint used to retrieve all user accounts in the database
app.get('/api/user', (req, res) => {
  User.findAll()
  .then((data) => {
    res.send(data)
  })
})

//Endpoint used to retrieve data on a specific user account
app.get('/api/user/:id', (req, res) => {
  let id = req.params.id
  User.findById(id)
  .then((user) => {
    res.send(user)
  })
})

//Endpoint used to create a new user in the database
app.post('/api/user', (req, res) => {
  let info = req.body;
  console.log(info)
  User.create({
    first_name: info.first_name,
    last_name:info.last_name,
    username:info.username,
    password:info.password
  })
  res.send('User was successfully created')
})

//Endpoint used to get all transactions in the database
app.get('/api/transactions', (req, res) => {
  Transaction.findAll()
  .then((transaction) => {
    res.send('Getting transactions')
    // res.send(transaction)
  })
})

//Endpoint used to get a specific transaction in the database
app.get('/api/transactions/:id', (req, res) => {
  let id = req.params.id
  Transaction.findById(id)
  .then((transaction) => {
    res.send('getting specific transactions')
    // res.send(transaction)
  })
})

app.post('/api/transactions', (req, res) => {
  let id = req.body.id
  let data = req.body.data
  Transaction.create({
    data: data
  })
  .then((transaction) => {
    transaction.setUser(id)
    res.send('Transaction created')
  })
})

//Endpoint used to retrieve user recommendations from the database
app.get('/api/recommendations', (req, res) => {
  Recommendation.findAll()
  .then((recommendations) => {
    res.send('Fetching recommendations')
    // res.send(recommendations)
  })
})

app.get('/api/profile', (req, res) => {
  Profile.findAll()
  .then((profiles) => {
    res.send(profiles)
  })
})

app.get('/api/profile/:id', (req, res) => {
  var id = req.params.id
  Profile.findById()
  .then((profile) => {
    res.send(profile)
  })
})

app.post('/api/profile', (req, res) => {
  var info = req.body
  Profile.create({
    first_name: info.first_name,
    last_name: info.last_name,
    age: info.age,
    sex: info.sex,
    occupation: info.occupation,
    income: info.income,
    address: info.address,
    zipcode: info.zip
  })
  .then((profile) => {
    res.send('Profile successfully created')
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

//If database is in sync, create port used to listen to url requests.
db.sync()
.then(() => {
  app.listen(3000, () => {
    console.log('server is running on port 3000')
  })
})
