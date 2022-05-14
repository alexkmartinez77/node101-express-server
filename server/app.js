// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');

// create your express server below
var app = express();

//middleware
app.use(morgan('dev'));

//routes
app.get('/', function(req,res){
  res.status(200).send('New express Server');
});

app.get('/data', function(req,res){
  res.status(200).send(data);
});

// finally export the express application
module.exports = app;
