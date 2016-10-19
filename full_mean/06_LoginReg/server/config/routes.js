console.log('Users Routes');

var mongoose = require('mongoose');
var users = require('./../controllers/users');

module.exports = function(app){
  app.get('/users/:id', users.show);
  app.post('/users/login', users.login);
  app.post('/users/register', users.register);
}
// this adds route listeners to friends for 3 of the 7 RESTful routes