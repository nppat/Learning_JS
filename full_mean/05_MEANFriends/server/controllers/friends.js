console.log('friends controller');

var mongoose = require('mongoose');  // require mongoose
var Friend = mongoose.model('Friend'); // associate Friends with the mongoose model

function FriendsController(){
  //  Show all of the friends that are stored in the database
  this.index = function(req,res){
    Friend.find({}, function(err, friends) {
      if(err) {
        res.send(err);  // if error, send error
      }else{
        console.log("Successfully retrieved all friends in the DB.");
        res.json(friends);  // else return all friend objects from DB
      }
    });
  };

  // Create a new Friend object to store in the DB
  this.create = function(req,res){
    // create a new Friend
    var friend = new Friend(req.body);
    // Try and save the new user to the db and run a callback function w/ an error (if any) from the operation
    friend.save(function(err) {
      if(err) {
        res.send(err);
      }else {
        console.log("Successfully added new friend.");
        Friend.find({}, function(err, friends) {
          res.json(friends);
        })
      }
    });
  };

  // Update a Friend's information and save to the DB
  this.update = function(req,res){
    Friend.update({ _id: req.params.id }, { first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }, function(err) {
      if (err) {  // If errors, redirect back to edit page
        console.log("Friend not updated", err);
        res.render('/friends/edit', { errors: friend.errors });
      }
      else {  // If success, reidrect to home
        console.log("Successfully updated friend");
        res.redirect('/');
      }
    });
  };

  // Remove Friend from DB
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err) {
      if(err) {
        res.send(err);
      }else{
        console.log("Successfully removed.");
        res.redirect('/');
      }
    });
  };

  // Show one individual Friend from the DB, to be used on show.html
  this.show = function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend) {
      if(friend == null) {
        res.send("There was an error.  Friend not found.");
      }else{
        console.log("Name successfully retrieved.");
        res.json(friend);  // return friend found by _id
      }
    });
  };
}
module.exports = new FriendsController();