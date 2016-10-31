console.log('Routes');

var mongoose = require('mongoose');

/*
There are 3 controllers we will access, users, posts, and comments
*/
var users = require('./../controllers/users');
var topics = require('./../controllers/topics');
var posts = require('./../controllers/posts');

module.exports = function(app){
	//Users must be able to login and to register
  app.post('/user/login', users.login);
  app.post('/user/register', users.register);

  // Access to all posts and create a new post
  app.get('/topic', topics.index); // get all topics
  app.post('/topic', topics.create_topics);  // create topic

  // For each Topic
  app.get('/topic/:id', topics.single_topic); // get a single topic
  app.post('/post/:topic_id', posts.create_post); // create a new post
  app.get('/post/:topic_id', posts.index_post);  //  get all posts w/ comments for each topic
  app.put('/post/like/:post_id', posts.like_post);  // update a like button push
  app.put('/post/dislike/:post_id', posts.dislike_post); // update a dislike button push
  app.post('/comment/:post_id', posts.create_comment);  // create a new comment

  // User Profile
  app.get('/user/:username', users.profileData);  // Get User profile data for profile page
}