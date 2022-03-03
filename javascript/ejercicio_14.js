/*
  pasar este objeto user a clase y agregar una funcion llamada 
  show(), en donde retorne el nombre del user
*/


let user = {
   name:"max",
   email:"max@max.com",
   alias:"m5x"
};

class User {
  constructor(name, email, alias) {
    this.name = name;
    this.email = email;
    this.alias = alias;
  }

  show() {
    return this.name;
  }
}

let = user = new User('rafael', 'delgadorafael2011@gmail.com', 'rafael1delgado');

console.log(user.show());
