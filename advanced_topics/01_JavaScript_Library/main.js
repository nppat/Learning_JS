var _ = {
   /*
   map    _.map(list, iteratee, [context]) Alias: collect 
   Produces a new array of values by mapping each value in list through a transformation
   function (iteratee). The iteratee is passed three arguments: the value, then the index
   (or key) of the iteration, and finally a reference to the entire list.
   */
   map: function(array, callback) {
      // Create array to store values
      var results = [];
      // Loop through parameter array
   	for(var i = 0; i < array.length; i++) {
         // push result of callback from callback into results array
   		results.push(callback(array[i]));
   	}
      return results;  // return items in results array
   },  // end map

   /*
   reduce    _.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
   Also known as inject and foldl, reduce boils down a list of values into a single value.
   Memo is the initial state of the reduction, and each successive step of it should be returned
   by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key)
   of the iteration, and finally a reference to the entire list.

   If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the
   first element of the list. The first element is instead passed as the memo in the invocation
   of the iteratee on the next element in the list.
   */
   reduce: function(array, callback, startValue) {
      for (var i = 0; i < array.length; i++) {  // loop through parameter array
         if(!startValue) { // if startValue is not defined,
            startValue = array[0]; // Start at index 0 of parameter array
         } else {
            startValue = callback(startValue, array[i]); 
         }
      }
      return startValue;
   },  // end reduce

   /*
   Find    _.find(list, predicate, [context]) Alias: detect 
   Looks through each value in the list, returning the first one that passes a truth test (predicate),
   or undefined if no value passes the test. The function returns as soon as it finds an acceptable element,
   and doesn't traverse the entire list.
   */
   find: function(array, callback) {  // this returns the first value that passes the truth test, and nothing else
      var result = []; // for holding value
      for (var i =0; i < array.length; i++) {
         if (callback(array[i])) { // if callback is true
            result.push(array[i]); // push to results array
            break;  // stops after the first truth test is passed
         }
      }
      return result;
   },  // end find

   /*
   Filter    _.filter(list, predicate, [context]) Alias: select 
   Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
   */
   filter: function(array, callback) {
      var results = []; // To hold the values that are returned

      for (var i = 0; i < array.length; i++) {  // loop through parameter array
         if (callback(array[i])) { // if callback is true
            results.push(array[i]); // push to results array
         }
      }
      return results;
   },  // end filter

   /*
   reject   _.reject(list, predicate, [context]) 
   Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
   */
   reject: function(array, callback) {
      var results = [];  // hold results
      for(var i = 0; i < array.length; i++) {  // loop through parameter array
         if(!callback(array[i])) { // if callback does not meet truth of array[i]
            results.push(array[i]);  // send value to results array
         }
      }
      return results;
   } // end reject
 } // end _


// you just created a library with 5 methods!
//Map
var mapResults = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3 } );
console.log("_.map = " + mapResults); // if things are working right, this will return [ 3, 6, 9, 12, 15, 18 ].

// Filter
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("_.find = " + even);  // Returns [2]

// Reduce
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("_.reduce = " + sum);  // Return 6

// Find
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("_.filter = " + evens);  // Returns [ 2, 4, 6 ]

// reject
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("_.reject = " + odds); // Return[ 1, 3, 5 ]