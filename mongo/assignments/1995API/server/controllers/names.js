var mongoose = require('mongoose');
var Name = mongoose.model('Name');

function NameController() {
	this.find_all = function(req, res) {
		Name.find({}, function(err, names) {
			if(err) {
				res.send(err);
			}else{
				res.json(names);
			}
		});
	}

	this.create_new = function(req, res) {
		// create a new User with the name and age pulled from index.ejs form data
		var new_name = new Name(req.params);
		// Try and save the new user to the db and run a callback function w/ an error (if any) from the operation
		new_name.save(function(err) {
			if(err) {
				res.send(err);
			}else {
				console.log("Successfully added new name.");
				res.redirect('/');
			}
		});
	}

	this.show_individual = function(req, res) {
		Name.findOne(req.params, function(err, individual) {
			if(individual == null) {
				res.send("There was an error.  Name not found.");
			}else{
				console.log("Name successfully retrieved.");
				res.json(individual);
			}
		});
	}

	this.destroy = function(req, res) {
		Name.remove(req.params, function(err) {
			if(err) {
				res.send(err);
			}else{
				console.log("Successfully removed.");
				res.redirect('/');
			}
		});
	}
}

module.exports = new NameController();