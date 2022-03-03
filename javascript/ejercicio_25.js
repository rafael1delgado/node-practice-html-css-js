/*
  generar numeros y letras aleatorias, con la siguiente formula:
  x = Math.random() * (max - min) + min;
  
  donde el punto a crear es un captcha de 7 letras

  ejemplo => dcdwf5t // se debe generar de forma aleatoria/random
  
  adicional va sa tener 2 funciones 

  1 generarCaptcha donde creas las 7 letras + numeros aleatorios
  2 validarCaptcha en la cual recibe un string como parametros, 
    en donde debes validar si el string ingresado, es igual al captcha generado
*/
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generarCaptcha() {
  let captcha = '';
  let indexRandom = 0;
  for (let index = 0; index < 7; index++) {
    indexRandom = obtenerRandom(0, abc.length - 1);
    captcha = captcha + abc[indexRandom];
  }

  for (let index = 0; index < 3; index++) {
    indexRandom = obtenerRandom(0, n.length - 1);
    captcha = captcha + n[indexRandom];
  }
  return captcha;
}

function validarCaptcha(str){
  return str === generarCaptcha();
}

function obtenerRandom(min, max) {
  let index = Math.random() * (max - min) + min;
  index = Math.round(index);
  return index;
}

let captchaGenerado = generarCaptcha();
let bandera = validarCaptcha('asasaasa12');

console.log(captchaGenerado);
console.log(bandera);
