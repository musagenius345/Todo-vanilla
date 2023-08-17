// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const modeBtn = document.querySelector('.mode');
const htmlElement = document.querySelector('html');
let currentTheme = htmlElement.getAttribute('data-theme')

function themeToggle() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
  htmlElement.setAttribute('data-theme', currentTheme);
}

function updateIcons(theme) {
  const moonIcon = theme === 'dark' ? 'none' : 'inline';
  const sunIcon = theme === 'light' ? 'none' : 'inline';

  const moonIconElement = document.querySelector('.fa-moon');
  const sunIconElement = document.querySelector('.fa-sun');

  moonIconElement.style.display = moonIcon;
  sunIconElement.style.display = sunIcon;
}


function handleButtons() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    // Create a new todo item
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
                <span class="todo-content">${todoText}</span>
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
  
}


// Add event listener to the "Add" button
addButton.addEventListener('click', handleButtons)
modeBtn.addEventListener('click', themeToggle);