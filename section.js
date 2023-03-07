// // let a = 1, b = 1, c, d ;

// // c = ++a 
// // d = b++

// // console.log(c);
// // console.log(d);

// // let a = 2; 

// // let x = 1 + (a *= 2);

// // console.log(x) 

// a = null
// b = undefined

// console.log(a > b);

// console.log()


// function Human (name , age) {

//     return {
//         name : name,
//         age : age
//     }

// }


function Admin (name, age, skills, email, password) {

    const person = Human(name , age);

    return person

    return {
        name : name,
        age : age, 
        skills : skills,
        email : email, 
        password : password
    }

}

const AdminOne = Admin('John', 23, ["html", 'css', 'js'], 'ki@gm.com', '234');
// const AdminTwo = Admin('Mike', 32, ['pytnon', 'jupyter', 'pandas'], 'ki@gm.com', '234');

console.log(AdminOne);
// console.log(personOne);
console.log(AdminTwo);

