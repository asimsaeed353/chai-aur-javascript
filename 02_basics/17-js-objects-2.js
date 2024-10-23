// delcaring object using constructor and is singleton
// let constObj = new Object();

const uberUser = {};

uberUser.id = '123'
uberUser.name = 'Hitesh'
uberUser.isLoggedIn = false;
uberUser.status = 'Single'

// object within object within object
uberUser.fullname = {
    userActualname: {
        userFirstName : 'Hitesh',
        userSecondName : 'Choudhary'
    }
}

// accessing object within object within object
console.log(uberUser.fullname?.userActualname.userFirstName);

// Merge two or more arrays
// 1) using Object.assign(target, source)


let obj1 = { 1: 'a', 2: 'b' }
let obj2 = { 3: 'a', 4: 'b' }
let obj3 = { 5: 'a', 6: 'b' }

// const obj4 = Object.assign({}, obj1, obj2, obj3)

// 2) using spread operator as in array, this is a latest and easy method

let obj4 = {...obj1, ...obj2, ...obj3} 

console.log(obj4);

// To get an object's keys or values as array so you can iterate through it

console.log(Object.keys(uberUser))  // this will return an array of only keys of 'uberUser'
console.log(Object.values(uberUser))  // this will return an array of only values of 'uberUser'
