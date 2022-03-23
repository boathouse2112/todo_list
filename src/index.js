import { todos, createTodo, createList } from './todo';

const lists = [];

const handleCheckboxChange = function (event) {
  const { checked } = event.target;
  const { id: todoId } = event.target.parentElement;
  const todo = todos.find((t) => t.id === todoId);

  todo.complete = checked;
};

const createTodoElem = function (todo) {
  const todoElem = document.createElement('div');
  todoElem.id = todo.id;
  todoElem.classList.add('todo');

  const todoCheckbox = document.createElement('input');
  Object.assign(todoCheckbox, {
    type: 'checkbox',
    name: 'todocomplete',
    ariaLabel: 'Complete Todo',
  });
  todoCheckbox.addEventListener('change', handleCheckboxChange);

  const todoTitle = document.createElement('h3');
  todoTitle.textContent = todo.title;

  const todoNote = document.createElement('p');
  todoNote.textContent = todo.note;

  // Wire up todoElem
  todoElem.appendChild(todoCheckbox);
  todoElem.appendChild(todoTitle);
  todoElem.appendChild(todoNote);

  return todoElem;
};

const renderTodos = function () {
  const todosElem = document.getElementById('todos');

  // Clear existing todos
  while (todosElem.firstChild) {
    todosElem.removeChild(todosElem.lastChild);
  }

  todos.forEach((todo) => {
    const todoElem = createTodoElem(todo);
    todosElem.append(todoElem);
  });
};

const main = function () {
  lists.push(createList('default'));
  todos.push(createTodo('Example Todo'));
  renderTodos();
};

main();
