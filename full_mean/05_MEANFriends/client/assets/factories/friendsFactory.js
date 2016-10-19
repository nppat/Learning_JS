console.log('Friends Factory');

// friendsFactory
app.factory("friendsFactory", ['$http', function($http) {
  var friends = [];
  var friend = {};

  function FriendsFactory() {
    var _this = this;

    this.index = function(callback) {
      $http.get('/friends').then(
        function successCallback(response) {
          friends = response.data;
          callback(friends);
        },
        function errorCallback(response) {
          console.log(response.data);
        }
      );
    }

    this.create = function(newFriend) {
      $http.post('/friends', newFriend).then(
        function successCallback(response) {
          console.log("Success, new friend created.");
          friends = response.data;
        },
        function errorCallback(response) {
          console.log("Error, friend not created");
        }
      );
    }

    this.delete = function(id, callback) {
      $http.delete('/friends/' + id).then(
        function successCallback(response) {
          friends = response.data;
          callback(friends);
        },
        function errorCallback(response) {
          // when there is an error.
        }
      );
    }

    this.show = function(id, callback) {
      $http.get('/friends/' + id).then(
        function successCallback(response) {
          friend = response.data;
          callback(friend);
        },
        function errorCallback(response) {
          console.log('Error, friend not shown');
        }
      );
    }

    this.update = function(id, updateFriend) {
      $http.put('/friends/' + id, updateFriend).then(
      );
    }
    this.getFriend = function(callback) {
      callback(friend);
    }

  }

  return new FriendsFactory();
}]);