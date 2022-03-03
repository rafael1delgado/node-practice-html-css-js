/*
  pasar el objeto auto y el objeto deportivo a clases, donde el 
  objecto deportivo herede del objeto auto
*/

let auto = {
   nombre: "",
   modelo: "",
   origen: "" 
};

let deportivo = {
   motor: "" 
};

class Auto {
   constructor(nombre, modelo, origen) {
      this.nombre = nombre;
      this.modelo = modelo;
      this.origen = origen;
   }
}

class Deportivo extends Auto {
   constructor(nombre, modelo, origen, motor) {
      super(nombre, modelo, origen);

      this.motor = motor;
   }

   getMarcaModelo() {
      return `${this.nombre} ${this.modelo}`;
   }
}

let ferrari = new Deportivo('ferrari', 'f8', 'ginebra', '720 cv');

console.log(ferrari.getMarcaModelo().toUpperCase());
