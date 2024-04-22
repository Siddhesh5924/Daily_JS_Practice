let name = {
    firstname: "Siddhesh",
    lastname: "Kaple",
}
let printFullname = function(home){
    console.log(this.firstname+", "+ this.lastname,", " ,home );
}
printFullname.call(name,Amravati);


let name2 = {
    firstname: "Siddhesh",
    lastname: "Kaple",
}

// Using call() here,
printFullname.call(name2);

// Using apply() here,
printFullname.apply(name2);

// Using bind() here,
let printMyName = printFullname.bind(name2,firstname)