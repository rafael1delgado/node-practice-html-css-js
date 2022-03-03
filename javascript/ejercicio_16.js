/*
  agregar 2 propiedades al siguiente objeto auto con el uso 
  de prototipos

  1 la propiedad motor:""
  2 la propiedad origen:"" 

  NOTA: en el caso de objeto literal usar: __proto__
*/

let auto = {
  nombre: "ferrari",
  modelo: "f8"
};
 
auto.__proto__.motor = '720 cv';
auto.__proto__.origen = 'ginebra';

console.log(auto);
console.log(auto.__proto__);
