console.log("DashboardController");

// This controller is in charge of displaying the Dashboard for the user
app.controller('DashboardController', ['$scope','$location', '$cookies', 'topicsFactory', 'usersFactory', function($scope,$location,$cookies,topicsFactory,usersFactory){
	$scope.topics = [];  // to store topics

	// This gets all the topics
	var getTopics = function(topics) {
		$scope.topics = topics;
	};

	//  Ensure that user is logged into the platform
	(function() {
		// check to see if the cookie exists w/ user_id
		if ($cookies.get('username') == undefined ){
			$location.url('/login');  // if user_id is not found, redirect to login partial
		} else {
			$scope.username = $cookies.get('username'); // pass username to $scope
			// get all posts
			topicsFactory.index(getTopics);
		}
	})(); 

	//  Logout user
	$scope.logout = function(){
		$cookies.remove('username');  // remove cookie
		$location.url('/login') // send to login partial
	}

	// Create a new post,  send request to the factory
	$scope.create_topic = function() {
		topicsFactory.create_topic($scope.username, $scope.newTopic, function(status, response) {
			if (status == false) {
				//  if status is false, then there was an error
				$scope.topicError = response;
			} else {
				//  If no error, post was added
				$scope.newTopic = {};  // clear new topic form
				$scope.topicError= {}; // clear out errors
				$scope.topics.push(response);  // add topic
			}
		});
	}
}]);