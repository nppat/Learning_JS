console.log('Topic Controller');

app.controller('TopicController', ['$scope','$location', '$cookies', '$routeParams','topicsFactory', function($scope,$location,$cookies,$routeParams,topicsFactory){
	// This function checks to see if a user is logged in , and if so, pulls the user data from the DB, otherwsie redirects to login page
	(function(){
		if($cookies.get('username') == undefined) {
			$location.url('/login');
		} else {
			$scope.username = $cookies.get('username');
			topicsFactory.single_topic($routeParams.id, function(status, topic) {
				if(status == false) {
					$location.url('/dashboard');
				} else {
					$scope.topic = topic;
				}
			});
			topicsFactory.index_posts($routeParams.id, function(posts) {
				$scope.posts = posts;
			});
		}
	})();

	// Create a new post,  send request to the factory
	$scope.create_post = function(topic_id) {
		topicsFactory.create_post(topic_id, $scope.username, $scope.newPost, function(status, response) {
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
		var post_id = $scope.posts[$scope.posts.length - 1 - index]._id;
		var newComment = $scope.posts[$scope.posts.length - 1 - index].newComment;

		topicsFactory.create_comment(post_id, $scope.username, newComment, function(status, response) {
			if (status == false) {
				$scope.commentError = response;
			} else {
				$scope.commentError = {};  // clear any comment errors
				delete $scope.posts[$scope.posts.length - 1 - index].newComment;  // clear comment form
				$scope.posts[$scope.posts.length -1 - index]._comments.push(response) // add comments
			}
		});
	}

	$scope.like = function(index) {
		var id = $scope.posts[$scope.posts.length -1 - index]._id;
		console.log('Like button pressed');
		topicsFactory.like_post(id);
		$scope.posts[$scope.posts.length - 1 - index].like += 1;
	}


	$scope.dislike = function(index) {
		var id = $scope.posts[$scope.posts.length -1 - index]._id;
		console.log('Disike button pressed');
		topicsFactory.dislike_post(id);
		$scope.posts[$scope.posts.length - 1 - index].dislike += 1;
	}

	$scope.logout = function() {
		$cookies.remove('username');
		$location.url('/login');
	}
}]);




