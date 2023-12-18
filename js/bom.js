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

const cambioDePagina = () => {
  setTimeout(() => {
    location.href = "https://google.com.ar";
  }, 2000);
};

const funcionReload = () => {
  location.reload();
};

const mostrarNombre = () => {
  const idParams = location.search.split("=")[1];
  const filtrarNombre = personas.filter(
    (persona) => persona.id === Number(idParams)
  );
  console.log(filtrarNombre);
};

/* setInterval(() => {
  document.write("HOla setInterval");
}, 2000); */
