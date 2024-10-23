// In JS, there are two ways of declaring js object

// 1) constructor that's gonna use singleton and it's syntax is
// Object.create

// 2) Object literals who's not gonnna use singleton and it's syntax is
const JsUser = {
  name: "hitesh",
  "full name": "Hitesh Choudhary",
  age: "18",
  location: "jaipur",
  email: "hitesha@gmail.com",
  isLoggedIn: "false",
  lastLogInDays: ["Monday", "Saturday"],
};

// ways to access object elements

// 1) using dot operator '.', this is not recommended because it will not be able to access keys that are declared in quotes and have space in the name for example "full name"

console.log(JsUser.lastLogInDays);
// console.log(JsUser.full name); because of space in "full name", it can't be accessed using dot operator

// 2) use [] brackets as like

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// since [''] take argument in string format, so you can pass keys which have space in their names

// +++++++++++++++ Accessing Symbol in Objects ++++++++++++++++

const mySym = Symbol("myKey1");

const JsUser_symbol = {
  name: "hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "myKey1", // symbol as key is enclosed inside [] because of it's speciality
  age: "18",
  location: "jaipur",
  email: "hitesha@gmail.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Saturday"],
};

// if you want to use symbol in objects, must declare it in object within [] so it is treated as symbol and not ordinary object key and access symbol in following way only
console.log(JsUser_symbol[mySym]);

// +++++++ To freeze object (so it can't be changed)

JsUser_symbol.email = "hitesh@chatgpt.com";
console.log("Before freezing", JsUser_symbol["email"]);

// Object.freeze(JsUser_symbol); // object is freezed

JsUser_symbol.email = "hitesh@microsoft.com";
console.log("After Freezing", JsUser_symbol["email"]);


// ++++++++++++++ using functions in objects +++++++++++++++++++

JsUser_symbol.greeting = function () {
    console.log("hello there!")
}

console.log(JsUser_symbol);

JsUser_symbol.greeting(); // accessing the function inside an object

// use of this keyword 
JsUser_symbol.greetingtwo = function () {
    console.log(`Hello there! I'm ${this["full name"]}`);
}

JsUser_symbol.greetingtwo();