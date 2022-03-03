/*
 crear una función donde puedas cambiar el valor 
 de las letras impares por 1 debes omitir los espacios en blanco
*/


let str = "hola mundo desde javascript"; 

function imparesAUno(str){
  let stringArray = [...str];

  let stringTransformado = stringArray.map((letra, index) => {
    if (letra != ' ') {
      if (index % 2 != 0) {
        return '1';
      }
    }
    return letra;
  });

  return stringTransformado.join('');
}

str = imparesAUno(str);
console.log(str);