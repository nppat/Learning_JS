//  Require express, Create express app, mongoose
var express = require('express');
var app = express();
var mongoose = require('mongoose');
// Connect mongoose db
mongoose.connect('mongodb://localhost/quotes');

// Require path, bodyParser
var path = require('path');

// Set up Static , Views, and view engine
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
// Integrate bodyParser with app
app.use(bodyParser.urlencoded({ extended: true }));

// Create Mongoose Schema
var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String
});
// Set schema in our Models as "Quote"
mongoose.model('Quote', QuotesSchema);
// Retrieve this Schema from Models, stored in variable named "Quote"
var Quote = mongoose.model('Quote');


// Routes
// Root route
app.get('/', function(req,res) {
	res.render('index');
});

//  Add new quote
app.post('/quotes', function(req, res) {
	console.log('POST DATA', req.body);
	// Create a new quote
	var new_quote = new Quote({ name: req.body.name, quote: req.body.quote });
	new_quote.save(function(err) {
		if(err) {
			console.log("Something went wrong.  Quote not saved", err);
		}else{
			console.log("Quote saved!");
			res.redirect('/get_quotes');
		}
	})
});

// Get all quotes
app.get('/get_quotes', function(req, res) {
	// Get quotes from DB using Quote var
	Quote.find({}, function(err, quotes) {
		if (err) {
			console.log("Quotes could not be retrieved.");
		}else{
			console.log('Quotes retreived successfully.')
			res.render('quotes', {quotes: quotes});
		}
	});
});

// Set server to listen on port 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})