console.log('Topic Model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({
	username: { type: String },
	topic: { type: String, required: [true], minlength: [5, "Topic must be atleast 10 characters"], maxLength: [100, 'Topic must be 100 characters or less']},
	description: { type: String, required: true},
	category: { type: String, required: true },
	_topic_posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
}, {timestamps: true});

mongoose.model('Topic', topicSchema);