var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/index.html'
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newController'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'editController'
		})
		.otherwise({
			redirectTo: '/'
	})
});