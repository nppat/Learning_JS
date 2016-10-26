console.log("UserController");

// This controller is in charge of displaying the Wall
app.controller('UserController', ['$scope','$location', '$cookies', 'wallsFactory', 'usersFactory', function($scope,$location,$cookies,wallsFactory,usersFactory){
	$scope.posts = [];  // to store posts

	// Populate the posts
	var getPosts = function(posts) {
		$scope.posts = posts;
	};

	//  Ensure that user is logged into the platform
	(function() {
		// check to see if the cookie exists w/ user_id
		if ($cookies.get('username') == undefined ){
			$location.url('/login');  // if user_id is not found, redirect to login partial
		} else {
			$scope.username = $cookies.get('username'); // pass username to $scope
			// get all posts
			wallsFactory.index(getPosts);
		}
	})(); 

	//  Logout user
	$scope.logout = function(){
		$cookies.remove('username');  // remove cookie
		$location.url('/login') // send to login partial
	}

	// Create a new post,  send request to the factory
	$scope.create_post = function() {
		wallsFactory.create_post($scope.username, $scope.newPost, function(status, response) {
			if (status == false) {
				//  if status is false, then there was an error
				$scope.postError = response;
			} else {
				//  If no error, post was added
				$scope.newPost = {};  // clear new post form
				$scope.postError= {}; // clear out errors
				$scope.posts.push(response);  // add to list of posts
			}
		});
	}

	// Create new comment, send request to factory
	$scope.create_comment = function(index) {
		// comments are in descending order
		var id = $scope.posts[$scope.posts.length - 1 - index]._id;
		var newComment = $scope.posts[$scope.posts.length - 1 - index].newComment;

		wallsFactory.create_comment(id, $scope.username, newComment, function(status, response) {
			if (status == false) {
				$scope.commentError = response;
			} else {
				$scope.commentError = {};  // clear any comment errors
				delete $scope.posts[$scope.posts.length - 1 - index].newComment;  // clear comment form
				$scope.posts[$scope.posts.length -1 - index]._comments.push(response) // add comments
			}
		});
	}
}]);