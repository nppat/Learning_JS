console.log('Routes');

// Link var friends to the server-side controllers friends
var friends = require('./../controllers/friends')

// Create listeners for the routes defined
module.exports = function(app) {
	app.get('/', friends.index); // index
	app.get('/friends/:id', friends.show) // show Friend by id
	app.get('/friends', friends.create)  // create new friend
	app.get('/friends/:id', friends.update)  // update Friend by id
	app.get('/friends/:id', friends.delete)  // destroy Friend record
}