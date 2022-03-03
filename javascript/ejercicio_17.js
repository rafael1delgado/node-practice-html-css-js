/*
  agregar 2 propiedades al siguiente objeto auto con el uso 
  de prototipos

  1 la propiedad motor:""
  2 la función mostrarOrigen()
*/

let auto = {
    nombre: 'ferrari',
    modelo: 'f8',
    origen: 'ginebra',

    __proto__: {
      motor: '720cv',
      mostrarOrigen() {
        return auto.origen; // duda
      }
  }
};

console.log(auto);
console.log(auto.__proto__.mostrarOrigen());

 