
//Default params

function defaults(x=5) {
  return x;
};
defaults();

//Undefined also triggers default value
defaults(undefined);


//Rest params

function rest(x, ...params) {
  return params;
};
rest('a', 'b', 'c');

// Spread operator

rest(...['a', 'b', 'c']);