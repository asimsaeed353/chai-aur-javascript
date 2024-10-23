/* equality check == */
// compares the values on the sides of the operator

/* strict check  === */
// compares the values and datatypes of the variables on the sides of the operator

console.log("2" == 2); // Output true
console.log("2" === 2); // Output false

console.log(null > 0); // Output false
console.log(null == 0); // Output false
console.log(null >= 0); // Output true

console.log(null > 0); // Output false
console.log(null == 0); // Output false
console.log(null >= 0); // Output true

/* 
    equality check '==' and comparison operators '>', '<', '>=', '<=' work differently.
    Comparisons convert null to a number, treating it as 0. 
    That's the reasons (null >= 0) is true and (null == 0) is false
*/
