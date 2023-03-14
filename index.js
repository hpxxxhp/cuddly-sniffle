class Hero {
    constructor (damage, hp, name) {
       this.name = name
       this.damage = damage;
       this.hp = hp;  
       console.log(this)
    }
}

const warrior = new Hero(200, 100, 'nzr');
const warrioTwo = new Hero(300, 100, 'mike');
warrioTwo.damage -= 12 ;

console.log(warrior);
console.log(warrioTwo);


let isRunning = true; 

while (isRunning) {

    const userPick = prompt("", '')

    switch (userPick) {
        case 'Q' || 'q':
            isRunning === false;
            break;
        
        default:
            break;
    }

}

