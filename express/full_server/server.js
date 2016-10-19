// require express
var express = require('express');
// path module
var path = require('path');
// create the express app
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// set up ejs and views folder
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

//Routes
// root route
app.get('/', function(req,res) {
	res.render("index");
})

// post route for adding user
app.post('/users', function(req, res) {
	console.log("POST DATA", req.body);
	//This is where we would add the user to the database
	//  Then redirect to the root route
	res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000");
})