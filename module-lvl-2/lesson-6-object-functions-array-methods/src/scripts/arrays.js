let userData = []

while (true) {

    const choise = prompt('a) b) c)') ;

    if (choise.toLowerCase() === 'a' || choise.toUpperCase() === 'A') {

        let getUserEmailForHack = prompt('add your email pls');
        let getUserPasswordForHack = prompt('add your password pls');

        const userSortPasswordAndEmail = {
            userEmail : getUserEmailForHack,
            userPassword : getUserPasswordForHack
        }

    } else if (choise === "q") {
        break
    }

}