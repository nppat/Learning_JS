var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
          .when('/user', {
            templateUrl: 'partials/user.html',
            controller: 'UserController'
          })
          .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginRegController'
          })
          .when('/register',{
            templateUrl: 'partials/register.html',
            controller: 'LoginRegController'
          })
          .otherwise({
            templateUrl: 'partials/home.html'
          });
}]);