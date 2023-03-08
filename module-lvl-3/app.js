// Inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greeting() {
//     console.log("Hello , from " + this.name);
//   }
// }

// class Admin extends Person {
//   isAdmin = true;

//   constructor(name, age, skills) {
//     super(name, age);
//     this.skills = skills;
//   }
// }

// function Person (name) {
//   return {
//     name: name,
//     greeting: function () {
//       console.log("Hello , by ... ", name);
//     },
//   };
// }

// const user = new Person("John");
// const user1 = new Person("Mike");
// const admin = new Admin("Bob", 23, ["HTML", "JS"]);

// console.log("[admin]", admin);

// user.greeting();
// user1.greeting();

// console.log(user);
// console.log(user1);


// 1) class Hero  -> name = ... , login = ... , password = ... , signUp() => "Signed up" ,
// 2) class Wizard => Hero + method attack() { cl ("There was an attack !") }

// class Hero {
//     constructor(name, login, password) {
//       this.name = name;
//       this.login = login;
//       this.password = password;
//       this.top = top;
//       this.left = left;
//     }
  
//     signUp() {
//       return "Signed up";
//     }

//     static goUp () {
//         this.top += 1
//     }

//     static goDown () {
//         this.bottom += 1
//     }
    
//     static turnRight () {
//         this.right += 1 
//     }

//     static turnRight () {
//         this.left += 1 
//     }

//   }

//   class Wizard extends Hero {
//     constructor(name, login, password) {
//       super(name, login, password);
//     }


  
// //     attack() {
// //       console.log("There was an attack!");
// //     }
// //   }


// // class Hero {
// //     constructor (name , surname , age) {
// //         this.name = name,
// //         this.surname = surname, 
// //         this.age = age
// //     }

// //     Hero () {
// //         console.log("");
// //     }
// // }

// // function testFunc () {
// //     function testFuncTwo () {
// //         function testFuncThree () {
// //         }
// //     }
// // }

// function Human (name , age, data, password, email) {

//     return {
//         name : name, 
//         age : age,
//         bigData : data
//     }
// }

// const HumanOne = Human();

// HumanOne.name = 2;
// HumanOne.bigData = [];

// HumanOne.bigData[0] = '12'
// HumanOne.bigData[1] = false
// HumanOne.bigData[2] = 4
// HumanOne.bigData[3] = 'asd'

// console.log(HumanOne);

// if (HumanOne.name === undefined) {
//     console.log("fuck u")
// } else {
//     console.log("ok")
// }

// function Admin (name, surname, skills) {

//     return {
//         name : name, 
//         surname : surname, 
//         skills : skills
//     }

// }

// const adminOne = Admin ('Nazar', 12, ["html", 'css', 'js']);

// const adminTwo = Admin ('Joe', 333, ["html", 'python', 'pandas']);

// console.log(adminOne);
// console.log(adminTwo);


// const bob = Object.assign({name : 'Bob'});

// console.log(bob);


// function Admin (name , surname , age) {

//     // const admin = {}

//     // admin.name = name; 

//     // admin.surname = surname; 

//     // admin.age = age;

//     // const ollAdmin = Object.assign({name : name, surname : surname , age : age})

//     // return ollAdmin


//     // return Object.assign = {
//     //     name, 
//     //     surname, 
//     //     age
//     // }

// }

// const adminVihlop = Admin('nazar', 'ssdf', 12);

// console.log(adminVihlop);



// let arr = [23,32,91,12,12].sort()

// const newArr = [12,2,2,2,2,2,24,4,4].reduce((prev, reduce) => {
//    prev += reduce
//    return prev
// }, 0)

// console.log(newArr);

// const numbers = [12,2,2,2];

// let counter = 0;

// for (const number of numbers) {
//     counter += number
// }

// console.log(counter);

// console.log(arr);

// const arr = [6,7,8,9].concat([1,2,3,4,5]).sort();

// console.log(arr);

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount); 
// console.log(sum);

// const slicedArray = [23,92,11,234,3].slice(1,3);

// console.log(slicedArray);

// const reduceArr = [12,2,41,2,2,2].reduce((total, sort) => {
//     return total += sort
// })

// console.log(reduceArr);


// const testArrForReduce = [12,12,12,3,4,5];

// // let counter = 0; 

// for (const key of testArrForReduce) {
//     key += testArrForReduce
// }

// console.log(testArrForReduce)

// const arr = [12121212]
// const arrTwo = [1212,2,2,22]
// const arrThree = [12,2,2,2,2,2,]

// const arrays = arr.concat(arrTwo, arrThree)

// console.log(arrays);

// const arr = [32,2,2,2,,2].reduce((total, reduce) => {

//     return total /= reduce

// })

// console.log(arr);

// const slicedArr = [12,12,12,12,3,43,12,].slice(4,6);

// console.log(slicedArr);

// const sliceArr = [12,3,2,4,2,4].slice();

// console.log(sliceArr);

// const arr = ['name', 'kkk', 'asdf', 'sadfewq'];
// const popIndex = arr.indexOf('kkk');
// const sliced = arr.slice(popIndex);
// console.log(sliced);

// const arrNames = ['nazar', 'nastya', 'inna'];

// const popInde = arrNames.indexOf('nastya');

// const slice = arrNames.slice(popInde)

// console.log(slice);

const arrWithIncludes = ["m", "b", "s", '1'];

// arrWithIncludes.splice(1,3)

// console.log(arrWithIncludes);

const str = arrWithIncludes.join("-");

console.log(str);

const arr = [12,12,2,1,12].reduce((tatota, sum) => {
    return tatota += sum
})

console.log(arr);

const arrTwo = 10; 

for (const key of arrTwo) {
    key += arrTwo
}

console.log(arrTwo);

const arrowFunc = (a, b) => a + b

const res = arrowFunc(2,2);

console.log(res);