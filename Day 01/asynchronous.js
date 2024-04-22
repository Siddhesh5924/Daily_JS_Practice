// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()

function x() {
    var a = 10;
    setTimeout(function () {
        console.log(a);
    },1000);
    console.log("Heyy Sydney");
}
x();

// Here, value of a is printed after 1000 mili-seconds
// and "Heyy Sydney" as soon as executed 

// We use Asynchronous in js when,
// - Fetch data from server
// - Want to execute something with delay


// Majority Asynchronous operations can be triggered by,
// -Browser APIs/ Web APIs
// -setTimeout
// Promises 
