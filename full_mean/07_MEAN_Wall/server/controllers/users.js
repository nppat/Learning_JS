console.log('Users Controller - Server-side');

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var User = mongoose.model('User');

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
} // end UsersController()
module.exports = new UsersController();