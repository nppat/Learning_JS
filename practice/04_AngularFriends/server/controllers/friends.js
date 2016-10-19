console.log('Friends Controller');
// Require mongoose
var mongoose = require('mongoose');

// Get model
var Friend = mongoose.model('Friend');

// Friends Controller
function FriendsController() {
	// Show all Friend objects in DB on index
	this.index = function(req,res) {
		Friend.find({}, function(err, friends) {
			if (err) {
				res.send(err);
				console.log("There was an error, Friends not found");
			} else {
				res.json(friends, {placeholder: 'index'});
			}
		})
	};
	// Create a new Friend
	this.create = function(req,res) {
		var new_friend = new Friend(req.params)  // pull form inputs to create friend
		new_friend.save(function(err) {
			if (err) {
				console.log("There was an error, friend not saved");
			} else {
				console.log("Friend saved");
				res.redirect('/');
			}
		});
	};
	// Update Friend
	this.update = function(req,res) {
		Friend.update({ _id: req.params.id }, { first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }, function(err) {
			if (err) {
				console.log("Friend not updated", err);
				res.render('/friends/edit', { errors: friend.errors });
			} else {
				console.log("Successfully updated friend");
				res.redirect('/friends');
			}
		});
	};
	// Destroy Friend
	this.delete = function(req,res) {
		Friend.remove(req.params, function(err) {
			if (err) {
				console.log("There was an error, Friend not removed");
			} else {
				console.log("Friend successfully removed");
				res.redirect('/');  // redirect back to root
			}
		});
	};
	// Show Friend based upon ID
	this.show = function(req,res) {
		Friend.findOne(req.params, function(err, individual) {
			if (individual == null) {
				console.log("There was an error, friend not found");
			} else {
				console.log("Friend found");
				res.json(individual);
			}
		});
	};
}

module.exports = new FriendsController();