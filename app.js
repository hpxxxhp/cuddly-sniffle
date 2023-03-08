const someQuationsForUser = {
    getUserData : [],
    getUserName : function (name) {
        let userName = 'nazar';
        someQuationsForUser.getUserData[0] = userName;
        delete someQuationsForUser.getUserName
    } ,
    switcherForThisData : false ,
    switcherForThisDataOnOff : (on, off) => {
        if (!someQuationsForUser.switcherForThisData) {
            someQuationsForUser.switcherForThisData = on
        } else {
            someQuationsForUser.switcherForThisData = off
        }
    }
}

someQuationsForUser.switcherForThisDataOnOff(true, false);

someQuationsForUser.getUserName() ;

console.log(someQuationsForUser);
