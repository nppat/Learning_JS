//Require express module
var express = require('express');

// Create express app
var app = express();

// Require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pod');

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
var PodSchema = new mongoose.Schema({
	name: String,
	age: Number,
	length: String,
	weight: String
})
mongoose.model('PodMember', PodSchema);  // We are setting this Schema in our Models as 'PodMember'
var Member = mongoose.model('PodMember'); // We are retrieving this Schema from our Models, named 'member'

// Routes
// Root route 
app.get('/', function(req, res) {
	var pack;
	Member.find({}, function(err, pod_list) {
		if(err) {
			console.log("Something went wrong", err);
		}else{
			packs = pod_list;
			res.render('index', {packs: packs});
		}
	});
});

// Create Animal request
app.post('/whale/new', function(req, res) {
	console.log("POST DATA", req.body);
	// create a new User with the name and age pulled from index.ejs form data
	var new_animal = new Member({name: req.body.name, age: req.body.age, length: req.body.length, weight: req.body.weight});
	// Try and save the new user to the db and run a callback function w/ an error (if any) from the operation
	new_animal.save(function(err) {
		if(err) {
			console.log("Something went wrong, whale not saved.");
		}else {
			console.log("Successfully added new whale to the pod.");
			res.redirect('/');
		}
	});
});

// Show individual animal
app.get('/whale/:id', function(req,res) {
	Member.find( {_id: req.params.id }, function(err, individual) {
		if(err) {
			console.log("There was an error.  Whale not found.", err);
		}else{
			console.log("Whale information successfully retrieved.");
			res.render('individual', {individual: individual});
		}
	});
});

// Edit Animal
app.get('/whale/:id/edit', function(req,res) {
	Member.find({ _id: req.params.id }, function(err, individual) {
		if(err) {
			console.log("There was an error.  Whale not found.");
		}else{
			console.log("Whale edit info successfully retrieved.");
			res.render('edit', { individual: individual });
		}
	});
});

app.post('/whale/:id', function(req,res) {
	// ...retrieve 1 record (the first record found) matching {} 
	Member.findOne({ _id: req.params.id }, function(err, individual) {
		individual.name = req.body.name;
		individual.age = req.body.age;
		individual.length = req.body.length;
		individual.weight = req.body.weight;
		individual.save(function(err) {
			if(err) {
				console.log("There was an error.  Whale not updated.");
			}else{
				console.log("Whale updated successfully.");
				res.redirect('/');
			}
		});
	});
});


// Destroy Animal
app.post('/whale/:id/destroy', function(req, res) {
	Member.remove({_id: req.params.id }, function(err) {
		if(err) {
			console.log("There was an error, whale not removed.", err);
		}else{
			console.log("Whale successfully removed.");
			res.redirect('/');
		}
	});
});

// Set server to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})