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


  
//     attack() {
//       console.log("There was an attack!");
//     }
//   }


// class Hero {
//     constructor (name , surname , age) {
//         this.name = name,
//         this.surname = surname, 
//         this.age = age
//     }

//     Hero () {
//         console.log("");
//     }
// }

// function testFunc () {
//     function testFuncTwo () {
//         function testFuncThree () {
//         }
//     }
// }


function Admin (name, surname, skills) {

    return {
        name : name, 
        surname : surname, 
        skills : skills
    }

}

const adminOne = Admin ('Nazar', 12, ["html", 'css', 'js'])

console.log(adminOne);
