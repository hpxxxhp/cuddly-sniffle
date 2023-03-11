const userStart = () => {

  for (let i = 0; i < Infinity; i++) {

    let whatUserWantToDo = prompt("\na)registration \nb)authorization \nс) view a list of all users \nd)exit", '');
  
      if (whatUserWantToDo === "a" || whatUserWantToDo === "A") {
      // function ()
      break
    } else if (whatUserWantToDo === "b" || whatUserWantToDo === "B") {
       // function ()
       break
    } else if (whatUserWantToDo === "c" ||  whatUserWantToDo === "C") {
       // function ()
       break
    } else if (whatUserWantToDo === "d" || whatUserWantToDo === "D") {
        // function ()
      break
    }
  
  }
  
}

userStart () ;


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

