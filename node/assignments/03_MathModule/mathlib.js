module.exports = function() {
	return {
		add: function(num1, num2) {  // add the two parameters together
			return( num1 + num2);
		},
		multiply: function(num1, num2) {  // multiply the two parameters
			return(num1 * num2);
		},
		square: function(num) {  // square the parameter
			return(num * num);
		},
		random: function(min, max) {  // return a random number in the range provided by the user
			min = Math.ceil(min);
			max = Math.floor(max);
			return(Math.floor((Math.random() * (max - min + 1)) + min));
		}
	}
}();