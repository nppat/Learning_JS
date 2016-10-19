// require express
var express = require('express');
//require path
var path = require('path');

// create express app
var app = express();

// Static Content
app.use(express.static(path.join(__dirname, './static')));

// Set up EJS and Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
	// Root
app.get('/', function(req, res) {
	res.render('index');
})

// Back button route
app.get('/back', function(req, res) {
	res.redirect('/');
})
//  Listen on 8000
var server = app.listen(8000, function() {
	console.log("Listening on port 8000.");
})
var io = require('socket.io').listen(server);
//  Set up connection event
io.sockets.on('connection', function(socket) {
	console.log("Client connected");
	console.log(socket.id);

	socket.on("posting_form", function (data){
	    console.log(data);
	    //  gather in input from form and send to response page
	    socket.emit('updated_message', data);
	    // create random number from 1 - 1000 and emit to page
	    socket.emit('random_number', { number: Math.floor(Math.random() * 1000) + 1 });
	})
})