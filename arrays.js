let userData = [];

let counter = 0

while (true) {

    const choise = prompt('a) b) c)') ;

    if (choise.toLowerCase() === 'a' || choise.toUpperCase() === 'A') {

        let getUserEmailForHack = prompt('add your email pls');

        while (getUserEmailForHack.trim() === ''  || getUserEmailForHack === null) {
            getUserEmailForHack = prompt('add your email pls');
        }

        let getUserPasswordForHack = prompt('add your password pls');

        while (getUserPasswordForHack.trim() === ''  || getUserPasswordForHack === null) {
            getUserPasswordForHack = prompt('add your password pls');
        }

        const userSortPasswordAndEmail = {
            userEmail : getUserEmailForHack,
            userPassword : getUserPasswordForHack
        }

        userData.push(userSortPasswordAndEmail);

        counter ++;
    } else if (choise.toLowerCase() === 'b' || choise.toUpperCase() === 'B') {

        if (userData.length === 0) {
            alert("u need add email and password");
        } else {
            let inputUserEmail = prompt("input your email");
            let inputUserPassword = prompt("input your password");

            for (let i = 0; i < userData.length; i++) {
                if (userData[i].userEmail === inputUserEmail) {
                    if (userData[i].userPassword === inputUserPassword) {
                        alert(`good`);
                    }
                } else {
                    alert("user not found");
                }
            }
        }
    } else if (choise.toLowerCase() === 'c' || choise.toUpperCase() === 'C') {

        if (userData.length === 0) {
            alert('пользователей нет');
        } else {
            console.log(`количество пользователй ${counter}`);
            for (let key in userData) {
                console.log(userData[key]);
            }
        }
        

    } else if (choise.toLowerCase() === 'q' || choise.toUpperCase() === 'q') {
        break
    }
}
