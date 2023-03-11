
const myArr = ['mike', 'john', 'nick'];

myArr.push(4);

myArr.sort()

console.log(myArr);

const myNewArr = new Array ('mike', 'john');

myNewArr.push('nazar');

myNewArr.pop();

console.log(myNewArr);

// myArr[3] = 2 

// console.log(myArr);

// const myNewarr = new Array ('mike', 'john', 'nick').sort();

// myNewarr[3] = 'nazar';

// console.log(myNewarr);

// let testAddedPush = 'testAdd'

// const testAddedPushFor = [2,1,2,3];

// if (testAddedPushFor > [4]) {
//     testAddedPushFor.push(testAddedPush)
// } else {
//     testAddedPushFor.pop();
// }

// console.log(testAddedPushFor)

// const myArr3 = [3,4,5,4,3].sort();

// myArr3.pop();

// console.log(myArr3);

// const arrNewAdded = ['added', 'new', 'array'];

// arrNewAdded.unshift(true);
// arrNewAdded.shift()

// console.log(arrNewAdded);

// const arr = [4,2,2,1,2,5];

const arr = ['added', 'new', 'array'];

arr.forEach(element => {
   console.log(element += '3') 
});
    
console.log(arr);

const newArr = ['test ', 'forEach '];

newArr.forEach(tools => {
    console.log(tools += 2)

    if (tools === 'test 2') {
        console.log('all right')
    } 
})


const arrForEachTest = {
    name : [3,3,3],
    secondName : [3,2,2,2,2,2,2],
}

let testArr = arrForEachTest.name;
let testArrTwo = arrForEachTest.secondName;

testArr.forEach(function(el, addedSome, addedSomeTest) {
    console.log(`${el *= 2} in ${addedSomeTest} in ${addedSome}`)
}); 

testArrTwo.forEach((el) => {
    console.log(el *= 2)
});

