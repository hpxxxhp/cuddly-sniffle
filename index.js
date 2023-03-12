let users = []; 

while (true) {
  let choice = prompt("Выберите действие: регистрация или авторизация")

  if (choice.toLowerCase() === "регистрация") {
    let firstName = prompt("Введите имя:")
    let lastName = prompt("Введите фамилию:");
    let age = prompt("Введите возраст:");
    let email = prompt("Введите email:")
    let password = prompt("Введите пароль:");

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      password: password
    };

    users.push(newUser);

    console.log(`Новый пользователь ${firstName} ${lastName} был добавлен.`);

    let continueRegistration = confirm("Продолжить регистрацию?")

    if (!continueRegistration) {
      break;
    }

  } else if (choice.toLowerCase() === "авторизация") {
    let email = prompt("Введите email:")
    let password = prompt("Введите пароль:");

    let userFound = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        if (users[i].password === password) {
          console.log("Пользователь успешно авторизован.")
          for (let key in users[i]) {
            console.log(`${key}: ${users[i][key]}`);
          }
          userFound = true;
          break;
        } else {
          console.log("Неверный пароль.");
          userFound = true;
          break;
        }
      }
    }

    if (!userFound) {
      console.log("Пользователь с предоставленными данными не был найден.");
    }

    let continueAuthorization = confirm("Продолжить авторизацию?");

    if (!continueAuthorization) {
      break;
    }

  } else {
    console.log("Некорректный ввод, попробуйте снова.");
  }
}