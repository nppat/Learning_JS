// Home Controller
app.controller('HomeController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
	$scope.friends = [
		{first_name: "Patrick", last_name:"Adamson", birthday:""}
	];  // create empty array to story friends in

	// Get friends from the Friend DB
	var showFriends = function(data) {
		$scope.friends = data;
	}

	//  Get ahold of the factory to get the friends data
	friendsFactory.index(showFriends);

	// Delete friend from list
	// $scope.delete = function(id) {
	// 	friendsFactory.delete(id, showFriends);
	// }
	console.log($scope.friends);
}]);
