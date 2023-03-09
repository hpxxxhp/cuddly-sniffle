let getUserSum , getUserName , getUserStatus 

const getUserInformation = () => {

   getUserSum = prompt('Numbe');

  while( getUserSum === null || isNaN(getUserSum) || getUserSum.trim() === '' ) {
    getUserSum = prompt('Number');
  }

  getUserName = prompt("name");

  while(getUserName === null || getUserName.trim() === '') {
    getUserName = prompt("name");
  }

  let dataDB = [];

  if (getUserSum !== undefined ) {
    dataDB[0] = getUserSum 

    dataDB.forEach(element => {
        if (typeof(dataDB[0]) === 'string') {
            console.log(element * 2);
        } 
      });

  } else {
    console.error("error");
  }

  if (getUserName !== undefined ) {
    dataDB[1] = getUserName 

    dataDB.forEach(element => {
        if (typeof(dataDB[1]) === 'string') {
            console.log(element += '222222');
        } 
      });

  } else {
    console.error("error");
  }

  console.log(dataDB);

}

getUserInformation(getUserSum);

