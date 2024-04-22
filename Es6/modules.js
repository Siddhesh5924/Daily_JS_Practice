/*  MODULES
Modules are imported from external files with the import statement.*/

// // Export
// Modules with functions or variables can be stored in any external file.

// There are two types of exports: Named Exports and Default Exports.

//------------ Named Exports-------------//
// FOR EXAMPLE

// export const name = "Siddhesh";
// export const age = "24";

// export{name,age};


// ----------- Default Exports-------------//
// FOR EXAMPLE

const message = () => {
    const name = "Siddhesh";
    const age = 24;
    return name + 'is' + age + 'years old';
};
export default message;


// Import

// Named exports are constructed using curly braces. Default exports are not.

// Import from named exports
import {name, age} from "./let_const.js";
let text = name + 'is' + age + 'years old';
console.log(text)


