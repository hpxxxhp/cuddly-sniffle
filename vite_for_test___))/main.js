const arr = [2,'dd',2,2,2, true];

arr.forEach((element) => {
   if (typeof(element) === 'number') {
    console.log(element * 2);
   } else if (typeof(element) === 'string') {
    console.log(element += 'sss')
   } else if (typeof(element) === 'boolean') {
    if (element === false) {
        console.log(element = true)
    } else {
        console.log(element = false)
    }
   }
});


const newArr = [1,2,3];

console.log(newArr);

newArr.forEach((el) => {
    console.log(el * 3)
})

const newArrTestForEach = new Array(2,2,2,2);

newArrTestForEach.forEach((el) => {
   return console.log(el * 2);
})

const myArr = [1,2,3,4];
console.log(myArr)

const newMyArr = myArr.map(el => el * 2) 

console.log(newMyArr);

const myNewArrTwo = [333333333];

const myNewArrTwoUpdate = myNewArrTwo.map((el) => {
    console.log(el * 1);
})

console.log(myNewArrTwoUpdate);




