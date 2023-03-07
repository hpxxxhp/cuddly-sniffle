class Person {

    constructor(name) {
        this.name = name
    }

    name = "Joe";
}

const user = new Person();

console.log(user instanceof Object);

class Hero {

    constructor (name) {
        this.name = name
    }

    constructor (login) {
        this.login = login
    }



}

// class Hero  -> name = ... , login = ... , password = ... , signUp() => "Signed up" 

class Hero {
    constructor(name, login, password) {
      this.name = name;
      this.login = login;
      this.password = password;
    }
  
    signUp() {
      return "Signed up";
    }
  }

  class Wizard extends Hero {
    constructor(name, login, password) {
      super(name, login, password);
    }
  
    attack() {
      console.log("There was an attack!");
    }
  }


