// String Interpolation

/*
    String interpolation allows injecting of variables, function calls and arithmetic operations directly in strings.
    Example : 

    const name = 'Asim';
    console.log(`My name is ${name}.`)

    # String type is 'object'.

    # Another way of declaring a string
    const name = new String('hitesh');

    It's gonna give us a string with key value pairs. Key will be index and value will be character at that position. 

    Example:
    0 : 'h'
    1 : 'i'
    2 : 't'
    3 : 'e'
    4 : 's'
    5 : 'h'
    
    Also it will give us a lot of function of the string e.g. endsWith(), toUppercase(), indexOf(), etc

    ## so, 
    console.log(name[0])   // Output h

    ## To access the prototype object of the string 
    console.log(name.__proto__)  // returns an object which contains the functions that can be applied to string
    
    ## Original string is immutable i.e. it is not changed no matter what functions you run on string because it is stored in Stack, so a copy of the string is passed not the actual string.
    */

/* String Methods */

let gameName = new String("GTA Vice City");
console.log(gameName.at(5)); // string.at(index) => character at index

console.log(gameName.charAt(5)); // string.charAt(index) => character at index

console.log(gameName.charCodeAt(5)); // string.charCodeAt(index) => ASCII code of character at index

console.log(gameName.codePointAt(5)); // string.codePointAt(index) => ASCII code of character at index

console.log(gameName.concat(" is the best")); // string.concat('another_string') => adds string into another string

console.log(gameName.endsWith("asim")); // String.endsWith('another_string)
console.log(gameName.endsWith("City")); // String.endsWith('another_string)

console.log(gameName.includes("asim")); // String.includes('another_string)
console.log(gameName.includes("GTA")); // String.includes('another_string)

console.log(gameName.indexOf("i")); // String.indexOf('c') => returns the index of a character

console.log(gameName.length); // returns the length of the string

console.log(gameName.match("City")); // .match('string') => matches a given regular experession

console.log(gameName.padEnd(17, "017")); // string.padEnd(length, another_string) => return a string of specified length and add the other_string after it

console.log(gameName.repeat(3)); // string.repeat(number) => repeats a string for given number of times

console.log(gameName.slice(0, 3)); //string.slice(starting_index, ending_index(exculded)) => return a part of the string between given indexes
console.log(gameName.slice(4)); //string.slice(starting_index) => return a part of the string from given index till end of the string

console.log(gameName.split(" ")); // string.split("separator") => splits a string and returns an array of substrings

let text = gameName.valueOf();
console.log(text);
// console.log(gameName);
