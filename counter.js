// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// An example of closures in JavaScript - the combination of functions and their environments
// Closures allow for true encapsulation (restricting access to components, like in classes with access modifiers)

// Example of Closure
function createAdder(a) {
    return function add(b) {
      const sum = a + b;
      return sum;
    }
  }
const addTo2 = createAdder(2);
addTo2(5); // 7


var createCounter = function(n) {
    return function() {
        return n++; // post increment operator - returns the value then increments it
    };
};