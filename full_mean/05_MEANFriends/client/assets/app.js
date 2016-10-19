//  createa angular module 'app' w/ 'ngRoute' and put it into the var app
var app = angular.module('app', ['ngRoute']);

// Set up the routes w/ $routeProvider and set each controller to each view
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'NewController'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'EditController'
		})
		.when('/show/:id', {
			templateUrl: 'partials/show.html',
			controller: 'ShowController'
		})
		.otherwise({
			redirectTo: '/'
	})
});