/* +++++++++++++++++++++++++ Mini Hoisting +++++++++++++++++++++++++ */

// Can we call a function before it's declaration? Let's test

// Methods of function declaration
// 1) function funcOne(){}
// 2) const func2 = function(){}

// functions declared using 1st method can be called before declaration while function declared using 2nd method can't be called before the declaration

addOne(2); // calling this function before declaration will not cause any error
function addOne(num) {
  return num + 1;
}

addTwo(5); // this gonna throw an error because of function declared as expression
const addTwo = function (num) {
  return num + 2;
};
