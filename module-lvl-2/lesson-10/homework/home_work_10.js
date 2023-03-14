class User {
  ID_BY_DEFAULT = Math.random().toString().slice(2, 8);
  WALLET_BY_DEFAULR = 0; 

  get #getName () {
    return `name is ${this.name}`
  }

  getDAta () {
    return this.#getName ;
  }

  constructor (options) {
    const {email, name, password, id, wallets} = options;

    if (!password || !email) throw Error("u have to fill the fildes by email and password");

    this.email = email; 
    this.name = name; 
    this.password = password; 
    this.id = id ? id : this.ID_BY_DEFAULT ;
    this.wallets = wallets ? wallets : this.WALLET_BY_DEFAULR;
    this.data = [this.name];

    console.log(this.getDAta);

  }

  getData () {
    return [this.email, this.password];
  }

  get getEmail () {
   return this.email;
  }
}

const user = new User ({
  email : 'k@.ua',
  password : "12"
});

const userEmail = user.getEmail
console.log("[user email]", userEmail);