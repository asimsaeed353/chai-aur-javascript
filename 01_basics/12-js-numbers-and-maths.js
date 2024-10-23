/* JavaScript Numbers */

const number = 400;

// antoher method

const score = new Number(100);

console.log(score.toFixed(5)); // .toFixed(number) => return the numbers of zeros after decimal point

console.log(score.toExponential(3)); //The toExponential() method converts a number into an exponential notation.

let bigNumber = 1000000;

console.log(
  bigNumber.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // The toLocaleString() returns a number as a string, using local language format. It converts the number into readable string
console.log(
  bigNumber.toLocaleString("en-IN", { style: "currency", currency: "INR" })
);
console.log(bigNumber.toLocaleString("ar-SA"));
console.log(bigNumber.toLocaleString("zh-HK"));
console.log(
  bigNumber.toLocaleString("en-GB", { style: "currency", currency: "EUR" })
);

let precise = 123.345;
console.log(precise.toPrecision(4)); // give the number of precise digits in the value
// The toPrecision() method formats a number to a specified length.

console.log(precise.toString()); // The toString() returns a number as a string.


// +++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++')

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

//  To get a random number in a specific range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)