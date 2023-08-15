// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add event listener to the "Add" button
addButton.addEventListener('click', () => {
  // Get the value from the input field
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    // Create a new todo item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
              <span>${todoText}</span>
              <button class="delete-button">Delete</button>
            `;

    // Add event listener to the "Delete" button
    const deleteButton = todoItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      todoItem.remove();
    });
    // Append the new todo item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = '';
  }
});