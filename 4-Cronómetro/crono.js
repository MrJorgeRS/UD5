var timerInterval; // Variable para almacenar el intervalo del temporizador
var time = 0; // Variable para almacenar el tiempo transcurrido

// Función para actualizar el cronómetro
function updateTimer() {
  var timerElement = document.getElementById("timer");

  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = time % 60;

  // Formatear los componentes del tiempo como cadenas de dos dígitos
  var formattedTime =
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);

  timerElement.textContent = formattedTime;
}

// Función para iniciar el cronómetro
function startTimer() {
  // Evitar iniciar el cronómetro si ya está en marcha
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      time++;
      updateTimer();
    }, 1000);
  }
}

// Función para parar el cronómetro
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 0;
  updateTimer();
}

// Función para pausar o reanudar el cronómetro
function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  } else {
    startTimer();
  }
}

// Función para iniciar el temporizador de cuenta atrás
function startCountdown() {
  // Evitar iniciar el temporizador si ya está en marcha
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        stopTimer();
      }
    }, 1000);
  }
}