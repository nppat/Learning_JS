// Set up express, path, body-parse, mongoose
var express = require('express');
var	mongoose = require('mongoose');
var	path = require('path');
var	bp = require('body-parser');
var	app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// Run server, listen on port 8000
app.listen(8000, function(){
	console.log("Listening on port 8000");
});