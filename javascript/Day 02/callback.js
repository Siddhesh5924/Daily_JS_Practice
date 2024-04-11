
// // Callback Functions:
// // Taking a function and passing it into another function, 
// // while you do so, the function passed
// //  into another function is called a callback function.

setTimeout (function () {
    console.log("timer");
},1000);

function x(y){
console.log("x");
y();
}
x(function y() {
console.log("y");
});
// -----------------


// Ex No.2
function Sid(){
    console.log("Welcome to Sydney");
}
(function Aka(){
    console.log("Welcome to AKA");
}())
Sid();
//  setTimeout(Sid, 1000);



// for (let i = 0; i < 5; i++){
//     let s=''
//     for(let j = 0; j <= i; j++){
//         s+='*'
//     }
//     console.log(s )
//     '\n'
// }


