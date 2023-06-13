window.addEventListener('DOMContentLoaded', function() {
    // Paso 1: Acceder a los elementos relevantes del modelo
    var taskContainer = document.getElementById('taskContainer');
    var taskList = document.getElementById('taskList');
    var taskForm = document.getElementById('taskForm');
    var newTaskInput = document.getElementById('newTaskInput');
  
    // Paso 2: Crear evento de envío para el formulario
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Paso 3: Crear nueva tarea y agregarla a la lista
      var newTask = document.createElement('li');
      var taskText = document.createElement('span');
      taskText.textContent = newTaskInput.value;
      newTask.appendChild(taskText);
  
      var completeButton = document.createElement('button');
      completeButton.textContent = 'Completar';
      completeButton.classList.add('completeButton');
      newTask.appendChild(completeButton);
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('deleteButton');
      newTask.appendChild(deleteButton);
  
      taskList.appendChild(newTask);
  
      // Paso 4: Crear eventos de clic para los botones de completar y eliminar
      completeButton.addEventListener('click', function() {
        // Cambiar el estado de completado de la tarea
        taskText.classList.toggle('completed');
      });
  
      deleteButton.addEventListener('click', function() {
        // Eliminar la tarea
        taskList.removeChild(newTask);
      });
  
      // Limpiar el campo de entrada de texto
      newTaskInput.value = '';
    });
  
    // Paso 5: Crear evento de clic para la tarea 1
    var task1DeleteButton = document.querySelector('#taskList li:first-child .deleteButton');
    task1DeleteButton.addEventListener('click', function() {
      // Eliminar la tarea 1
      taskList.removeChild(taskList.firstElementChild);
    });
  });
  