/*

debes transformar las letras "a" en "@"

hol@ mundo desde j@v@script
*/

let str = "hola mundo desde javascript"; 
let arrayStr = [...str];

let stringTransformado = arrayStr.map(letra => {
    if (letra === 'a') {
        return '@';
    }
    return letra;
});

str = stringTransformado.join('');

console.log(str);
