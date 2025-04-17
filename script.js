const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task when 'Enter' key is pressed
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';

    // Delete task when button is clicked
    delBtn.onclick = function() {
      taskList.removeChild(li);
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
