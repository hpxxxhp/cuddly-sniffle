let getUserName , getUserSurname, getUserAge; 

let userError; 

function registrationMenu () {

  const getUserData = {
 
    userName : () => {
      getUserName = prompt("add your name", '').toLowerCase();

      while (getUserName === null || getUserName.trim() === '' || !isNaN(getUserName) || getUserName.length > 15 || getUserName.length < 2) {
           getUserName = prompt("add your name", '').toLowerCase();
         }   
    }, 

    userSurname : () => {
      getUserSurname = prompt("add your surname", '').toLowerCase();

      while (getUserSurname === null || getUserSurname.trim() === '' || !isNaN(getUserSurname) || getUserSurname.length > 15 || getUserSurname.length < 2) {
           getUserSurname = prompt("add your name", '').toLowerCase();
         }
    },
    
    userAge : () => {
      getUserAge = prompt("add your age", '');

      while (getUserAge === null || isNaN(getUserAge) || getUserAge.trim() === '') {
        getUserAge = prompt("add your age", '');
      }

    }

  }

  getUserData.userName();
  getUserData.userSurname();
  getUserData.userAge();

}

registrationMenu ();


const dataUser = (name, surname, age) => {
  return {
    '[name]' : [name],
    '[surname]' : [surname],
    '[age]': [age]
  }
}

const resData = dataUser(getUserName, getUserSurname, getUserAge);

console.log(resData);