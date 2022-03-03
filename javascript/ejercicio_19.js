/*
  se tiene la api de  https://rickandmortyapi.com/

  crear una funcion llamada buscarPersonaje() 
  donde retorne los datos de dicho personaje

  utilizar la libreria de axios: https://github.com/axios/axios 

  let nombrePersonajes = [
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith',
    'Abadango Cluster Princess',
    'Abradolf Lincler',
    'Adjudicator Rick',
    'Agency Director',
    'Alan Rails',
    'Albert Einstein',
    'Alexander',
    'Alien Googah',
    'Alien Morty',
    'Alien Rick',
    'Amish Cyborg',
    'Annie',
    'Antenna Morty',
    'Antenna Rick',
    'Ants in my Eyes Johnson'
  ];
*/

import axios from 'axios';

let url = 'https://rickandmortyapi.com/api/character/';

async function buscarPersonaje(nombrePersonaje) {
  try {
    let personajes = [];

    const response = await axios.get(url);
    personajes =  response.data.results;

    let personajeEncontrado = personajes.find((personaje) => {
      return personaje.name.toUpperCase() === nombrePersonaje.toUpperCase()
    });

    if(personajeEncontrado) {
      console.log("🟩Personajes Encontrado🟩");
      console.log(personajeEncontrado);
    } else {
      console.log("🟥Personaje NO Encontrado🟥");
    }

  } catch (error) {
    return console.log(error);
  }
}

buscarPersonaje('Alien Rick');
