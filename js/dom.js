/* Obtener un elemento del HTML */ /* D - Document - HMTL - OM */
/* ID - Clase - Etiqueta */
const textoH2 = document.getElementById("idH2");
const textoParrafo = document.getElementsByClassName("clase-parrafo");
const textoEtiqueta = document.getElementsByTagName("h2");

/* const textoH2Q = document.querySelector('')
const texto = document.querySelectorAll('') */

/* console.log(textoH2); */
/* console.log(textoParrafo); */
/* console.log(textoEtiqueta); */

/* setTimeout(() => {
  textoH2.innerText = "Hola Comision 92i Desde JS";
}, 2000); */

/* Crear Etiqueta en HTML desde JS */

const div = document.createElement("div");
div.id = "idDivJS";
div.className = "clase-prueba";

document.body.appendChild(div);

const divJS = document.getElementById("idDivJS");

const p = document.createElement("p");
p.innerText = "Hola Soy un parrafo desde JS";
divJS.appendChild(p);

const ocultarDiv = () => {
  divJS.classList.add("d-none");
};

const mostrarDiv = () => {
  divJS.classList.remove("d-none");
};
