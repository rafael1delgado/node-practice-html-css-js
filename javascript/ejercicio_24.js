/*
  buscar la palabra javascript y cambiarla por js

  "hola mundo desde js, porque js es un lenguaje dinamico"; 
*/


let str = "hola mundo desde javascript , porque javascript es un lenguaje dinamico"; 

function modificarJavascript(str){
  let stringArray = str.split(' ');

  let strTransformado = stringArray.map((palabra) => {
    if (palabra === 'javascript') {
      return 'js';
    }
    return palabra;
  });
  
  return strTransformado.join(' ');
}

str = modificarJavascript(str);

console.log(str);
