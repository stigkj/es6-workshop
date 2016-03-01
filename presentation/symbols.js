
// New primitive type Symbol

typeof Symbol();


var symbolTest = Symbol();
var obj = {};
obj[symbolTest] = 123;

obj[symbolTest];

