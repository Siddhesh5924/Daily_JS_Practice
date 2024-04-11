
// What is Lexical Environment?
// -Lexical environment is a local memory along with the lexical environment of its parent.
// -Lexical means in a sequence.
// -When an Execution context is created, a lexical environmemt is created.

function a () {
    c();
    function c(){
        console.log(b);
    }
    
}
var b = 10;
a();
// Here C() is physicaaly present inside a(),
// that means, c() is lexically inside a(),
// and a() is lexically inside global scope.

// SCOPE CHAIN is the local memory and the lexical environment of a parent and its parent..
// This chain is known as a scope chain

