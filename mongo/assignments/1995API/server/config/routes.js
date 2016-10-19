var name = require('./../controllers/names');
module.exports = function (app) {
	// root route
	app.get('/', name.find_all );
	// create a new name
	app.get('/new/:name/', name.create_new)
	// remove a name from the db
	app.get('/remove/:name/', name.destroy)
	// find individual
	app.get('/:name', name.show_individual);

}