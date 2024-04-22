// In javascript, functions are written in a way described below,

// function name(arguments)
// {
//    javascript statements
// }

// For example, printing a statement....

function greet() {
    console.log("Heyy Sydney...!");
}
greet()

// A function can contain one or more arguments that are sent
//  by the calling code and can be utilized within the function. 

function welcome(name) {
    console.log("Hey"+" "+name+" "+"Welcome to Sydney.")
}
welcome("Sidd")

// Return value:

function welcome() {
    return "Heyy Sidd, you have a notification.";
}
console.log(welcome());


// Function Statement:
function a() {
    console.log("a called");
}
a();

// Function Expression:
// We may assign a function to a variable and then utilize 
// that variable as a function in JavaScript. It is known as a function expression.
var b = function (){
    console.log("b called")
}
b();
// The major difference betw these two is Hoisting....


// var x = 1;
// a();
// b();
// console.log(x)
// function a(){
//     var x = 10;
//     console.log(a);
// }
// function b() {
//     var x = 100; 
//     console.log(b);
// }

