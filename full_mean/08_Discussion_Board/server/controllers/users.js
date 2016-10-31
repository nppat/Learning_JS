console.log('Server-side: Users Controller');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');

// Create Users Controller
function UsersController() {

	// Login
	this.login = function(req,res) {
		// set email and password var to the data pulled from the body
		var email = req.body.login_email;
		var password = req.body.login_password;

		// find one User email
		User.findOne({ email: email }, function(err, user) {
			// Check to see if user email/password is valid
			if (err) {
				res.json({errors: '***** Server: Email and/or password is invalid ******'});
			} else {
				// If user checks out, compare user with password
				if(bcrypt.compareSync(password, user.password)  == false ) {
					// passwords do not match
					res.json({errors: '***** Server: Email and/or password is invalid ******'});
				}
				else{
					// user and password match
					console.log("******* Server-side: Login Successfull ******")
					res.json( user );
				}
			}
		});
	} // end login

	// Register
	this.register = function(req,res) {
		// create new User
		var user = new User ({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password,
			username: req.body.username
		});
		// Save user
		user.save( function(err, user) {
			if(err) {
				console.log("***** Server: Register Error ******", err)
				res.json({ errors: err.errors });
			} else {
				console.log('***** Server: Registraton Success ******', user)
				res.json(user);
			}
		});
	} // end register

	// Profile Data
	this.profileData = function(req,res) {
		var username = req.params.username;
		var count_data = {
			topic: 0,
			post: 0,
			comment: 0
		};
		Topic.count({username: username}, function(err, count){
			count_data.topic = count; // update count
		})
		Post.count({username: username}, function(err, count){
			count_data.post = count;  // update count
		})
		Comment.count({username: username}, function(err, count){
			count_data.comment = count;
			res.json( count_data );  // send info to factory
		})
	}
} // end UsersController()
module.exports = new UsersController();