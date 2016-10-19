console.log('HomeController');

// This controller is for controlling data on home.html
// It is responsible for checking that the user is logged in via a cookie,
// and if the user is logged in, to pass data from the factory to the page via scope.
// This controller also ensures that the user is able to logout.

app.controller('HomeController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope,$location,$cookies,usersFactory) {
	// create cookie funciton to see if user is logged in , and if so, share data back to home.html via scope
	(function () {
		if($cookies.get('user_id') == undefined) {
			$location.url('/login');  // if user_id is undefined, send to login.html
		} else {
			usersFactory.show($cookies.get('user_id'), function(response) {
				$scope.user = {
					first_name: response.first_name,
					last_name: response.last_name
				}
			});
		}
	})();

	// Log out the user
	$scope.logout = function() {
		$cookies.remove('user_id'); // remove the user_id to ensure that the user has to log back in
		$location.url('/login');  // send the user to the login partial
	}
}]);