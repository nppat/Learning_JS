console.log('TopicsFactory');

app.factory('topicsFactory', ['$http', function($http) {
	function TopicsFactory() {

		// Get all posts from server
		this.index = function(callback) {
			$http.get('/topic').then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log('[Factory Index: ERROR] - Topics not retreived' + response);
				}
			);
		} // end index

		// Create new topic
		this.create_topic = function(username, newTopic, callback) {
			newTopic.username = username;

			$http.post('/topic', newTopic).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined'){
						callback(false, response.data.errors);
					} else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Create Topic] - Error.  Topic not created');
				}
			);
		} // end create_topic

		// Create new post
		this.create_post = function(topic_id, username, newPost, callback) {
			newPost['username'] = username;
			$http.post('/post/' + topic_id, newPost).then(
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
		this.create_comment = function(post_id, username, newComment, callback) {

			var newComment = {
								username: username,
								comment: newComment
							};

			// id is the '_id' of the 'post' that the new 'comment' will be added to.
			$http.post('/comment/' + post_id, newComment).then(
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

		this.index_posts = function(topic_id, callback) {
			$http.get('/post/' + topic_id).then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log('[Index_Post] - Error');
				}
			);
		} // end index_post

		// Retrieve single topic
		this.single_topic = function(id, callback) {
			$http.get('/topic/' + id).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Single Topic] - Error');
				}
			);
		}

		// Incriment like
		this.like_post = function(post_id) {
			$http.put('post/like/' + post_id).then(
				function success(response) {
				},
				function error(response) {
					console.log("[Like] - Error");
				}
			);
		} // end like

		// Incriment dislike
		this.dislike_post = function(post_id) {
			$http.put('post/dislike/' + post_id).then(
				function success(response) {
				},
				function error(response) {
					console.log("[Dislike] - Error");
				}
			);
		} // end dislike
	} // end TopicsFactory
	return new TopicsFactory();
}]);