// Require express and create app
var express = require('express');
var app = express();
// Require path
var path = require('path');
// Require body-parser and initiate with app
var bodyParser = require('body-parser');

// Require Mongoose and connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messages');
var Schema = mongoose.Schema;

// Create Message Schema
var MessagesSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Your name cannot be left blank"], minLength: [4, "Name must be greater than 4 characters."]},
	message: {type: String, required: true},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

// Create Comments Shcema
var CommentsSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
	name: {type: String, required: true},
	comment: { type: String, required: true}
}, {timestamps: true });

// Set Schema in our Models as "Message"
mongoose.model('Message', MessagesSchema);
mongoose.model('Comment', CommentsSchema);

// Retrieve this Schema from Models, stored in the variable named "Message"
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

//  Set up views and view engine to use ejs
app.use(bodyParser.urlencoded({ extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
//  Root route
var errors;  // to store error messages

app.get('/', function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages){
	      res.render('index', {messages: messages, errors: errors });
	});

});
// Add new message
app.post('/message', function(req,res) {
	console.log('POST DATA', req.body);
	// Create a new message
	var new_message = new Message(req.body);
	new_message.save(function(err) {
		if(err){
			console.log("Error:  Message not saved.", err);
			res.redirect('/');
		} else {
			res.redirect('/');
		}
	});
});

// Add new comment to message by message id
app.post('/message/:id', function(req, res) {
	console.log('POST DATA', req.body);
	Message.findOne({_id: req.params.id}, function(err, message){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._message = message._id;
        // now save both to the DB
        comment.save(function(err){
            message._comments.push(comment);  // Push comment to _comment array in message
            message.save(function(err){  // save message
                if(err) {
                	console.log('Error');
                } else {
                	console.log("Comment saved.  Success.")
                	res.redirect('/');
                }
			});
		});
	});
});

// Set app to listen to port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
});