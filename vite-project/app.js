class Hero {

    HP_BY_DEFAULT = 100;
    DAMAGE_BY_DEFAULT = 25;
  
    constructor(name, damage = this.DAMAGE_BY_DEFAULT, hp = this.HP_BY_DEFAULT) {
      this.name = name;
      this.damage = damage;
      this.hp = hp;
    }
  }
  
  class Elf extends Hero {
    constructor(name, damage, hp) {
      super(name, damage, hp);
    }
  
    magicKick() {
      return this.damage * 2;
    }
  }
  
  class Archer extends Hero {
    constructor(name, damage, hp) {
      super(name, damage, hp);
    }
  
    magicArrow() {
      return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
    }
  }
  
  let isRunning = true;
  
  while (isRunning) {
    const userPick = prompt(`
        Hello , enter raice that you wanna pick : 
        a) Archer 
        b) Elf
        q) Qutit 
    `);
  
    const queue = random();
  
    switch (userPick.toLowerCase()) {
      case "a":
        const archer = new Archer("Hero");
        const machineElf = new Elf("Hero");
  
        battle(archer, machineElf, queue);
  
        console.log(archer);
        break;
      case "b":
        const elf = new Elf("Hero");
        const machineArcher = new Elf("Hero");
  
        battle(elf, machineArcher, queue);
  
        console.log(elf);
        break;
      case "q":
        isRunning = false;
        break;
  
      default:
        alert("Try once again!");
        break;
    }
  }
  
  function battle(hero, machine, queue) {
    if (queue === "hero") {
      heroAndMachineFunc ()
    } else {
      heroAndMachineFunc ()
    }
  }
  
  function random() {
    const value = Math.random().toString().slice(2, 3);
  
    if (value % 2) return "hero";
  
    return "bot";
  }
  
  function heroAndMachineFunc () {
  
    while (Hero.hp > 0 || machine.hp > 0) {
      machine.hp -= Hero.damage;
      Hero.hp -= machine.damage;
  
      console.log("[HERO_HP]", Hero.hp);
      console.log("[MACHINE_HP]", machine.hp);
  
    }
  }