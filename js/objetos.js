const auto = {
  /* clave: valor */
  marca: "Fiat" /* Propiedad */,
  modelo: "cronos",
  precio: "20000000",
  puertas: "5",
  encender: () => {
    console.log("encendido");
  },
  mostrarMarca: () => {
    console.log(this.marca);
  },
};

/* obtener un valor del objeto */
console.log(auto.marca);
console.log(auto["marca"]);

/* agregar o editar una propiedad */
auto.anio = "2020";
console.log(auto);
auto.marca = "toyota";
console.log(auto);

/* eliminar */
delete auto.precio;
console.log(auto); /* for -> forEach - ForOf - ForIn */

/* recorrer el objeto */

for (const clave in auto) {
  if (clave !== "modelo") {
    console.log(auto[clave]);
  }
}

/* metodos en el objeto */
/* auto.encender(); */

/* Object */

/* const claves = Object.keys(auto);
console.log(claves);
claves.forEach((clave, i) => {
  console.log(auto[claves[i]]);
}); */

/* const baseDeDatos = [
  {
    id: 1,
    nombre: "Andres",
    apellido: "Perlo",
    dni: "12345678",
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Lopez",
    dni: "79879879",
  },
  {
    id: 3,
    nombre: "Felipe",
    apellido: "Gutierrez",
    dni: "54654656",
  },
]; */
