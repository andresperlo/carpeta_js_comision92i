const nombresAlumnos = ["Facundo", "Santiago", "Felipe", "Bernardo"];

console.log(nombresAlumnos);
/* obtengo un elemento */
console.log(nombresAlumnos[1]);
/* agregar un elemento al array */ /* metodo = funcion */
nombresAlumnos.unshift("Pablo"); /* al principio */
nombresAlumnos.push("Agustina"); /* al final */
nombresAlumnos.splice(2, 0, "Gerardo"); /* en cualquier indice */

/* eliminar */
console.log(nombresAlumnos);
nombresAlumnos.splice(2, 1); /* en cualquier indice */
nombresAlumnos.pop(); /* al final */
console.log(nombresAlumnos);

/* posicion */
/* const userName = prompt("Ingrese el nombre a buscar");
const positionName = nombresAlumnos.indexOf(userName);

if (positionName > 0) {
  console.log(`El nombre encontrado es: ${nombresAlumnos[positionName]}`);
} else {
  console.log("El nombre no esta en el Array");
} */

/* Filtrar un dato ->  */

/* const filterName = nombresAlumnos.filter((nombre) => nombre === "Felipe");
console.log(filterName);
console.log(nombresAlumnos); */

/* MAP */

/* const arrayNuevoNombresUsuario = nombresAlumnos.map((nombreAlumno, indice) => {
  return `${indice}- ${nombreAlumno}`;
});

console.log(arrayNuevoNombresUsuario); */

/* ordenar un array */
/* const arrayNumeros = [1, 2, 8, 9, 56, 55];
console.log(nombresAlumnos.sort());
console.log(arrayNumeros.sort((a, b) => a - b)); */

/* invertir un array */
//console.log(nombresAlumnos.reverse());
