/* JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). */

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getSeconds());
// console.log(myDate.getDay());

console.log(typeof myDate); // Type of date is 'object'

// +++++++++++++++++ Methods to Declare Date ++++++++++++++++++++++++

// let myCreatedDate = new Date(2010, 0, 10)  /* Since we start about array, so month starts from 0 */

// let myCreatedDate = new Date(2023, 0, 25, 5, 3)

// let myCreatedDate = new Date("2023-01-23")  // we can give date in yyyy-mm-dd format, (mm starts from 1)
// let myCreatedDate = new Date("1/23/204")  // we can give date in mm/dd/yyyy format, (mm starts from 1)

// let myCreatedDate = new Date("1-14-2023")  // we can give date in mm/dd/yyyy format, (mm starts from 1)
// console.log(myCreatedDate.toLocaleString());

// ++++++++ Using TimeStamps +++++++++++

// Sometimes you want to compare the current time with some specific time to know the difference. When you are holding a quiz competiton or poll or cloning websites like Airbnb where you want to know the time difference. This is done as

// define a timestamp

// let myTimeStamp = Date.now();  // this will give the current time in miliseconds
let myTimeStamp = Math.floor(Date.now() / 1000); // this will give the current time in seconds
let myCreatedDate = new Date(23, 0, 25, 5, 0); // date of specific instance

// now you can make the comparison and make sure to make comparison in miliseconds and then convert the result into desired format

// +++++++++++++++++ Customizing the date format ++++++++++++++++++++

// .toLocaleString() offers various attributes to manipulate different fields of the date

let newDate = new Date();

console.log(
  newDate.toLocaleString("default", {
    weekday: "long", // mon will be converted into Monday
  })
);

// +++++++++++++++++++ Range of Date +++++++++++++++++++++++++++
console.log("############## Range of date ##############");
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
