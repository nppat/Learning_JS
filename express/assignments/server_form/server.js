// require express
var express = require('express');
//require path
var path = require('path');

// create express app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));

// Static Content
app.use(express.static(path.join(__dirname, './static')));

// Set up EJS and Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
	// Root
app.get('/', function(req, res) {
	res.render('index');
})

var data;
//  Pull data from form 
app.post('/user', function(req, res) {
	data = req.body;  //  parse the form
	console.log(data);	// view data in console
	res.redirect('/result');  // redirect to result
})

//  Take data from form and send to result.ejs
app.get('/result', function(req, res) {
	res.render('result', {data:data}); // render result.ejs w/ form data in {data:data}
})

// Back button route
app.get('/back', function(req, res) {
	res.redirect('/');
})
//  Listen on 8000
app.listen(8000, function() {
	console.log("Listening on port 8000.");
})