let userName = 'nzr',
    userSurname = 'sht',
    userAge = 18

const userDataDb = {
  nameUser : userName,
  surnameUser : userSurname,
  ageUser : userAge
}


function getArrayFromObject (mainObjcet) {

  let arr = [] ; 

  let key ; 

  for (key in mainObjcet) {
    arr[key] = mainObjcet[key]
  }

  return arr

}

const someRubishForTest = {
  name : 'ok', 
  nameTwp : 2
}

const resTwo = getArrayFromObject(someRubishForTest);

const res = getArrayFromObject(userDataDb);

const fullRes = getArrayFromObject(...resTwo, ...res);

