// Go through each value in array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.
	var x = [3, 5, 'Dojo', 'rocks', 'Micahel', 'Sensei']

	function each_value(arr) {
		for (var i = 0; i < x.length; i++) {
			console.log(x[i]);
		}
	}
	each_value(x);

	//Add a new value (100) in the array x using a push method.
	x.push(100);
	console.log(x);

	// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
	x.push(['hello', 'world', 'JavaScript is fun']);
	each_value(x);

	// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
	function add_num(){
		sum = 0;
		for(var i = 1; i <= 500; i++) {
			sum += i;
		}
		return sum;
	}
	console.log(add_num());

	// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
	var arr = [1, 5, 90, 25, -3, 0];

	function find_minimum(arr) {
		var min = arr[0];
		for (var i = 0; i < arr.length; i++){
			if(arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}
	console.log(find_minimum(arr));

	// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
	function average(arr) {
		var sum = 0;
		for (var i=0; i < arr.length; i++) {
			sum += arr[i];
		}
		var avg = sum / arr.length;
		return avg;
	}
	console.log(average(arr))

// Write a for in loop that will navigate through the object below:
	var new_ninja = {
		name: 'Jessica',
		profession: 'coder',
		favorite_language: 'JavaScript',
		dojo: 'Dallas'
	}
	function print_object(ninja) {
		for (var key in ninja) {
			if (ninja.hasOwnProperty(key)){ // If it has a key/value pair
				console.log(key);
				console.log(ninja[key]);
				console.log(key + ": " + ninja[key]); // grab each key/value pair and print out with a ";" seperator
			}
		}
	}
	print_object(new_ninja);