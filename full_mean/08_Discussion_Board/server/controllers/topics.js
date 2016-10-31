console.log('Server-side: Topics Controller')

var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

function TopicsController() {

	// get all the topics
	this.index = function(req, res) {
		Topic.find({}, function(err, topics) {
			if (err){
				console.log('[Server-side: Index Error] - Topics not found on DB');
			} else {
				console.log('[Server-side: Index Success] - All topics found');
				res.json( topics );
			}
		});
	} // end index

	this.create_topics = function(req,res) {
		var topic = new Topic(
			req.body
		);

		topic.save(function(err, topic) {
			if (err) {
				console.log('[Server-side Topic] - Error, Topic not saved', err);
			} else {
				console.log('[Server-side Topic] - Topic Saved');
				topic.post_count = 0;  // set count to zero
				res.json( topic ); // return data object back to factory
			}
		});
	} // end create_topics

	this.single_topic = function(req,res) {
		Topic.findOne({_id: req.params.id}, function(err, topic){
			if(topic == null){
				console.log('[Server-side Topic] - Error.  Topic not retrieved');
			} else {
				console.log('[Server-side Topic] - Topic retrieved');
				res.json( topic );  // send object back to factory that is calling for it
			}
		});
	} // send single_topic
}
module.exports = new TopicsController();