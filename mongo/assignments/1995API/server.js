//Require express, bodyParser
var express = require('express');
var bodyParser = require('body-parser');

// Create express app
var app = express();

// require body_parser to use json
app.use(bodyParser.json());

// require the mongoose configuration file
require('./server/config/mongoose');

// Invoke function sotred in routes and pass it the app variable
var routes = require('./server/config/routes.js');
routes(app);

// Set server to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})