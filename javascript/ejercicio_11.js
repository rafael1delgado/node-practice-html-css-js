/*
  Utilizando el ciclo for crear un cubo 

 ******* 
 *******
 *******
 *******

 NOTA evitar esta practica, porque se desea hacer esto de forma 
 inteligente mediante ciclos no de forma manual:

 1_
 console.log(´
 ******* 
 *******
 *******
 *******
 ´)

 2_
 console.log("*******"); 
 console.log("*******"); 
 console.log("*******"); 
 console.log("*******");

*/

let cantidadPuntos = 7;
let cantidadLineas = 4;
let caracteres = [];

for(let j = 0; j < cantidadLineas; j++) {
  caracteres = [];
  for(let i = 0; i < cantidadPuntos; i++) {
    caracteres.push('*');
  } 
  console.log(caracteres.join(''));
}
