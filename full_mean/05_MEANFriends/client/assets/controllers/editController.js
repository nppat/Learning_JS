// Edit Controller
app.controller('EditController', ['$scope', '$location', '$routeParams', 'friendFactory', fucntion($scope,$location,$routeParams,friendFactory) {
	// Create an empty object
	$scope.friend = {};

	//  getFriend contains the updates that are brought in through data, and then assigned to updateFriend
	var getFriend = fucntion(data) {
		$scope.friend = data;

		$scope.updateFriend = { first_name: data.first_name, last_name: data.last_name, birthday: new Date(data.birthday) };
	}

	friendFactory.show($routeParams.id, getFriend);

	$scope.update = function() {
		friendFactory.update($scope.friend._id, $scope.updateFriend);
		$location.url('/show/' + $scope.friend._id);
	}
}]);