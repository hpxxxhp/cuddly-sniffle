const userStart = () => {

  for (let i = 0; i < Infinity; i++) {

    let whatUserWantToDo = prompt("\na)registration \nb)authorization \nс) view a list of all users \nd)exit", '');
  
      if (whatUserWantToDo === "a" || whatUserWantToDo === "A") {
        registrationMenu ();
       break
    } else if (whatUserWantToDo === "b" || whatUserWantToDo === "B") {
        authorizationMenu ();
       break
    } else if (whatUserWantToDo === "c" ||  whatUserWantToDo === "C") {
      userDbFunc ();
       break
    } else if (whatUserWantToDo === "d" || whatUserWantToDo === "D") {
      exitMenu ();
      break
    }
  
  }
  
}

userStart () ;

function registrationMenu () {

  const getUserData = {
 
    userName : () => {
      getUserName = prompt("add your name", '');

      while ( getUserName === null
        || getUserName.trim() === '' 
        || !isNaN(getUserName) 
        || getUserName.length > 15 
        || getUserName.length < 2){
        userError = alert("try again");
           getUserName = prompt("add your name", '');
         }   

         getUserData.userSurname();

    }, 

    userSurname : () => {

      getUserSurname = prompt("add your surname", '');

      while (getUserSurname === null 
        || getUserSurname.trim() === '' 
        || !isNaN(getUserSurname) 
        || getUserSurname.length > 15 
        || getUserSurname.length < 2) {
        userError = alert("try again");
           getUserSurname = prompt("add your name", '');

         }

         getUserData.userAge();

    },

    userAge : () => {
      getUserAge = prompt("add your age", '');

      while (getUserAge === null 
        || isNaN(getUserAge) 
        || getUserAge.trim() === '') {
        userError = alert("try again")
          getUserAge = prompt("add your age", '');

        }

        getUserData.userEmail();

    } , 

    userEmail : () => {
      getUserEmail = prompt("add your email");

      while (getUserEmail === null 
        || !getUserEmail.includes("@") 
        || getUserEmail.trim() === '' 
        || getUserEmail.length < 6) {
        userError = alert("try again")
          getUserEmail = prompt("add your email");
      } 

      getUserData.userPassword();

  } , 

  userPassword : () => {
    getUserPassword = prompt("add your password");

    while (getUserPassword === null 
        || getUserPassword.trim() === '') {
      userError = alert("try again"); 
        getUserPassword = prompt("add your password");
    }
  }

  }

  getUserData.userName()

}

function userDbFunc () {
  const userDB = {
    ['NAME'] : [getUserName],
    ['SURNAME'] : [getUserSurname],
    ['AGE']: [getUserAge], 
     email : getUserEmail,
     password : getUserPassword
  }

  let userDBInArr = [getUserName, getUserSurname, getUserAge];

  userDBInArr.forEach((el) => {
    console.log(`${el} <= user add`);
  })
  
 console.table(userDB);
}

userDbFunc () ;

function authorizationMenu () {

  typeEmail = prompt("type your email");

  while (typeEmail === null || typeEmail.trim() === '') {
    typeEmail = prompt("type your email");
  }

  if (typeEmail === userDB.email) {
    alert("ok");
    passwordSucurity();
  } else {
    for (let i = 1; i <= 3; i++) {
      typeEmail = prompt(`type your email ${i}`);
      if (typeEmail === userDB.email) {
        passwordSucurity();
        break
      }
    }
  }

  function passwordSucurity () {

    typePassword = prompt("type your password");

    while (typePassword === null || typePassword.trim() === '') {
      typePassword = prompt("type your password");
    }

    if (typePassword === userDB.password) {
      alert("ok")
    } else {
      for (let i = 1; i <= 3; i++) {
        typePassword = prompt(`type your email ${i}`);
        if (typePassword === userDB.password) {
          break
        }
      }
    }
  }
}



function exitMenu () {

  const userWantExit = confirm("u really wanna exit?");

  if (userWantExit === true) 
    alert("goodbye");
  } else {
    userStart ();
  }

}