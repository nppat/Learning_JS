console.log('Users Controller - Server-side');

// This UsersController is server-side.  It handles the login, register, and show requests and responses that the server handles

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function UsersController() {

	// Login
	this.login = function(req,res) {
		// set email and password var to the data pulled from the body
		var email = req.body.email;
		var password = req.body.password;

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
			birthday: req.body.birthday
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

	//  Show User
	this.show = function(req,res) {
		// Find one user by user_id
		User.findOne({ _id: req.params.id }, function(err, user) {
			if (err) {
				console.log("****** Server: Show error ******")
				res.json({errors: "****** Server: User not retrieved ******"});
			} else {
				res.json(user);
			}
		});
	}
}

module.exports = new UsersController();