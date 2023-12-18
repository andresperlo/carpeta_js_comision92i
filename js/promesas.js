//Promesa - Resolve - then -> Cuando la promesa se cumple | Reject - catch -> Cuando la promesa no se cumple
// FETCH - URL - METODO (GET, POST, PUT, DELETE) - Cabecera - Cuerpo -

/* THEN / CATCH */
/* fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((personajes) => console.log(personajes.results))
  .catch((error) => console.log(error)); */

/* ASYNC / AWAIT */

const obtenerTodosLosPersonajes = async () => {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const personajes = await data.json();
    console.log(personajes.results); /* Array */
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnPersonaje = async (idPersonaje) => {
  try {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/${idPersonaje}`
    );
    const personaje = await data.json();
    console.log(personaje); /* Objeto */
  } catch (error) {
    console.log(error);
  }
};

/* DOM - Document object model */
