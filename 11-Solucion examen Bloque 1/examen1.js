// Pregunta 1a
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");

    if (nameInput.value === "" || emailInput.value === "") {
        alert("Por favor, completa todos los campos");
    } else {
        // Continuar con el envío del formulario o realizar otras acciones
    }
});

// Pregunta 1b
document.getElementById("name").addEventListener("input", function (event) {
    let input = event.target;
    if (input.value.length > 10) {
        alert("El nombre no puede exceder los 10 caracteres");
    }
});

// Pregunta 2a

var textElement = document.getElementById("text");
var originalText = textElement.textContent; // Guardar el texto original

document.getElementById("changeBtn").addEventListener("click", function() {
  textElement.textContent = "Nuevo texto";
  textElement.classList.add("highlight");
});

// Restaurar el texto original al cargar la página
window.addEventListener("load", function() {
  textElement.textContent = originalText;
  textElement.classList.remove("highlight");
});


// Pregunta 2b
document.getElementById("btn").addEventListener("click", function () {
    let clonedText = textElement.cloneNode(true);
    clonedText.textContent = "Nuevo texto";
    clonedText.classList.add("highlight");
    document.getElementById("myDiv").appendChild(clonedText);
});


// Pregunta 2c
function sortParagraphs() {
    let paragraphs = document.querySelectorAll("#myDiv2 p");
    let sortedParagraphs = Array.from(paragraphs).sort(function (a, b) {
      return a.textContent.localeCompare(b.textContent);
    });

    let parentElement = document.getElementById("myDiv2");
    sortedParagraphs.forEach(function (paragraph) {
      parentElement.appendChild(paragraph);
    });
  }

  document.getElementById("btnOrdenar").addEventListener("click", function () {
    sortParagraphs();
  });