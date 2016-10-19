var app = angular.module('app', ['ngRoute']);

// playerFactory
app.factory('PlayerFactory', function() {
	var factory = {};
	var players = [];

	factory.showPlayers = function(callback){
		callback(players);
	}

	factory.addPlayer = function(player){
		player.team = '';
		players.push(player);
	}

	factory.deletePlayer = function($index){
		players.splice($index, 1);
	}

	factory.addPlayerToTeam = function(data){
		players[data.playerIdx].team = data.team;
	}

	factory.removePlayerFromTeam = function($index){
		players[$index].team = '';
	}
	return factory;
});

// teamFactory
app.factory('TeamFactory', function() {
	var factory = {};
	var teams = [];

	factory.showTeams = function(callback) {
		callback(teams);
	}

	factory.addTeam = function(team) {
		teams.push(team);
	}

	factory.deleteTeam = function($index) {
		teams.spice(teams.indexOf($index), 1);
	}

	return factory;
});

// PlayersController
app.controller("PlayersController", function($scope, PlayerFactory){
   $scope.players = [];

   PlayerFactory.showPlayers(function(players){
      $scope.players = players;
   })

   $scope.addPlayer = function(){
      PlayerFactory.addPlayer($scope.newPlayer)
      $scope.newPlayer = {}; //Reset form
   }

   $scope.deletePlayer = function($index){
      PlayerFactory.deletePlayer($index);
   }
});

// TeamsController
app.controller("TeamsController", function($scope, TeamFactory){
   $scope.teams = [];

   TeamFactory.showTeams(function(teams){
      $scope.teams = teams;
   })

   $scope.addTeam = function(){
      TeamFactory.addTeam($scope.newTeam)
      $scope.newTeam = {}; //Reset form
   }

   $scope.removeTeam = function($index){
      TeamFactory.removeTeam($index);
   }
});

// AssociationsController
app.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
   $scope.players = [];
   $scope.teams = [];

   // Get player list
   PlayerFactory.showPlayers(function(players){
      $scope.players = players;
   })

   // Get team list
   TeamFactory.showTeams(function(teams){
      $scope.teams = teams;
   })

   $scope.addPlayerToTeam = function(){
      PlayerFactory.addPlayerToTeam($scope.newAssoc);
   }

   $scope.removePlayerFromTeam = function($index){
      PlayerFactory.removePlayerFromTeam($index);
   }
});

// Routes
app.config(function($routeProvider) {
	$routeProvider
		.when('/players', {
			templateUrl: "static/partials/players.html",
			controller: "PlayersController"
		})
		.when('/teams', {
			templateUrl: "static/partials/teams.html",
			controller: "TeamsController"
		})
		.when('/associations', {
			templateUrl: "static/partials/associations.html",
			controller: "AssociationsController"
		})
		.otherwise({
			redirectTo: '/players'
		});
});
