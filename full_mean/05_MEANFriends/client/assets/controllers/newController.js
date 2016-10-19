// New Controller
app.controller('NewController', ['$scope', '$location', 'friendsFactory', function($scope,$location,friendsFactory) {
	$scope.create = function() {
		 // create new friend when ng-click = create() is pressed on new.html form using the newFriend model in the form inputs
		friendsFactory.create($scope.newFriend);
		$scope.newFriend = {}; //  this clears out the form on new.html
		$location.url('/');  // this will redirect back to index.html
	};
}]);