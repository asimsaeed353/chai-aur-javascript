/* Global Scope */

// Why you should not use 'var' to declare variables

// 1) When you declare a variable with var, it has 'function scope'. This means the variable is accessible throughout the entire function where it’s declared, even inside blocks like if statements or loops
// var violates the block-level scope. No matter if you declare the var in any local scope, it's scope will be global.

var c = 300;
// suppose some programmer has declared the value of 'c' globally and some other programmer is using the same variable name with 'var' keyword in some local function. This will cause imperfect values and imperfect results since var is doesn't follow block-level scoping.

{
  /* Local Scope */
  let a = 10;
  const b = 20;
  var c = 30; // value of 'c' declared globally will be updated to 30
}

// console.log(a) // Output 'error'
// console.log(b) // Output 'error'
console.log(c); // Output 30, that's why you should avoid using 'var'

// 'var' leaking out of block level scoper

function dinosaurScope() {
  if (true) {
    var dino = "T-rex";
  }
  console.log(dino); // Output: "T-rex"
  // Example of var violating block-level scoper
}

dinosaurScope();

// Interview tip : Scope in console of node is different from scope in console of web browser
