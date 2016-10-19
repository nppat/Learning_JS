var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
          .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
          })
          .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'UserController'
          })
          .when('/register',{
            templateUrl: 'partials/register.html',
            controller: 'UserController'
          })
          .otherwise({
            redirectTo: '/'
          });
}]);