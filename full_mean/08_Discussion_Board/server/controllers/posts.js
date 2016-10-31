console.log('Server-side: Posts Controller');

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');

function PostsController() {
	this.create_post = function(req,res) {
		var post = new Post({
			topic_id: req.params.topic_id,
			username: req.body.username,
			post: req.body.post
		});

		post.save( function(err, post) {
			if(err) {
				console.log("[Server PostsController Index] - New post not saved");
			} else {
				console.log("[Server PostsController Index] - New post saved");

				// Add and save new post to Topic
				Topic.findOne({_id: req.params.topic_id}, function(err, topic) {
					topic._topic_posts.push(post);
					topic.save();
				})

				res.json(post);  // send object back to factory∂
			}
		});
	}
	this.index_post = function(req,res) {
		Post.find({topic_id: req.params.topic_id}, false, true).populate('_comments').exec(function(err, posts) {
			if (posts == null) {  // If posts are null, send out error and no json
				console.log("[Server PostsController Index] - No posts found on database");
				res.json();
			} else {
				console.log("[Server PostsController Index] - All posts retrieved from database");
				res.json(posts);
			}
		});
	}
	this.like_post = function(req,res) {
		Post.update({_id: req.params.post_id}, {$inc: {like: 1}}, function(err) {
			if(err){
				console.log('[Like Post] - Error', err);
			} else {
				console.log('[Like Post] - Post like updated');
			}
		})
	}
	this.dislike_post = function(req,res) {
		Post.update({_id: req.params.post_id}, {$inc: {dislike: 1}}, function(err) {
			if(err){
				console.log('[Dislike Post] - Error', err);
			} else {
				console.log('[Dislike Post] - Post dislike updated');
			}
		})	
	}
	this.create_comment = function(req,res) {
		//  Find post that comment is associated with
		Post.findOne({_id: req.params.post_id}, function(err, post) {
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
					console.log('[Server Create Comment] - Success')
					post._comments.push(comment);
					post.save();
					res.json( comment );
				}
			});
		});
	}
}
module.exports = new PostsController();