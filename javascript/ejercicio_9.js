/*
  Iterar el array mediante los cuatros diferentes loops: 
  for, while, foreach, map  

  es decir emplear la iteracción con cada 1 de ellos 
*/ 



let users = [
  {
    id:1000,
    name:"max",
    age:30,
    country:"argentina"   
  },
  {
    id:1001,
    name:"charlie",
    age:20,
    country:"brasil"   
  },
  {
    id:1002,
    name:"maria",
    age:18,
    country:"colombia"   
  },
  {
    id:1004,
    name:"laura",
    age:30,
    country:"ecuador"   
  },
];

// forEach
console.log('Foreach');
users.forEach(element => {
  console.log(element.id, element.name, element.age, element.country);
});

// for
console.log('For');
for (let index = 0; index < users.length; index++) {
  const element = users[index];
  console.log(element.id, element.name, element.age, element.country);
}

// while
console.log('While');
let i = 0;
while (i < users.length) {
  const element = users[i];
  console.log(element.id, element.name, element.age, element.country);
  i++;
}

// map
console.log('Map');
users.map((element) => {
  console.log(element.id, element.name, element.age, element.country);
})