/* CRUD
C - Create - Crear
R - Read - Leer
U - Update - Actualizar
D - Delete  - Eliminar - Logico - Fisico

- ABM 
A - Alta
B - Baja
M - Modificacion

*/

const productos = JSON.parse(localStorage.getItem("productos")) || [];

// C - Create - Crear / A - Alta
const crearProducto = () => {
  if (productos.length > 0) {
    const idProducto = productos[productos.length - 1].id + 1;
    productos.push({
      id: idProducto,
      nombre: "Pepsi",
      precio: "2500",
      codigo: "65a4sd5as",
      borrado: false,
    });
    localStorage.setItem("productos", JSON.stringify(productos));
  } else {
    productos.push({
      id: 1,
      nombre: "Coca-cola",
      precio: "1500",
      codigo: "465a4d65",
      borrado: false,
    });
    localStorage.setItem("productos", JSON.stringify(productos));
  }
};

//R - Read - Leer

const obtenerProducto = (idProd) => {
  const producto = productos.find((producto) => producto.id === idProd);

  if (!producto.borrado) {
    console.log(producto);
  } else {
    console.log("producto eliminado");
  }
};

//U - Update - Actualizar / M - Modificacion

const actualizarProducto = (idProd) => {
  const indiceProducto = productos.findIndex(
    (producto) => producto.id === idProd
  );

  productos[indiceProducto].nombre = "Torasso";
  localStorage.setItem("productos", JSON.stringify(productos));
};

//D - Delete  - Eliminar - Logico - Fisico / B - Baja
const borrarProductoFisico = (idProd) => {
  const productosNoBorrados = productos.filter(
    (producto) => producto.id !== idProd
  );
  localStorage.setItem("productos", JSON.stringify(productosNoBorrados));
};

const borrarProductoLogico = (idProd) => {
  const indiceProducto = productos.findIndex(
    (producto) => producto.id === idProd
  );

  productos[indiceProducto].borrado = true;
  localStorage.setItem("productos", JSON.stringify(productos));
};
