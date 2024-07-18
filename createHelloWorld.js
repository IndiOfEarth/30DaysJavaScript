// returning a function inside of a function
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