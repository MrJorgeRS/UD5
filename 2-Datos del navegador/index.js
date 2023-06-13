// Obtener la información del navegador
var browserInfo = [
    "Nombre del navegador: " + navigator.userAgent,
    "Versión del navegador: " + navigator.appVersion
  ];

  // Mostrar la información del navegador en la consola
  console.log("Información del navegador:");
  console.log(browserInfo.join("\n"));

  // Mostrar el tamaño de la ventana del navegador en la consola
  function getWindowSize() {
    console.log("Tamaño de la ventana del navegador:");
    console.log("Ancho: " + window.innerWidth + "px, Alto: " + window.innerHeight + "px");
  }

  // Actualizar el tamaño de la ventana del navegador cuando se redimensiona
  window.addEventListener("resize", getWindowSize);
  getWindowSize();

  // Función para cambiar el color de fondo de la página
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  // Generar un color aleatorio en formato hexadecimal
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }