// Server
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	app = express();

// Set up static routes
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// require bodyParser
app.set(bodyParser.urlencoded({ extended:true }));
app.set(bodyParser.json());

// require mongoose
require(path.join(__dirname, './server/config/mongoose.js'));

// Routes file
var routes = require(path.join(__dirname, './server/config/routes.js'))(app);

// Run server on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000"); 
});