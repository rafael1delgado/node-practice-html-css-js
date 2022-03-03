/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos
*/ 

let arr = [10,20,30,40,50,60,70];

// forEach
console.log('Foreach');

arr.forEach(element => {
  console.log(element);
});

// for
console.log('For');
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// while
console.log('While');
let i = 0;
while (i < arr.length) {
  const element = arr[i];
  console.log(element);
  i++;
}

// map
console.log('Map');
arr.map((ele) => {
  console.log(ele);
})