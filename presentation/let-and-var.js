// Variables and scoping

// New!!!!
// let and const
// block scoped



// var is function scoped
function scopingVar (boolValue) {
  if (boolValue) {
     var varValue = "Is true";
  }
  return varValue; //returns undefined
};
scopingVar(false);




// let is block scoped
function scopingLet (boolValue) {
  if (boolValue) {
     let letValue = "Is true";
  }
  return letValue; //ReferenceError
};
scopingLet(false);



// Temporal Dead Zone

function tdzVar () {
  console.log(varVariable); //undefined

  var varVariable = "Test";

  console.log(varVariable); //Test
};

function tdzLet () {
  console.log(letVariable); //ReferenceError

  let letVariable = "Test";

  console.log(letVariable);
};




// const

// const foo; //SyntaxError

const foo = "bar";
foo = "feil";


