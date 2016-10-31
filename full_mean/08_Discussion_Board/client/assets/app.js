var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
          .when('/user/:username', {
            templateUrl: 'partials/user_profile.html',
            controller: 'ProfileController'
          })
          .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginRegController'
          })
          .when('/register',{
            templateUrl: 'partials/register.html',
            controller: 'LoginRegController'
          })
          .when('/topic/:id',{
            templateUrl: 'partials/topic.html',
            controller: 'TopicController'
          })
          .when('/dashboard',{
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
          })
          .otherwise({
            templateUrl: 'partials/home.html'
          });
}]);