/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos,
  mostrar solo los elementos pares, para determinar un elemento par/even

  n % 2 == 0;

  el n"numero" debe ser igual a 0 al momento de dividir
*/ 

let arr = [10,20,30,40,50,60,70];

// forEach
console.log('Foreach');

arr.forEach((element, index) => {
  if(index % 2 === 0) {
    console.log(element);
  }
});

// for
console.log('For');
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(index % 2 === 0) {
    console.log(element);
  }
}

// while
console.log('While');
let i = 0;
while (i < arr.length) {
  const element = arr[i];
  if(i % 2 === 0) {
    console.log(element);
  }
  i++;
}

// map
console.log('Map');
arr.map((ele, index) => {
  if(index % 2 === 0) {
    console.log(ele);
  }
})
