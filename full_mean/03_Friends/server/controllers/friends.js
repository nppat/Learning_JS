console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends) {
      if(err) {
        res.send(err);
      }else{
        res.json(friends);
      }
    });
  };
  this.create = function(req,res){
    // create a new User with the name and age pulled from index.ejs form data
    var new_friend = new Friend(req.params);
    // Try and save the new user to the db and run a callback function w/ an error (if any) from the operation
    new_friend.save(function(err) {
      if(err) {
        res.send(err);
      }else {
        console.log("Successfully added new friend.");
        res.redirect('/');
      }
    });
  };
  this.update = function(req,res){
    Friend.update({ _id: req.params.id }, { first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }, function(err) {
      if (err) {
        console.log("Friend not updated", err);
        res.render('/friends/edit', { errors: friend.errors });
      }
      else {
        console.log("Successfully updated friend");
        res.redirect('/friends');
      }
    });
  };
  this.delete = function(req,res){
    Friend.remove(req.params, function(err) {
      if(err) {
        res.send(err);
      }else{
        console.log("Successfully removed.");
        res.redirect('/');
      }
    });
  };
  this.show = function(req,res){
    Friend.findOne(req.params, function(err, individual) {
      if(individual == null) {
        res.send("There was an error.  Friend not found.");
      }else{
        console.log("Name successfully retrieved.");
        res.json(individual);
      }
    });
  };
}
module.exports = new FriendsController(); // what does this export?