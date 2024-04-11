// In var:

var a = 100;
{
    var a = 10;
    console.log(a);
}
console.log(a);

// In Shadowing,
// by the reference of above example,  var a = 10 is shadowing var a = 100,
// this occurs because the code is executed line by line and hence eventually ends up giving
// 'a' = 10 value



 