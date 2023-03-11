//const workWithArr = [2,2,2,2,2];
//
//const newWork = workWithArr.slice();
//
//newWork[1] += '2';
//
//console.log(newWork);
//
//
//const names = ['nzr', 'hpxxph', 'luka'].sort(),
//      surname = ['ss', 'kk', 'ss'].sort(),
//      nameAndSurnama = [...names, ...surname];
//
//console.log(nameAndSurnama);

//const newNames = [1,2,3];
//
//const strNames = ['a', 'r', 'c'];
//
//const fullNames = [...newNames, ...strNames, 'd', 'e'].sort();
//
//console.log(fullNames);
//
//function getTestSomething () {
//
//    const newArr = [2,2,2,2,2];
//
//    const oldArr = [1,1,1,1,1];
//
//    console.log(...newArr, ...oldArr);
//}
//
//const res = getTestSomething();
//
//console.log(res);


//let userName = 'nzr',
//    userSurname = 'sht',
//    userAge = 12
//
//const userDataDb = {
//    nameUser : userName,
//    surnameUser : userSurname,
//    ageUser : userAge
//}
//
//console.log(userDataDb);
//
//const newUserDataDb = {...userDataDb};
//
//console.log(newUserDataDb);
//
//let obj = {
//    a: 1,
//    b: 2,
//};
//let copy = obj;
//
//obj.a = 5;
//console.log(copy.a);


//
//function copy(mainObj) {
//    let objCopy = {}; // objCopy будет хранить копию mainObj
//    let key;
//
//    for (key in mainObj) {
//        objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
//    }
//    return objCopy;
//}
//
//const mainObj = {
//    a: 2,
//    b: 5,
//    c: {
//        x: 7,
//        y: 4,
//    },
//}
//
//console.log(copy(mainObj));


//const firstObj = {
//    a : 2,
//    b : 3
//}
//
//const secondObj = {
//    c : 3,
//    d : 3
//}
//
//const fullObj = Object.assign(firstObj, secondObj);
//
//console.log(fullObj);

//const obj1 = { a: 1 };
//
//const obk3 = {B : 2};
//
//const obj2 = Object.assign({}, obj1, obk3);
//
//console.log(obj2);

const secondName = ['n', 's', 's'],
      firstName = ['d', 's', 'a'],
      fullName = [...secondName, ...firstName].sort();

console.log(fullName);


