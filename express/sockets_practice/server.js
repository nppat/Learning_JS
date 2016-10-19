// require express and path
var express = require('express');
var path = require('path');

// Create express app
var app = express();

// Static content
app.use(express.static(path.join(__dirname, "./static")));
// EJS and Views folder
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

//Root route to render index.ejs view
app.get('/', function(req, res) {
	res.render('index');
})

//  Listen on port 8000
var server = app.listen(8000, function() {
	console.log("Listening on port 8000");
});

var io = require('socket.io').listen(server);
//  Set up connection event
io.sockets.on('connection', function(socket) {
	console.log("We are using SOCKETS!");
	console.log(socket.id);
	socket.on("button_clicked", function (data){
	    console.log('Someone clicked a button!  Reason: ' + data.reason);
	    socket.emit('server_response', {response: "sockets are the best!"});
	})
})
