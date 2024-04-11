//What is Hoisting:
// Hoisting is a phenomena in JS in which we can access variables and functions even 
// before initializing them or without putting any value to it.

console.log(x);
sid();
var x = 7   
function sid() {
    console.log("Heyy Welcome to Sydney");
}

// Hoisting var variables:

console.log(a); // outputs 'undefined'
var a = 3;

// Hoisting let and const variables:

console.log(a);
let a = 3;

// Output:
// ReferenceError: a is not defined

