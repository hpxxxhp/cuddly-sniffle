// null , underfind , number , string , boolean, symbol, object . 

// if (typeof(Object))

function objData (obj) {
  if (typeof(obj) === 'object') {
   return console.log("there is obj");
  } 
  console.log("there isn't an obj");
}

objData({});
objData(false);
objData('23');


function objData (obj) {
  if (typeof(obj) === 'object') {
   return console.log("there is obj");
  } 
  console.log("there isn't an obj");
}

console.log(typeof 34 === 'number' );

console.log(typeof Infinity === 'number' );

console.log(typeof Number('3') === 'number' );

console.log(typeof Number('3') === 'number' );

console.log(typeof Number('3') === 'number' );

console.log(typeof '3' === 'string');

console.log(typeof typeof 1 === 'string');

console.log(typeof typeof '' === 'string');

//booleans

console.log(typeof true === 'boolean');

console.log(typeof (!!!0) === 'number')

console.log("[i]", i);

var i = 0

var petro = {name : 3};

console.log(petro.name);

let petr = {};

petr.age = 33;

console.log(petr.age);

console.log(typeof {a: 1} === 'object');

console.log(typeof [] === 'object');

console.log(Number);

console.log(Number(1));

console.log(new data);

const arr = new Array ('1', '2', '3');

const arrTwo = ['1','2','3'];

console.log(arr === arrTwo); // false

// const user = {
//   firstName : 'John'
// }

// console.log(use)

// const userTwo = {
//   firstName : 'Mike'
// }

// // for (const key in user) {
// //   const value = user[key]
// //   userTwo[key] = value ;

// // }

// console.log(userTwo.firstName)

// const arr = ['1','2', '3'];

// const copyArr = arr

// copyArr.push('2');

// console.log(copyArr);

//JSON

const bob = {
  firstName : 'Bob',
}
const newBob = JSON.stringifyl(bob);
console.log(newBob)

console.log(parseInt('22$$$'))

