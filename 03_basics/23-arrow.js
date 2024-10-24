/* What 'this' points to in global scope */

// in node, 'this' in global scope points to null object
// while in browser, 'this' points to window object which is global object in browser

console.log(this); // Output {}

function chai() {
    console.log(this);
}

chai()

function aurChai() {
    const username = 'hitesh';
    console.log(this.username); // Output : undefined
    // 'this' might won't work as expected in functions
}

aurChai();

// let's test 'this' in arrow function

const ekAurChai = () => {
    console.log(this); // Output : {}
}

ekAurChai();

/* +++++++++++++++++ Declaration of Array function +++++++++++++++++ */

// standard
const arrow = (num1, num2) => {
    return num1 + num2
}

const implicitArrow1 = (num1, num2) => num1 + num2
const implicitArrow2 = (num1, num2) => (num1 + num2)
const arrowObj = () => ({username : 'hitesh'})  // this syntax is to return object

console.log(arrow(3, 4))
console.log(implicitArrow1(3, 4))
console.log(implicitArrow2(3, 4))
console.log(arrowObj())

