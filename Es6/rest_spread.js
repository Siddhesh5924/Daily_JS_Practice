
// Rest And Spread operator using an array

// REST OPERATOR
function add(a,b,c,...other){
    console.log(other)
    return a*b*c;

}
const res = add(2,3,4,54,6,7,4,3);
console.log(res)


// Spread OPERATOR
var names = ["Siddhesh","Varad","Pranav"];

function getNames(name1,name2,name3){
console.log(name1,name2,name3)
}
getNames(names[0],names[1],names[2],names[3]);
getNames(...names);
getNames(names);


// Rest and Spread operator using an object

// Dealing with Objects using Rest
var student = {
    name: "Siddhesh",
    age: 23,
    hobbies: ["Signing","Dancing"],
}
// const age = student.age;
const {rest} = student
console.log(rest)  

// Using Spread OPR

var student2 = {
    ...student,
    age: "29"
} 
console.log(student2)


function addNum(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const res = addNum(2,3,4,9,8,7)
console.log(res)
