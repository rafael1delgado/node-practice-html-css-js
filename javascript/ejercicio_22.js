/*
  crear una función para pasar a mayúscula / upper, 
  las primeras letras vocales que encuentres en el string, 
  solo la primera si por ejemplo la letra a se repite 3 veces
  en el string solo la primera letra a debe estar en mayúsculas 
  las otras no.

"hOlA mundo dEsde javascrIpt"
*/

let str = '';
let vocales = ['a', 'e', 'i', 'o', 'u'];

str = 'hola mundo desde javascript';
// mal
// hOlA mundo dEsde javascrIpt

str = 'hola mundo desde javascript'; 
// Bien
// HOlA mUndo desde javascript 

str = 'esto es una frase';
// Bien
// EstO es Una frase

function pasarMayuscula(str){
  let vocalesEncontradas = [false, false, false, false, false];
  let stringArray = [...str];
  let contadorVocales = 0;

  let stringTransformado = stringArray.map((letra) => {
    if (esVocal(letra) && contadorVocales < 3) {
      if (vocalesEncontradas[posicionVocal(letra)] === false) {
        vocalesEncontradas[posicionVocal(letra)] = true;
        contadorVocales++;
        return letra.toUpperCase();
      }
    }
    return letra;
  });

  console.log(stringTransformado.join(''));
}

function esVocal(letra) {
  let encontrado = vocales.find(vocal => vocal === letra);
  return encontrado ? true : false;
}

function posicionVocal(letra) {
  return vocales.findIndex(vocal => vocal === letra);
}

pasarMayuscula(str);
