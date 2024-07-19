// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {
    // Function Syntax
    return function () {
        return "Hello World";
    }

    // Arrow Syntax
    return () => "Hello World";

    // Arrow Syntax + rest arguments
    return (...args) => ""
};


// Each time the f() is called after the initialisation of f, 
// the function is returned.

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */