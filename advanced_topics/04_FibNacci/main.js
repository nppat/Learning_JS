/*

Assignment: Fib + Nacci
The fibonacci sequence is a sequence where each number is the sum of its two predecessors.
The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because
it helps the sequence get started but it is not actually part of the sequence.

Using Closures make the Fib function with the following specifications:

*/


function fib() {
  // Some variables here
  var oldNum = 0;  // initialize w/ 0
  var newNum = 1; // initialize w/ 1
  var temp; // used for swapping var

  function nacci() {
    // do something to those variables here
    console.log(newNum);  // send out newNum to the console to be logged when fibCounter() is called
    // Console.log must be first to get the order correct
    temp = oldNum;  // bring in oldNum
    oldNum = newNum; // set oldNum to newNum
    newNum += temp; // add temp to newNum
  }
  return nacci  // return inner function nacci when fib is called
}
var fibCounter = fib();  // call function fib in var fibCounter

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"