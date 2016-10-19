function personConstructor(name) {
	person = {
		name: name,
		distance_traveled: 0,
		say_name: function () {
			console.log(person.name);
			return person;
		}, // end say_name
		say_something: function(saying) {
			console.log(person.name + " " + saying);
		}, //end say_something
		walk: function() {
			console.log(person.name + " is walking.");
			person.distance_traveled += 3;
			console.log("Distance walked: " + person.distance_traveled);
			return person;
		}, // end walk
		run: function() {
			console.log(person.name + " is running.");
			person.distance_traveled += 10;
			var distance_ran = 10
			console.log("Distance traveled: " + person.distance_traveled);
			console.log("Distance ran: " + distance_ran);
			return person;
		}, // end run
		crawl: function() {
			console.log(person.name + " is crawling because he is weak and out of shape and now dying.");
			person.distance_traveled += 1;
			distance_crawled = 1;
			console.log("Distance traveled: " + person.distance_traveled);
			console.log("Distance crawled: " + distance_crawled);
			return person;
		} // end crawl
	}// end person object
	return person;
}// end personConstructor function
person = personConstructor("Patrick");
person.say_name().say_something("is here.");
person.walk().run().crawl();

function ninjaConstructor(name, cohort) { // Create function w/ 2 parameters
	info = { // create object to hold ninja constructor parameters
		name: name,
		cohort: cohort,
		belt_level: 'yellow-belt',
		level_up: function() {
			if (info.belt_level == "yellow-belt") {
				console.log(name + " has been promoted to Red-Belt!");
				info.belt_level = "Red-Belt";
			} else if(info.belt_level == "Red-Belt") {
				console.log(name + " You are now a Black-belt!")
				info.belt_level = "black-belt";
			} else {
				console.log("You have achieved as much as you can here.")
			}
			return info;
		}
	}
	return info;
}
ninja = ninjaConstructor("Patrick", "JS").level_up();
console.log(ninja.belt_level);
