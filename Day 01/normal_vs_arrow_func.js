// Arrow function — also called fat arrow function—
//  is a new feature introduced in ES6 that is
//  a more concise syntax for writing function expressions


// For EX-
//ES5
var add = function(x, y) {
    return x + y;
  };
  
// ES6
  let add = (x, y) => { return x + y };

// More Examples

const add = (a, b) => { return a + b};

const res = add(1, 2); // 3

// If the syntax is simple, `{}` and `return` can be omitted. It will look neater
const minus = (a, b) => a - b;
const res1 = minus(3, 1); // 2