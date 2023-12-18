const productos = [
  {
    id: 1,
    nombre: "Coca-cola",
    precio: "1500",
    codigo: "465a4d65",
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: "2000",
    codigo: "798a7sd98",
  },
];

localStorage.setItem("productos", JSON.stringify(productos));

const obtenerProductos = JSON.parse(localStorage.getItem("productos"));
console.log(obtenerProductos);
