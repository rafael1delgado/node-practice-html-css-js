/*
  Crear un triangulo mediante iteracciones con el ciclo for   

     *
    ***
   *****
  *******  

 NOTA evitar esta practica, porque se desea hacer esto de forma 
 inteligente mediante ciclos no de forma manual:

 1_ 
 console.log(`
     *
    ***
   *****
  *******  
 `);

 2_
  console.log("  *");
  console.log(" ***");
  console.log("*****");
  console.log("*******");  

*/ 

function imprimirTriangulo(cantidadLineas) {
  let caracteres = [];
  let cantidadPuntos = 0;
  let inicio = 0; 
  let fin = 0; 

  if(cantidadLineas % 2 != 0) {
    cantidadLineas++;
  } 

  cantidadPuntos = (cantidadLineas * 2) - 1;
  inicio = ((cantidadLineas * 2) / 2 ) - 1; 
  fin = ((cantidadLineas * 2) / 2 ) - 1; 

  for(let j = 0; j < cantidadLineas; j++) {
    caracteres = [];
    for(let i = 0; i < cantidadPuntos; i++) {
     if( i >= inicio && i <= fin  ) {
      caracteres.push('*');
     } else {
      caracteres.push(' ');
     }
    }
    inicio--;
    fin++; 
    console.log(caracteres.join(''));
  }
}

imprimirTriangulo(8)