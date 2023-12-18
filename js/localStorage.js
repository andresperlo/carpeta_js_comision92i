/* LocalStorage  - yo lo tengo que borrar
 SessionStorage - cuando cierro la pestaña o el navegador */
/* 
setItem - crear o editar
getItem - traer
removeItem - eliminar
*/
const nombre = "Andres";

localStorage.setItem("nombre", nombre);

const nombreUsuario = localStorage.getItem("nombre");
console.log(nombreUsuario);

const eliminarUsuarioLocalStorage = () => {
  localStorage.removeItem("nombre");
};
