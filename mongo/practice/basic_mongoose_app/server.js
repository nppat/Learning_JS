//Require express module
var express = require('express');

// Create express app
var app = express();

// Require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

// require body_parser and integrate with App
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}));

// require Path
var path = require('path');

// Set up Static Folder, Views directories and view engine -> ejs
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Create Mongoose Schemas
var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
})
mongoose.model('User', UserSchema);  // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User'); // We are retrieving this Schema from our Models, named 'User'

// Routes
// Root route 
app.get('/', function(req, res) {
	var person;
	User.find({}, function(err, users) {
		if(err) {
			console.log("Something went wrong", err)
		}else{
			person = users;
			res.render('index', {person: person});
		}
	})
})

// Add User request
app.post('/users', function(req, res) {
	console.log("POST DATA", req.body);
	// create a new User with the name and age pulled from index.ejs form data
	var user = new User({name: req.body.name, age: req.body.age})
	// Try and save the new user to the db and run a callback function w/ an error (if any) from the operation
	user.save(function(err) {
		if(err) {
			console.log("Something went wrong, user not saved");
		}else {
			console.log("Successfully added a user");
			res.redirect('/');
		}
	})
})

// Set server to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})