//Require express module and path
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
// Create express app
var app = express();
// require body_parser and integrate with App
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));
// Set up Static Folder, Views directories and view engine -> ejs
app.use(express.static(path.join(__dirname, '../client/static')));
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');
// require the mongoose configuration file
require('../server/config/mongoose');
// Invoke function sotred in routes and pass it the app variable
var routes = require('../server/config/routes.js');
routes(app);
// Set server to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})