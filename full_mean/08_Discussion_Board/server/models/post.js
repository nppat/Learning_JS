console.log('Post and Comment Models');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Post Model
var postSchema = new mongoose.Schema({
	// Post will have username, post, timestamp, and any associated comments
	topic_id: {type: String},  // this will show which topic post belong to
	username: { type: String },  // which user wrote post
	post: { type: String, required: [true], minLength: [25, 'Post must be long than 25 characters'], maxLenght: [140, "Post cannot be over 140 characters"] },
	like: {type: Number, default: 0},
	dislike: {type: Number, default: 0},
	_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

// Create Comment Model
var commentSchema = new mongoose.Schema({
	// Associate to post
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	username: { type: String},
	comment: { type: String, required: [true], minLength: [25, 'Comment must be long than 25 characters'], maxLenght: [140, "Comment cannot be over 140 characters"] }
}, {timestamps: true});

mongoose.model('Post', postSchema);
mongoose.model('Comment', commentSchema);