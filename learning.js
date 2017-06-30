
var myNumber = "42",
 myName = "Dell",
 holding;

holding = myNumber;
myNumber = myName;
 myNumber = holding;

var a = 1,
    b = 2,
    c;
c = a;
a = b;
b = c;

console.log(myNumber, myName , a , b);
