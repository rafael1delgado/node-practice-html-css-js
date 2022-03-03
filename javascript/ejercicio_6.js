/*
 Eliminar el primer y ultimo item de la lista 
 10 y 70 
*/ 

let arr = [10,20,30,40,50,60,70];

arr.splice(0, 1);
arr.splice(arr.length-1, 1);

console.log(arr);