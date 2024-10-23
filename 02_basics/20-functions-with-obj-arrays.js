/* +++++++++++++++++++++++++ Rest Operator +++++++++++++++++++++++++ */

// use case : sometimes, we do not know how many values will be given to a function. For example, in ecommerce website, we can't anticipate how many products will be added to the cart. In such cases, we use rest operator (...num). The rest and spread operator are both same, the difference is made by the use case.

// Implementations
function calculateCartPrice(...num) {
  return num;
  // this function can take as many value as customer will want and return an array of these values
}

console.log(calculateCartPrice(200, 400, 600)); // Output [200, 400, 600]

// what if we define parameteres along with rest opertor
function calculateCartPriceCustom(num, num1, ...num2) {
  return [num, num1, num2];
  // first two arguments will be stored in 'num' and 'num1' while the rest of the arguments will be stored in an array in 'num2', the output will only array i.e. num2
}

console.log(calculateCartPriceCustom(50, 100, 200, 400, 600)); // Output [50, 100, [ 200, 400, 600]]

// The array stored in rest operator is later used and manipulated e.g. using loops

/* +++++++++++++++++++++++++ Handling Objects in Function +++++++++++++++++++++++++ */

const user = {
    username: "Asim",
    price : 199
}

function handleObj(anyObject) {
    console.log(`The name is ${anyObject.username} and price is ${anyObject.price}`)
    // take good care of type checking and case sensitivity of object properties
}

handleObj(user);
// you can pass direct objects in function as
handleObj({
    username: "hitesh",
    price : 299
})
