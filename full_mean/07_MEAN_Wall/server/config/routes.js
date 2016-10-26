console.log('Users Routes');

var mongoose = require('mongoose');

/*
There are 3 controllers we will access, users, posts, and comments
*/
var users = require('./../controllers/users');
var posts = require('./../controllers/posts');
var comments = require('./../controllers/comments');

module.exports = function(app){
	//Users must be able to login and to register
  app.post('/user/login', users.login);
  app.post('/user/register', users.register);
  // Access to all posts and create a new post
  app.get('/posts', posts.index); // get all posts
  app.post('/posts', posts.create_post);  // create post from post form
  // Create a new comment from the comment form
  app.post('/comments/:id', comments.create_comment);
}