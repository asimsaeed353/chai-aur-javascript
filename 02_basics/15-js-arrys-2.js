// method to merge two arrays

// 1) firstArr.push(secondArr) => this will modify the first array and instead of merging two arrays, it's result is very strange i.e. ['0', '1', '2', ['3', '4', '5']]

let marvelHeroes = ["Thor", "Iron Man", "Captain America"];
console.log(marvelHeroes);

let dcHeroes = ["Superman", "Batman", "Flash"];
console.log(dcHeroes);

// marvelHeroes.push(dcHeroes) // this will result array in array like this [ *, *, [ *, *,]]
// console.log(marvelHeroes)

// concat() will do better job in merging arrays and it returns a new array rather than modifying the existing arrays

/*

let allHeroes = marvelHeroes.concat(dcHeroes);
console.log("marvelHeros", marvelHeroes);
console.log("dcHeros", dcHeroes);
console.log("allHeros", allHeroes);

*/

// If you have more than two arrays to merge, use spread operator

let desiHeroes = ['Shaktiman', 'Shivaji']
const allNewHeroes = [...marvelHeroes, ...dcHeroes, ...desiHeroes]
console.log(allNewHeroes)

// +++++++++++++++++++ To convert array in array in array into singe array (make array flat using .flat(depth)) +++++++++++++++++++
let multi_dim_arr = [1, 2, 3, 4, [4, 6], [7, [8, 9, 10]]]
console.log(multi_dim_arr.flat(Infinity)) // you should give specific depth or infitnity

// +++++++++++++++++++ Convert any datatype into array +++++++++++++++++++

if (!(Array.isArray('Hitesh'))) // checks if given datatype is array or not 
{
    console.log(Array.from('Hitesh')) // converts given data type into array
    
}

// if .from() can't convert any dataype into array, it's gonna result an empty array. Let's see such a case

console.log(Array.from({ name: 'hitesh' })) // this gonna result an empty array since we have not specified if we want array of keys or array of values

// +++++++++++++++++++++ Convert a set of elements into Array using .of() +++++++++++++++++++++

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log('convert set of elements into array: ', Array.of(score1, score2, score3))
