// load the express module
var express = require('express');

// invoke var express and store the resulting application in var app
var app = express();
app.set('views', __dirname + '/views'); // sets location where express looks for the ejs views
app.set('view engine', 'ejs'); // sets engine to ejs

//  index route, respond with "Hello Express"
app.get('/', function(request, response) {
	// console.log(request);
	response.send("<h1>Hello Express</h1>");
	// console.log(response);
})
app.get('/users', function(request,response) {
	var users_array = [
		{name: "Michael", email:  "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
		{name: "Brendan", email: "brendan@codingdojo.com"},
		{name: "Andrew", email: "andrew@codingdojo.com"},
	];
	response.render('users', {users: users_array});
})

//  This tells our server to use the /static folder for static content
app.use(express.static(__dirname + "/static"));

// Listen on port 8000, log as such
app.listen(8000, function() {
	console.log("Listening on port 8000");
})