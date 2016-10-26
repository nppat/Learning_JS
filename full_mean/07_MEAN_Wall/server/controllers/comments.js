console.log('Comments Controller - Server-side');

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

function CommentsController() {
	// create a new comment
	this.create_comment = function(req, res){
		//  Find post that comment is associated with
		Post.findOne({_id: req.params.id}, function(err, post) {
			// Bring in data off of form
			var comment = new Comment(req.body);
			// Set reference from comment._post
			comment._post = post._id;
			// Save to DB
			comment.save(function(err, comment) {
				if(err) {
					// If there is an error, send message to console
					console.log("[Server CREATE COMMENT ERROR] - Comment not saved", err);
				} else {
					// If no errors, store comment to BD and save to associated post
					post._comments.push(comment);
					post.save();
					res.json(comment);
				}
			});
		});
	}
}

module.exports = new CommentsController();