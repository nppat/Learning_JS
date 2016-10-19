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
	var distance_travelled = 0;
	var updateDistanceTravelled = function() {
		distance_travelled += self.speed;
	}

	// PUBLIC
    // Add properties to vehicle object
 	this.name = name;
 	this.number_of_wheels = number_of_wheels;
 	this.number_of_passengers = number_of_passengers;
 	this.speed = speed;


	// Add makeNoise Method to constructor
 	this.makeNoise = function() {
 		console.log("Basic vehicle sounds.")
 	}

 	// Add move method
 	this.move = function() {
 		updateDistanceTravelled();
 		this.makeNoise();
 	}

 	this.checkMiles = function() {
 		console.log(distance_travelled);
 	}
 	
} // end of VehicleConstructo

//  Create Bike
var bike = new VehicleConstructor("Bike", 2, 1, 15);
console.log("Name: " + bike.name + ", Num of wheels: " + bike.number_of_wheels + ", Num of passengers: " + bike.number_of_passengers + ", Speed: " + bike.speed + "mph.");

bike.checkMiles();
bike.move();
bike.checkMiles();
bike.move();
bike.move();
bike.checkMiles();

// Create Sedan
// Check to see if missing new would be caught be if statement, and it was, so the catch works
var sedan = VehicleConstructor("Sedan", 4, 6, 100);
console.log("Name: " + sedan.name + ", Num of wheels: " + sedan.number_of_wheels + ", Num of passengers: " + sedan.number_of_passengers + ", Speed: " + sedan.speed + "mph.");

sedan.checkMiles();
sedan.move(), sedan.move(), sedan.move();
sedan.checkMiles();
