// Arrow functions

// Less verbose && this is picked up from surrounding (lexical)


var arr = [1, 2, 3];

// Old way
var squares = arr.map(function(x) {
  return x * x;
});
squares;

// New way
var squares = arr.map(x => x * x);
squares;


