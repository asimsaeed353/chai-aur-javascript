// JavaScript array-copy-operation creates a shallow copy.

// Shallow Copy : A shallow copy of an object is copy whose properties share the same reference point (call by reference). Any change made to copy will affect the original object.

// Deep Copy : A deep copy of an object is copy whose properties do not share the same reference point (call by value). Any change made to copy will not affect the original object.

let myArr = new Array(0, 1, 2, 3, 4, 5);
console.log(myArr);

// Adding and removing element at the end of the array

myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);

// remvoing element at the rear end
myArr.pop();
console.log(myArr);

// Adding and removing element at the start of the array

myArr.unshift(9); // this gonna shift all elements to the right and place 9 at 0 index. unshift() is time consuming process especially if array size is large
console.log(myArr);

myArr.shift(); // removes the element at the start (0 index) of the array
console.log(myArr);

const stringArray = myArr.join(); // converts the values of array into a comma separted string
console.log(stringArray);
console.log(typeof stringArray);

// Difference between slice() and splice()

// slice doesn't change the original array while splice changes the original array

// Syntax: slice(starting_index(inclusive), ending_index(exclusive))
//         .splice(starting_index(inclusive), count of elements to delete)

console.log("A", myArr);
console.log("slice", myArr.slice(0, 3));
console.log("A", myArr);

console.log("B", myArr);
console.log("splice", myArr.splice(0, 3));
console.log("A", myArr);

// Testing Shallow Copy Concept

let newArr = new Array(1, 3, 5, 7, 9, 10, 12);
let anotherArr = newArr;

console.log("newArr", newArr);
console.log("anotherArr", anotherArr);

anotherArr.splice(5, 2);

console.log("newArr spliced", newArr);  // Output: two elements after 4th index are deleted
console.log("anotherArr spliced", anotherArr); // Output: two elements after 4th index are deleted
