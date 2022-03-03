/*
  hacer una función, que busque un número dentro del array
  y retornarlo, en caso contrario, retornar null sino lo encuentra

  ejemplo: let r = buscarNumero(n);
*/

let arr = [10,20,30,40,50,60,70];


function buscarNumero(number) {
  let numberFound = arr.find((e) => e === number );
  if(numberFound) {
    return numberFound;
  }
  return null;
}

let r = buscarNumero(1);

console.log(r);