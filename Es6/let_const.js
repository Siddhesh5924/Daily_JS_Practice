// Unlike var, let and const cannot be accessed out of a scope'

//let and const are block scoped

//They aren't hoisted

/*In let, we've can declare and assign on diff lines
but not in const. Here we've to declare and assign on the same line    
*/


    console.log(a) ;    //this won't work, results is not defined error 
    let a = 23;

let b;
b = 23;
console.log(b);      //This is working


export const name = "Siddhesh";
export const age = "24";

export{name,age};
