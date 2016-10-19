// Require express and path
var express = require('express');
var path = require('path');

// Create express app
var app = express();

// Static content
app.use(express.static(path.join(__dirname, "./static")));

// Use EJS and set up view engine to use EJS, and set up Views dir
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to views/index.ejs
app.get('/', function(req, res) {
	res.render('index');
});

// Set up server to listen on port 8000 and use socket.io
var server = app.listen(8000, function() {
	console.log("Client connected on port 8000");
});

// Require socket.io module and listen for the server
var io = require('socket.io').listen(server);
// set a variable count to 0
var count = 0;
// Listen for connection to establish and then do what is coded
io.sockets.on('connection', function(socket) {
	console.log('Socket connected');

	// Listen for epic button click
	socket.on('epic_button_click', function() {
		count++;
		console.log(count);
		// send out count to every user
		io.emit('count', { response: count });
	})
	// Listen for reset_button_click
	socket.on('reset_button_click', function() {
		// reset count to zero
		count = 0;
		console.log(count);
		io.emit('reset_count', { response: count });
	})
});