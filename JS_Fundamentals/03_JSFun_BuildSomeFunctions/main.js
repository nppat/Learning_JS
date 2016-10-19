// 1.  Basic: Make a function that can be used anywhere in your
//file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger() {
	console.log("I am running!")
}
runningLogger();

console.log('####################################');

/*
2. Basic: Make a function that is callable, has one parameter and multiplies the value of
the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
*/
function multiplyByTen(a) {
	var product = a * 10;
	return product
}
console.log(multiplyByTen(5));

console.log('####################################');

/*
3. Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
*/
function stringReturnOne(){
	return "String number 1";
}
function stringReturnTwo(){
	return "String number 2";
}
console.log(stringReturnOne(), stringReturnTwo());

console.log('####################################');

/*
4. Medium: Write a function named caller that has one parameter.
If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
*/
function caller(a) {
	if (typeof(a) == "function") {
		fun();
	}
}
caller();

/*
5. Medium: Write a function named myDoubleConsoleLog that has two parameters,
if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
*/
function myDoubleConsoleLog(a,b) {
	if(typeof(a) == "function" && typeof(b) == "function"){
		console.log(a);
		console.log(b);
	}
}
myDoubleConsoleLog(caller, stringReturnTwo);  // Returns the two functions

console.log('####################################');

/*
Hard: Write a function named caller2 that has one parameter.
It console.log's the string 'starting', waits 2 seconds, and then invokes the argument
if the argument is a function. (setTimeout may be useful for this one.) The function should
then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
*/
function caller2(a) { // function has one parameter
	console.log("Starting") // Starts off by printing 'Starting'
	var x = setTimeout(function() { // timer function using setTimeout
		if(typeof(a) == "function"){ // check to see if parameter is a function
			a(stringReturnOne, stringReturnTwo); // if so, return the two functions
		}
	}, 2000); // In miliseconds, wait for 2 seconds
	console.log("Ending"); // print ending
	return "Interesting" // return interesting
}

caller2(myDoubleConsoleLog);  // Call function

