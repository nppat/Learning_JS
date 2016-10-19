var mongoose = require('mongoose');
var Member = mongoose.model('PodMember');

module.exports = {
	find_all:  function(req, res) {
		var packs;
		Member.find({}, function(err, pod_list) {
			if(err) {
				console.log("Something went wrong", err);
			}else{
				packs = pod_list;
				res.render('index', {packs: packs});
			}
		});
	},

	create_new: function(req, res) {
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
	},

	show_individual: function(req, res) {
		Member.find( {_id: req.params.id }, function(err, individual) {
			if(err) {
				console.log("There was an error.  Whale not found.", err);
			}else{
				console.log("Whale information successfully retrieved.");
				res.render('individual', {individual: individual});
			}
		});
	},

	edit: function(req, res) {
		Member.find({ _id: req.params.id }, function(err, individual) {
			if(err) {
				console.log("There was an error.  Whale not found.");
			}else{
				console.log("Whale edit info successfully retrieved.");
				res.render('edit', { individual: individual });
			}
		});
	},

	update: function(req, res) {
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
	},

	destroy: function(req, res) {
		Member.remove({_id: req.params.id }, function(err) {
			if(err) {
				console.log("There was an error, whale not removed.", err);
			}else{
				console.log("Whale successfully removed.");
				res.redirect('/');
			}
		});
	}
}