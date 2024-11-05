document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item (li) element
    const newTask = document.createElement('li');

    // Create a checkbox for toggling completion
    const toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    toggleButton.className = 'toggle';

    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';

    // Add event listener to toggle the task's completed status
    toggleButton.addEventListener('change', function () {
        if (toggleButton.checked) {
            document.getElementById('completedTasks').appendChild(newTask);
            newTask.classList.add('completed');
        } else {
            document.getElementById('incompleteTasks').appendChild(newTask);
            newTask.classList.remove('completed');
        }
    });

    // Add event listener to delete the task when the delete button is clicked
    deleteButton.addEventListener('click', function () {
        newTask.remove();
    });

    // Append the toggle button, task text span, and delete button to the list item
    newTask.appendChild(toggleButton);
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteButton);

    // Append the list item to the incomplete task list
    document.getElementById('incompleteTasks').appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
});
