console.log("UsersFactory");

/*
Set up UsersFactory to login, register, and show User

The factory makes AJAX calls to the server
*/
app.factory('usersFactory', ['$http', function($http) {


	function UsersFactory() {

		// Login
		this.login = function(loginUser, callback) {
			$http.post('/user/login', loginUser).then(function success(response) {
				//  if the login was not successful
				if(typeof(response.data.errors) != 'undefined') {
					callback(false, response.data.errors);
				} else {
					// the login was a success
					callback(true, response.data);
				}
			});
		} // end login

		// Register
		this.register = function(newUser, callback) {
			$http.post('/user/register', newUser).then(
				function success(response) {
					if(typeof(response.data.errors) != 'undefined') {
						// there was an error with the form data
						callback(false, response.data.errors);
					} else {
						// registration was good
						callback(true, response.data);
					}
				}
			);
		}
	} // end UsersFactory
	return new UsersFactory();
}]); // end app.factory