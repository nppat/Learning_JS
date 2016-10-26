app.factory("wallsFactory", ['$http', function($http) {

	function WallsFactory() {

		// Get all posts from server
		this.index = function(callback) {
			$http.get('/posts').then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log('[Factory Index: ERROR] - Posts not retreived' + response);
				}
			);
		} // end index

		// Create new post
		this.create_post = function(username, newPost, callback) {
			newPost.username = username;
			$http.post('/posts', newPost).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Create_post: ERROR] - New Post not created' + response);
				}
			);
		} // end create_post

		// Create a new comment
		this.create_comment = function(id, username, newComment, callback) {

			var newComment = {
								username: username,
								comment: newComment
							};

			// id is the '_id' of the 'post' that the new 'comment' will be added to.
			$http.post('/comments/' + id, newComment).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Create_comment: ERROR] - New Comment not created' + response);
				}
			);
		} // end create_comment
	}
	return new WallsFactory();
}]);