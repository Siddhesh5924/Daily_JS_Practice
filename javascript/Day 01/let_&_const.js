// Hoisting var variables:

console.log(a); // outputs 'undefined'
var a = 3;

// why undefined?
// When JavaScript engine finds a var variable declaration during the compile phase,
// it will add that variable to the lexical environment and initialize it with undefined.

// Hoisting let and const variables:

console.log(a); //outputs "Reference Error : a is not defined."
let a = 3;

// -------------
// EX No.2

let a;
console.log(a); // outputs undefined
a = 5;

// All declarations (function, var, let, const and class) are hoisted in JavaScript,
//  while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.
