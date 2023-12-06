/* JavaScript */
/* Declarar una variable - LET o CONST */
let nombrePersona = "Andres Perlo"; /* -> STRING o cadena de carecteres */
let edadPersona = 30; /* -> Number o numerico */
let sexoPersonaMasculino = true; /* Booleano - true o false */
let arrayDatosPersona = [
  "domicilio",
  "localidad",
  "pais",
  0,
  true,
  [],
]; /* Array o Arreglos  - tiene elementos*/
let objetoPersona = {
  /* Propiedades */
  nombre: "" /* clave: valor */,
  apellido: "",
  dni: "",
};

let num1 = 10;
let num2 = 15;
console.log(nombrePersona.length);
console.log(nombrePersona.toLowerCase());
console.log(nombrePersona.toUpperCase());

console.log(Math.max(num1, num2));
console.log(Math.min(num1, num2));

/*       let numero1 = prompt("Ingrese un numero");
      let numero2 = prompt("Ingrese otro numero");
      console.log(typeof numero1);
      console.log(typeof numero2);
      console.log(Number(numero1) + Number(numero2)); */
let numeroAleatorio = Math.random() * 50;
console.log(numeroAleatorio);
console.log(Math.ceil(numeroAleatorio));
console.log(Math.floor(numeroAleatorio));
console.log(Math.round(numeroAleatorio));
