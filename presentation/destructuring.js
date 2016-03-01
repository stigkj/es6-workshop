// Destructuring

var obj = { first: 'Jane', last: 'Doe' };
var { last: surname } = obj;
surname;


var elements = ['a', 'b'];
for (let [index, element] of elements.entries()) {
   console.log(index, element);
}; // See console


var [x, y] = ['a', 'b'];
x;
y;

//Default values
//let [x=3, y] = [];
// x = 3, y = undefined

let [, year, month, day] =/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
year;
month;
day;

// Nested destructuring
var nested = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
let { a: [{foo: f}] } = nested;
f;
