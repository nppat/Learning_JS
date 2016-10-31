console.log('Profile Controller');

app.controller("ProfileController", ['$scope','$location','$cookies','$routeParams', 'usersFactory', function($scope,$location,$cookies,$routeParams,usersFactory) {
	// This function checks to ensure user is logged in, and if so, passes profile data, otherwise redirects to login page
	(function() {
		if($cookies.get('username') == undefined) {
			$location.url('/login');
		} else {
			$scope.username = $routeParams.username;
			usersFactory.profileData($scope.username, function(response) {
				$scope.count = response;
			});
		}
	})();

	$scope.logout = function() {
		$cookies.remove('username');  // remove username
		$location.url('/login');  // send to login page
	}
}]);