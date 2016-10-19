/*
Make the following modifications:

- Have the Vehicle constructor also take in a “speed”
- Store the speed as an attribute
- Create a private variable called distance_travelled that starts at 0
- Create a private method called updateDistanceTravelled that increments distance travelled by speed
- Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
- Add a method called checkMiles that console.logs the distance_travelled
*/



function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed) {
	// If new wasnt used, this will catch it and return a new object
	if (!(this instanceof VehicleConstructor)) {
	   	// the constructor was called without "new".
	  	return new VehicleConstructor(name, number_of_wheels, number_of_passengers, speed);
 	}

	// PRIVATE
	var self = this;

	// PUBLIC
 	this.name = name;
 	this.number_of_wheels = number_of_wheels;
 	this.number_of_passengers = number_of_passengers;
 	this.speed = speed;
 	// added random VIN generator for each vehicle, VIN's are typically 17 characters w/o I(i), O(o),& Q(q).
 	this.vin = Math.floor(Math.random() * 100000000000000000); 
 	// Moved these from private to public so that they can work with prototype
 	var distance_travelled = 0;
	var updateDistanceTravelled = function() {
		distance_travelled += self.speed;
		return this;
	}


	// Add makeNoise Method to constructor
 	VehicleConstructor.prototype.makeNoise = function() {
 		console.log("Basic vehicle sounds.")
 	}

 	// Add move method
 	VehicleConstructor.prototype.move = function() {
 		updateDistanceTravelled();
 		this.makeNoise();
 		this.checkMiles();
 		return this;
 	}

 	VehicleConstructor.prototype.checkMiles = function() {
 		console.log(distance_travelled);
 	}
 	
} // end of VehicleConstructo

//  Create Bike
var bike = new VehicleConstructor("Bike", 2, 1, 15);
console.log("Name: " + bike.name + ", Num of wheels: " + bike.number_of_wheels + ", Num of passengers: " + bike.number_of_passengers + ", Speed: " + bike.speed + "mph.");

bike.checkMiles(); // Reads 0 miles
console.log(bike.vin); // Generates a random VIN numbers
bike.move().move().move(); // Adds 15 miles to distance_travelled per call
bike.checkMiles(); // Reads 45 miles for 3 .move() calls

// Create Sedan
// Check to see if missing new would be caught be if statement, and it was, so the catch works
var sedan = VehicleConstructor("Sedan", 4, 6, 100);
console.log("Name: " + sedan.name + ", Num of wheels: " + sedan.number_of_wheels + ", Num of passengers: " + sedan.number_of_passengers + ", Speed: " + sedan.speed + "mph.");

sedan.checkMiles();
console.log(sedan.vin);
sedan.move().move().move();
sedan.checkMiles();
