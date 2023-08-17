const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const modeBtn = document.querySelector('.mode');
const htmlElement = document.querySelector('html');
let currentTheme = htmlElement.getAttribute('data-theme');

const storedTheme = localStorage.getItem('toDoTheme');
if (storedTheme) {
  currentTheme = storedTheme;
  htmlElement.setAttribute('data-theme', currentTheme);
  updateIcons(currentTheme);
}

function themeToggle() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('toDoTheme', currentTheme);
  updateIcons(currentTheme);
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
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
      <div class="todo-content"><p>${todoText}</p></div>
      <button class="delete-button">Delete</button>
    `;
    const deleteButton = todoItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      todoItem.remove();
      localStorage.removeItem('todos');
    });
    todoList.appendChild(todoItem);
    localStorage.setItem('todos', todoList.innerHTML);
    todoInput.value = '';
  }
}

addButton.addEventListener('click', handleButtons);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleButtons();
  }
});
modeBtn.addEventListener('click', themeToggle);

// Restore todos from local storage on page load
const storedTodos = localStorage.getItem('todos');
if (storedTodos) {
  todoList.innerHTML = storedTodos;
}
