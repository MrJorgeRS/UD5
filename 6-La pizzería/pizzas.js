var pizzas = [
    { nombre: "Pizza Margarita", precio: 8.99 },
    { nombre: "Pizza Hawaiana", precio: 9.99 },
    { nombre: "Pizza Pepperoni", precio: 10.99 },
    { nombre: "Pizza Vegetariana", precio: 9.49 },
    // Agrega más pizzas si es necesario
  ];  

window.onload = function () {
  crearTablaPizzas();
};

function crearTablaPizzas() {
  var tabla = document.createElement("table");
  tabla.classList.add("tabla-pizzas");

  // Crea el encabezado de la tabla
  var encabezado = tabla.createTHead();
  var filaEncabezado = encabezado.insertRow();
  var celdaNombre = filaEncabezado.insertCell();
  celdaNombre.textContent = "Nombre";
  var celdaPrecio = filaEncabezado.insertCell();
  celdaPrecio.textContent = "Precio";

  // Crea las filas de la tabla con los datos de las pizzas
  var cuerpoTabla = tabla.createTBody();
  pizzas.forEach(function (pizza) {
    var fila = cuerpoTabla.insertRow();
    var celdaNombre = fila.insertCell();
    celdaNombre.textContent = pizza.nombre;
    var celdaPrecio = fila.insertCell();
    celdaPrecio.textContent = "$" + pizza.precio.toFixed(2);
  });

  // Agrega la tabla al elemento con el id "tabla-container"
  var tablaContainer = document.getElementById("tabla-container");
  tablaContainer.appendChild(tabla);
}
