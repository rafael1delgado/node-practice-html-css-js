/*
  Agregar al final del array "arr" los números de los items 
  del array "data"

  1 hacerlo de 2 formas 1 mediante un loop de tú gusto sea: for, while
  2 emplear el spread operator

  [10,20,30,40,50,60,70,80,90,100];

  NOTA: https://anamartinezaguilar.medium.com/spread-operator-1e6667da2830
*/ 


let arr = [10,20,30,40,50,60,70];

let data = [80, 90, 100];

// forma 1 

let i = 0;
let arrayNew = [...arr];
for (let index = 0; index < data.length; index++) {
  arrayNew.push(data[index]);
}

console.log(arrayNew);


// forma 2

let arrayNuevo = [...arr, ...data];
console.log(arrayNuevo);
