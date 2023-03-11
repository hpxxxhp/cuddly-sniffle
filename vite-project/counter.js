const firstObj = {
    a : 1,
    b : 2,
    c : {
        s : 2,
        ss : 2
    }
}

const threedObj = {
    g : 2
}

const secondObj = Object.assign(threedObj,firstObj);

console.log(secondObj);


const add = {
    d : 17,
    f : 20
}

const clone = Object.assign({}, add);

clone.d = 10;

console.log(add);
console.log(clone);

const oldArr = ['a', 'b', 'c'];

const newOldArr = oldArr.slice();

newOldArr[1] = 's'

console.log(newOldArr);
