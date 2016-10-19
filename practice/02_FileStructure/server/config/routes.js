var path = require('path');

// exports to app the route to index.html from root
module.exports = function(app) {
	app.get('/', function(req,res) {
		res.sendFile(path.join(__dirname, '../client/index.html'));
	})
}