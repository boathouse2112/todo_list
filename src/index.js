import { v4 as uuidv4 } from 'uuid';

const todos = [];
const lists = [];

const createTodo = function (
  title,
  note = '',
  dueDate = null, // Date?
  priority = null, // Int? [0, ∞)
  complete = false // Bool
) {
  const id = uuidv4();

  // Default to maximum existing priority + 1
  let finalPriority = priority;
  if (priority == null) {
    const maxPriority = Math.max(...todos.map((t) => t.priority));
    // If there are no todos, priority := 0
    if (maxPriority === Number.NEGATIVE_INFINITY) {
      finalPriority = 0;
    } else {
      finalPriority = maxPriority + 1;
    }
  }

  return { id, title, note, dueDate, priority: finalPriority, complete };
};

const createList = function (name) {
  return {
    name,
    todos: [], // [id]
  };
};

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

export { createTodo, createList };
