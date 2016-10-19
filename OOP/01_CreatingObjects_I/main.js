/*

We are going to create our very own constructor. Create a VehicleConstructor that takes in
the name, number of wheels, and number of passengers. Then complete the following tasks:

-  Each vehicle should have a makeNoise method
-  Using the constructor, create a Bike
-  Redefine the Bike’s makeNoise method to print “ring ring!”
-  Create a Sedan
-  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
-  Using the constructor, create a Bus
-  Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

 */

 function VehicleConstructor(name, number_of_wheels, number_of_passengers) {
 	var vehicle = {}; // the object

 	// Add properties to vehicle object
 	vehicle.name = name;
 	vehicle.number_of_wheels = number_of_wheels;
 	vehicle.number_of_passengers = number_of_passengers;

 	// Add makeNoise Method to constructor
 	vehicle.makeNoise = function() {
 	}

 	return vehicle;  //Return vehicle object
} // end of VehicleConstructor

// Create Bike
var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function() {
	console.log("Ring ring!");
}
console.log(bike.name, bike.number_of_wheels, bike.number_of_passengers);
bike.makeNoise();

//Create Sedan
var sedan = VehicleConstructor("Sedan", 4, 6);
sedan.makeNoise = function() {
	console.log("Honk Honk!");
}
console.log(sedan.name, sedan.number_of_wheels, sedan.number_of_passengers);
sedan.makeNoise();

// Create Bus
var bus = VehicleConstructor("Bus", 10, 26);
// Create method that add passengers to number_of_passengers when a passenger is picked up
// Bus cannot hold more than 30 passengers
bus.pickup_passenger = function() {
	if(bus.number_of_passengers < 30) { // check to see if passenger count is 30 or less
		bus.number_of_passengers += 1; // if so, add 1 to the count
		console.log(bus.number_of_passengers);
	} else {
		console.log("Bus is full."); // Otherwise, print out a message that the bus is full
	}
	return bus; // return the object
}

console.log(bus.name, bus.number_of_wheels, bus.number_of_passengers);
bus.pickup_passenger().pickup_passenger().pickup_passenger().pickup_passenger().pickup_passenger().pickup_passenger().pickup_passenger();
// console.log(bus.number_of_passengers);



