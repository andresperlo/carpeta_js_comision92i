const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    domicilio: "Calle 123",
    profesion: "Ingeniero",
    email: "juan@example.com",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    domicilio: "Avenida 456",
    profesion: "Doctora",
    email: "maria@example.com",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    domicilio: "Plaza Principal",
    profesion: "Abogado",
    email: "carlos@example.com",
  },
  {
    id: 4,
    nombre: "Laura",
    apellido: "Martínez",
    domicilio: "Carrera 789",
    profesion: "Arquitecta",
    email: "laura@example.com",
  },
  {
    id: 5,
    nombre: "Pedro",
    apellido: "Rodríguez",
    domicilio: "Boulevard 012",
    profesion: "Profesor",
    email: "pedro@example.com",
  },
  {
    id: 6,
    nombre: "Ana",
    apellido: "Sánchez",
    domicilio: "Camino 345",
    profesion: "Diseñadora",
    email: "ana@example.com",
  },
  {
    id: 7,
    nombre: "Gabriel",
    apellido: "Fernández",
    domicilio: "Paseo 678",
    profesion: "Programador",
    email: "gabriel@example.com",
  },
  {
    id: 8,
    nombre: "Elena",
    apellido: "Ramírez",
    domicilio: "Sendero 901",
    profesion: "Enfermera",
    email: "elena@example.com",
  },
  {
    id: 9,
    nombre: "Miguel",
    apellido: "Hernández",
    domicilio: "Ruta 234",
    profesion: "Contador",
    email: "miguel@example.com",
  },
  {
    id: 10,
    nombre: "Isabel",
    apellido: "Díaz",
    domicilio: "Callejón 567",
    profesion: "Estudiante",
    email: "isabel@example.com",
  },
];

/* 
Tarea
Crear funciones que realicen las siguientes tareas
1- Mostrar una lista con los nombres completos en orden alfabetico
2- Crear tarjetas de presentacion con los datos de los usuarios
3- Agregar un usuario mas al final de la lista
4- Actualizar el nombre de un usuario
5- Eliminar un usuario en Particular
6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar
*/

//1- Mostrar una lista con los nombres completos en orden alfabetico
const nombreCompletosOrdenados = () => {
  const nombreYapellido = personas.map(
    (persona) => `${persona.apellido} ${persona.nombre}`
  );

  document.write(`<ol>`);
  nombreYapellido.sort().forEach((nombreCompleto) => {
    return document.write(`<li> ${nombreCompleto} </li> `);
  });
  document.write(`</ol>`);
};

//2- Crear tarjetas de presentacion con los datos de los usuarios
const tarjetaPresentacion = () => {
  for (let contador = 0; contador < personas.length; contador++) {
    let persona = personas[contador];

    document.write(`---Tarjeta de Presentacion-- <br>`);
    document.write(
      `nombre y apellido: ${persona.nombre} ${persona.apellido} <br>`
    );
    document.write(`email de contacto: ${persona.email} <br>`);
    document.write(`<br>`);
  }
};

//3- Agregar un usuario mas al final de la lista
const agregarNuevoUsuario = () => {
  const idUsuario = personas[personas.length - 1].id + 1;

  personas.push({
    id: idUsuario,
    nombre: "Andres",
    apellido: "Perlo",
    domicilio: "bajo el puente",
    profesion: "Profesor",
    email: "andres@example.com",
  });
  console.log(personas);
};

//4- Actualizar el nombre de un usuario
const actualizarNombre = (idUsuario) => {
  /*  const filtrarNombre = personas.filter((persona) => persona.id === idUsuario);
  filtrarNombre[0].nombre = "Juana"; */
  /*  const findrNombre = personas.find((persona) => persona.id === idUsuario); */
  const indiceElemento = personas.findIndex(
    (persona) => persona.id === idUsuario
  );

  personas[indiceElemento].nombre = "Pepe";
  console.log(personas);
};

//5- Eliminar un usuario en Particular
const borrarUsuario = (idUsuario) => {
  const filtrarUsuario = personas.filter((persona) => persona.id !== idUsuario);
  console.log(filtrarUsuario);
};

//6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar
const buscarApellido = (termino) => {
  const filtrarApellido = personas.filter((persona) =>
    persona.apellido.toLowerCase().includes(termino.toLowerCase())
  );
  console.log(filtrarApellido);
};
