console.log("Friends Factory");

app.factory('friendsFactory', ['$http', function($http) {
	//  Factory Constructor
	var friends = []; // array
	var friend = {}; // object

	function FriendsFactory() {
		var _this = this;
		this.create = function(newFriend, callback){
			$http.post('/friends', newFriend).then(function(returned_data){
				console.log(returned_data.data);
				if(typeof(callback) == 'function') {
					callback(returned_data);
				}
			});
		};
		this.update = function(updatedFriend) {
			$http.put('/friends' + updatedFriend.id, updatedFriend).then()
		};
		this.index = function(callback) {
			// call if you want to update or set friends var
			$http.get('/friends').then(function(returned_data) {
				console.log(returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
		};
		this.delete = function(id, callback) {
			$http.delete('/friends' + id).then(function(returned_data) {
        		friends = returned_data.data;
        		callback(friends);
      		})
		};
		this.show = function() {

		};
		this.getFriends = function(callback) {
			callback(friends);
		};
		this.getFriend = function(callback) {
			callback(friend);
		};
	}
	console.log(new FriendsFactory());
	return new FriendsFactory();
}]);