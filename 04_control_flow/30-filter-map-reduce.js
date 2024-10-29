// .forEach(callback) is useful to iterate through the array elements but it doesn't return anything.

// There are certain cases when we want to return all or specific elements of the array. In such case, we have to use 'filter'

// ++++++++++++++++++++++++++++++++++ Filter ++++++++++++++++++++++++++++++++++++++++++++++++

// filter iterate through array elements and return them

// Syntax: arr.filter(callback)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// return even elements in the array and store them in a new variable

const evenNums = myNums.filter((item) => {
  // if (item % 2 === 0) {
  //     return item;
  // }
  return item % 2 === 0;
});

// this can be done using forEach as
const newNums = [];
evenNums.forEach((nums) => {
  if (nums % 2 === 0) {
    newNums.push(nums);
  }
});

console.log(evenNums); // Output : [2, 4, 6, 8, 10]
console.log(newNums); // Output : [2, 4, 6, 8, 10]

// +++++++++++++++++++ Implementing Basic Filter Functionality ++++++++++++++++++++++++++

const books = [
  { title: "Book One", genre: "History", publish: "1994", edition: "2004" },
  { title: "Book Two", genre: "Science", publish: "1999", edition: "2008" },
  { title: "Book Three", genre: "Fiction", publish: "2000", edition: "2002" },
  { title: "Book Four", genre: "Science", publish: "2004", edition: "2009" },
  {
    title: "Book Five",
    genre: "Non-Fiction",
    publish: "1992",
    edition: "2005",
  },
  { title: "Book Six", genre: "Fiction", publish: "2001", edition: "2010" },
  { title: "Book Seven", genre: "History", publish: "1994", edition: "2011" },
];

// filter functionality

// books which are published after 2000
let userBooks = books.filter((book) => book.publish > 2000);

// books which has 'History' as genre
userBooks = books.filter((book) => book.genre === "History");

// console.log(userBooks);

// ++++++++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++++++++++++

// Map is similar to .forEach but, unlike .forEach() it returns values

const addTen = myNums.map((num) => num + 10);

console.log("ten added using map", addTen);

// +++++++++++++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++++++++++++++++++++++++

// reduce is used to sum the elements of the array

// syntax: arr.reduce ( (acc, currValue) => acc + currValue, initialValue )

// the value of accumulator must be something. This value will be used only first time and the added to the first element of the array. The new accumulator value will be 'previous accumulator vale' + 'first element of the array'

// let's implement total price of shopping cart functionality

const shoppingCart = [
  { course: "MERN", price: 5999 },
  { course: "React Js", price: 2499 },
  { course: "Backend", price: 3499 },
  { course: "Frontend", price: 1999 },
  { course: "Android Dev", price: 7999 },
];

const totalPrice = shoppingCart.reduce((acc, course) => acc + course.price, 0);

console.log(totalPrice);
