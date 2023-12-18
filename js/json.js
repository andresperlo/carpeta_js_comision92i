/* JSON - JS - JavaScript - O - Objeto - N - Notacion */
const objeto = {
  nombre: "Andres",
};

const array = ["uno"];
/* parse - convierte una cadena de texto en un objeto
   stringify - convierte un objeto en una cadena de texto*/
const convertirUnObjetoAstring = JSON.stringify(objeto);
console.log(objeto);
console.log(convertirUnObjetoAstring);

const stringAObjeto = JSON.parse(convertirUnObjetoAstring);
console.log(stringAObjeto);

console.log(array);
const arrayAString = JSON.stringify(array);
console.log(arrayAString);

const stringArray = JSON.parse(arrayAString);
console.log(stringArray);
