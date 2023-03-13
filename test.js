//let userData = [] ;
//
//const userDataObj = {
//    name : 'nam',
//    surname : 'surname',
//    someData : {
//        nameTwo : 'nameW',
//        haha : {
//            nameThree : 2
//        }
//    }
//}
//
//const {nameThree} = userDataObj.someData.haha ;
//
//userData.push(nameThree);
//
//console.log(userData);


const arr = [1,2,2,2];


console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let key of arr) {
    if (typeof (arr[key]) === "Object") {
        for (let i of arr[key]) {
            console.log(`${i} in ${arr[key][i]}`)
        }
    } else {
        console.log(`${key} in ${arr}`)
    }
}
