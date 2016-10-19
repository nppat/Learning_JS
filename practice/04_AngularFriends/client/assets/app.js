// Set up app to be an angular module, inject routes
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	// Declare routes and controllers
	$routeProvider
		.when('/new', {
			templateUrl: 'partials/new.html'
		})
		.when('/edit:id', {
			templateUrl: 'partials/edit.html'
		})
});