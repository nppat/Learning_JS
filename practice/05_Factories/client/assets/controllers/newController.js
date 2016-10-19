app.controller("newController", ['$scope','friendsFactory', function($scope, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  var getFriends = function(data) {
    $scope.friends = data;
  }
  
  $scope.friends = [];

  friendsFactory.index(getFriends);

  $scope.delete = function(id) {
    friendsFactory.delete(id, function(returnedData) {
      $scope.friends = returnedData;
    });
  }
  $scope.create = function() {
    console.log($scope.newFriend);
    friendsFactory.create($scope.newFriend, function(returnedData) {
      $scope.friends = returnedData;
    });
    $scope.newFriend = {};

  }

}]);