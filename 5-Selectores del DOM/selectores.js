// Array con opciones para el primer selector
var options = {
    frutas: ["Manzana", "Plátano", "Naranja"],
    colores: ["Rojo", "Verde", "Azul"]
  };

  // Función para crear el segundo selector dinámicamente
  function createSecondSelector() {
    var firstSelector = document.getElementById("firstSelector");
    var secondSelector = document.getElementById("secondSelector");
    var selectedOption = firstSelector.value;

    // Limpiar opciones existentes en el segundo selector
    secondSelector.innerHTML = "";

    if (selectedOption !== "") {
      // Obtener opciones basadas en la opción seleccionada
      var optionsArray = options[selectedOption];

      // Crear opciones para el segundo selector
      optionsArray.forEach(function(option) {
        var newOption = document.createElement("option");
        newOption.value = option;
        newOption.textContent = option;
        secondSelector.appendChild(newOption);
      });
    }
  }