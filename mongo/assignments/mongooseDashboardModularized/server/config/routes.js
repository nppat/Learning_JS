var animals = require('./../controllers/animals.js');
module.exports = function(app) {
	// Root route 
	app.get('/', function(req, res) {
		animals.find_all(req,res);
	});

	// Create Animal
	app.post('/whale/new', function(req, res) {
		console.log("POST DATA", req.body);
		animals.create_new(req,res);
	});

	// Show individual animal
	app.get('/whale/:id', function(req,res) {
		animals.show_individual(req,res);
	});

	// Edit Animal
	app.get('/whale/:id/edit', function(req,res) {
		animals.edit(req,res);
	});

	app.post('/whale/:id', function(req,res) {
		animals.update(req,res);
	});


	// Destroy Animal
	app.post('/whale/:id/destroy', function(req, res) {
		animals.destroy(req,res)
	});
}