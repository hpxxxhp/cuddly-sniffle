let fullUserData = [] ;

while (true) {

    const choise = prompt("a) or b)")

    if (choise.toLowerCase() === "a") {

        let getUserEmail = prompt("add your email");
    
        let getUserPassword = prompt('add your passord');
    
        if (getUserPassword.toLowerCase() === "q") {
            break
        }
    
        const userDataPswAndEm = {
            email : getUserEmail,
            psw : getUserPassword 
        }
    
        fullUserData.push(userDataPswAndEm); 
    
        console.log(fullUserData); 
    } else if (choise.toLowerCase() === 'b') {

    }

}