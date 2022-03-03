/*
  consumir este endpoint /api/character de la 
  api de https://rickandmortyapi.com/api/character

  con axios y mostrar el recurso(es decir los datos)

   utilizar la libreria de axios: https://github.com/axios/axios 
*/

import axios from 'axios';

let url = 'https://rickandmortyapi.com/api/character';

async function getPersonajes() {
  try {
    const response = await axios.get(url);
    console.log(response.data.results);
  } catch (error) {
    console.error(error);
  }
}

getPersonajes();
