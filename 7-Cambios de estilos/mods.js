window.onload = function() {
  var box = document.getElementById("box");
  var redButton = document.getElementById("redButton");
  var blueButton = document.getElementById("blueButton");
  var greenButton = document.getElementById("greenButton");
  var largeTextButton = document.getElementById("largeTextButton");
  var smallTextButton = document.getElementById("smallTextButton");
  var boldBorderButton = document.getElementById("boldBorderButton");
  var dashedBorderButton = document.getElementById("dashedBorderButton");
  var dottedBorderButton = document.getElementById("dottedBorderButton");

  // Funciones para cambiar el estilo del div
  function changeBackgroundColor(color) {
    box.style.backgroundColor = color;
  }

  function changeFontSize(size) {
    box.style.fontSize = size;
  }

  function changeBorderStyle(style) {
    box.style.borderStyle = style;
  }

  // Asignar eventos de clic a los botones de color
  redButton.addEventListener("click", function() {
    changeBackgroundColor("red");
  });

  blueButton.addEventListener("click", function() {
    changeBackgroundColor("blue");
  });

  greenButton.addEventListener("click", function() {
    changeBackgroundColor("green");
  });

  // Asignar eventos de clic a los botones de tamaño de texto
  largeTextButton.addEventListener("click", function() {
    changeFontSize("24px");
  });

  smallTextButton.addEventListener("click", function() {
    changeFontSize("12px");
  });

  // Asignar eventos de clic a los botones de estilo de borde
  boldBorderButton.addEventListener("click", function() {
    changeBorderStyle("solid");
  });

  dashedBorderButton.addEventListener("click", function() {
    changeBorderStyle("dashed");
  });

  dottedBorderButton.addEventListener("click", function() {
    changeBorderStyle("dotted");
  });
};
