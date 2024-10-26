/* NUll Coalescing Operator (??) null undefined */

// Sometimes while getting a response from database, we expect to recieve two types of values, null or undefined. We dont want null value to disturb our program so we can choose what value should be assigned to specific variable based on what kind of response we get from database
// what this operator does is check the null value of the response, if we received null value, it double checks it by assigning 'null' to it and if we got undefined value, this operator assigns the value on the right of the '?? '

let val1;
val1 = 5 ?? 10;
console.log(val1); // Output : 5

let val2;
val2 = null ?? 10;
console.log(val2); // Output : 10

let val3;
val3 = undefined ?? 15;
console.log(val3); // Output : 15

let val4;
val4 = undefined ?? 20 ?? 25;
console.log(val4); // Output : 20

// This is our fall back method
