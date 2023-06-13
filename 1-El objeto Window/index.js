// Función que se ejecuta cuando la ventana se ha cargado completamente
window.onload = function () {
  console.log("¡La ventana se ha cargado completamente!");
};

// Función para cambiar las características del párrafo
function changeParagraph() {
  var paragraph = document.getElementById("myParagraph");
  paragraph.style.color = "red";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontWeight = "bold";
}
