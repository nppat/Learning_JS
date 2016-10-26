console.log('Posts Controller - Server-side');

var mongoose = require('mongoose');
var Post = mongoose.model('Post');

// Create PostsController()
function PostsController() {
	// Find all Posts and Comments
	this.index = function(req, res) {
		Post.find({}, false, true).populate('_comments').exec(function(err, posts) {
			if (posts == null) {  // If posts are null, send out error and no json
				console.log("[Server PostsController Index] - No posts found on database");
				res.json();
			} else {
				console.log("[Server PostsController Index] - All posts retrieved from database");
				res.json(posts);
			}
		});
	} // end index
	// Create a new post
	this.create_post = function(req, res) {
		var post = new Post({
			email: req.body.email,
			post: req.body.post
		});

		post.save( function(err, post) {
			if(err) {
				console.log("[Server PostsController Index] - New post not saved");
			} else {
				console.log("[Server PostsController Index] - New post saved");
				res.json(post);
			}
		});
	}

}
module.exports = new PostsController();