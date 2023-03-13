let allUsers = [];

function start () {

    const userChoise = prompt ('\na) Зарегистрироваться \nb) Авторизироваться \nc) Просмотреть список всех пользователей \nd) Изменить данные пользователя \nq) Выйти');

    if (userChoise.toLowerCase() === 'Зарегистрироваться') {
        let userName = prompt("type your name");
        let userSurname = prompt("type your surname");
        let userAge = prompt("add your age");
        let userEmail = prompt("add your email");
        let userPassword = prompt("add your password");

        let userData = {
            name : userName,
            surname : userSurname,
            age : userAge,
            email : userEmail,
            password : userPassword
        }
    } 

    allUsers.push(userData);
}

start();