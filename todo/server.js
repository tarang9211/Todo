var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect(database.url);


//server static files
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());

require('./app/routes')(app);


app.listen(8000);
console.log('app running on port 8000');