// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jsonObject = require('./data.json');
// create your express server below
var app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json())

//routes
app.get('/', function(req,res){
  res.status(200).send('New express Server');

});

app.get('/data', function(req,res){
  res.status(200).send(jsonObject);
});
// finally export the express application
module.exports = app;
