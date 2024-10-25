/* Immediately Invoked Function Expression IIFE */

// IIFEs are invoked immediately
// we use IIFEs to get rid of pollution by global scope variables
// IIFE are useful to perform actions that are need to be performed immediately such as 'making database connection'
// you must use ';' at the end of the IIFE so engine knows where to stop the execution the IIFE function

// Method 1 to declare an IIFE 

(function() {
    console.log('DB Connected')
})();

// Method 2 to declare an IIFE using Arrow Function

(() => {
    console.log('DB Connected Two')
})();

// IIFE with parameters/arguments

((name) => {
    console.log(`Hello ${name}`)
})('hitesh');