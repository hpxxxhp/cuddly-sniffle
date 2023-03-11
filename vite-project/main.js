//function newCopy (mainObj) {
//
//    let copyArr = [];
//
//    for (let key in mainObj) {
//        mainObj[key] = copyArr[key]
//    }
//    return copyArr ;
//}
//
//const obk = {
//    a : 1,
//    b : 2,
//    c : {
//        d : 3,
//        f : 4
//    }
//}
//console.log(obk);
//
//const newObk = newCopy(obk);
//
//console.log(newObk);

function copy (mainObj) {
    let newObj = [];

    let key ;

    for (key in mainObj) {
        newObj[key] = mainObj[key]
    }

    return newObj
}

const obj = {
    a : 10,
    b : 2,
    c :{
        d : 2,
        f : 4
    }
}

const objFotTest = {
    g : 3,
}

Object.assign(obj, objFotTest);

//console.log(Object.assign(obj, objFotTest));

const newObk = copy(obj);

newObk.a = 30
newObk.c.x = 10

console.log(obj);
console.log(newObk);
