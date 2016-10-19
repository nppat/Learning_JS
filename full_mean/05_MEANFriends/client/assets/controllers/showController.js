// Show controller
app.controller('ShowController', ['$scope', '$routeParams', 'friendsFactory', function($scope, $routeParams, friendsFactory) {
	$scope.friend = {}; // create empty object

	var getFriend = function(data) {
		$scope.friend = data;
	}

	friendsFactory.show($routeParams.id, getFriend);
}])