/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos,
  mostrar solo los elementos impares, para determinar un elemento impar/odd

  n % 2 == 1;

  el n"numero" debe ser igual a 1 al momento de dividir
*/ 

let arr = [10,20,30,40,50,60,70];

// forEach
console.log('Foreach');

arr.forEach((element, index) => {
  if(index % 2 === 1) {
    console.log(element);
  }
});

// for
console.log('For');
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(index % 2 === 1) {
    console.log(element);
  }
}

// while
console.log('While');
let i = 0;
while (i < arr.length) {
  const element = arr[i];
  if(i % 2 === 1) {
    console.log(element);
  }
  i++;
}

// map
console.log('Map');
arr.map((ele, index) => {
  if(index % 2 === 1) {
    console.log(ele);
  }
})
