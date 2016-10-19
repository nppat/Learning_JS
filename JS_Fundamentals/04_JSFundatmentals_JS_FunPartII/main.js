// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumXy(x,y) {
	var sum = 0;
	for(var i = x; i < y + 1; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumXy(2,2));

// Write a loop that will go through an array, find the minimum value, and then return it
var arr = [1,2,3,4,-1];
function findMin(arr) {
	var min = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
console.log(findMin(arr));  // Returns -1


// Write a loop that will go through an array, find the average of all of the values, and then return it
function findAverage(a) {
	var sum = 0;
	for (var i = 0 ; i < a.length; i++) {
		sum += i;
	}
	var avg = sum / a.length;
	return avg;
}
console.log(findAverage(arr));


// Rewrite these 3 as anonymous functions assigned to variables.
var sumXy = function (x,y) {
	var sum = 0;
	for(var i = x; i < y + 1; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumXy(2,2));

var findMin = function (arr) {
	var min = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}
console.log(findMin(arr));  // Returns -1

var findAverage = function (a) {
	var sum = 0;
	for (var i = 0 ; i < a.length; i++) {
		sum += i;
	}
	var avg = sum / a.length;
	return avg;
}
console.log(findAverage(arr));

// Rewrite these as methods of an object

var anObject = {
	sumXy: function (x,y) {
		var sum = 0;
		for(var i = x; i < y + 1; i++) {
			sum += i;
		}
		return sum;
	},
	findAverage: function (a) {
		var sum = 0;
		for (var i = 0 ; i < a.length; i++) {
			sum += i;
		}
		var avg = sum / a.length;
		return avg;
	},
	findMin: function (arr) {
		var min = arr[0];
		for(var i = 1; i < arr.length; i++) {
			if(arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}

}

// Create a JavaScript object called person with the following properties/methods
var person = {
	name: "Patrick",
	distance_traveled: 0,
	say_name: function () {
		alert(person.name);
		console.log(person.name);
		return person;
	}, // end say_name
	say_something: function(saying) {
		console.log(person.name + " says " + saying);
	}, //end say_something
	walk: function() {
		console.log(person.name + " is walking.");
		person.distance_traveled += 3;
		console.log("Distance walked: " + person.distance_traveled);
	}, // end walk
	run: function() {
		console.log(person.name + " is running.");
		person.distance_traveled += 10;
		var distance_ran = 10
		console.log("Distance traveled: " + person.distance_traveled);
		console.log("Distance ran: " + distance_ran);
	}, // end run
	crawl: function() {
		console.log(person.name + " is crawling because he is weak and out of shape and now dying.");
		person.distance_traveled += 1;
		distance_crawled = 1;
		console.log("Distance traveled: " + person.distance_traveled);
		console.log("Distance crawled: " + distance_crawled);
	} // end crawl
}
person.say_name();  //Alerts and prints to console
person.say_something("go away!");  // Passes parameter to method in object
person.walk(); // Displays walking distance
person.run(); // Displays running distance
person.crawl(); // Dispayed distance crawled






















