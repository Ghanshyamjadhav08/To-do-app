const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event listener for the "Add Task" button click
addTask.addEventListener('click', function () {
  // Check if input field is empty
  if (inputTask.value.trim() === '') {
    alert('Please enter a task!');
    return; // Prevent further code execution if input is empty
  }

  // Create a new task element
  const task = document.createElement('div');
  task.classList.add('task');

  // Create the task content
  const taskContent = document.createElement('li');
  taskContent.innerText = inputTask.value;
  task.appendChild(taskContent);

  // Create the "check" button
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add('checkTask');
  task.appendChild(checkButton);

  // Create the "delete" button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add('deleteTask');
  task.appendChild(deleteButton);

  // Add the new task to the task container
  taskContainer.appendChild(task);

  // Clear the input field
  inputTask.value = '';
});

// Event listener for the "check" button click (mark task as complete)
taskContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkTask')) {
    event.target.parentElement.classList.toggle('completed'); // Toggle "completed" class for styling
  }
});

// Event listener for the "delete" button click (remove task)
taskContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('deleteTask')) {
    if (confirm('Are you sure you want to delete this task?')) {
      event.target.parentElement.remove(); // Remove the task element
    }
  }
});
