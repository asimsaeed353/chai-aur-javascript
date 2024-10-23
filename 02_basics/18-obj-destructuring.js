// suppose you decalre an object and you want to access a specific property of that object. You might don't like to write the boring and long syntax as myNewObj.userFullName all the time. You can de-structure it as

const myNewObj = {
    userId : 123,
    userFullName: 'Hitesh', 
    userIsLoggedIn : false
}

// de-structuring

// const { userFullName } = myNewObj

// now you can use userFullName instead of myNewObj.userFullName
// you can even make the userFullName to something even shorter using alias 

const {userFullName : usrName} = myNewObj
// console.log(userFullName)
console.log(usrName)

// you can use multiple properties too like
const {userId : uId, userIsLoggedIn : uPresent} = myNewObj
console.log(uId, uPresent);

// This concept of de-structuring is used in React.js

/*
// can give custom properties but they ain't gonna change the original object
const { userFullName, userId, userAge = 12 } = myNewObj
console.log(userFullName, userId, userAge)
*/
