import { v4 as uuidv4 } from 'uuid';

const todos = [];

const createTodo = function (
  title,
  notes = '',
  dueDate = null, // Date?
  priority = null // Int?
) {
  const id = uuidv4;

  // Default to maximum existing priority + 1
  let finalPriority = priority;
  if (priority == null) {
    const maxPriority = Math.max(...todos.map((t) => t.priority));
    finalPriority = maxPriority + 1;
  }

  return { id, title, notes, dueDate, priority: finalPriority };
};

const createList = function (name) {
  return {
    name,
    todos: [], // [id]
  };
};

export { createTodo, createList };
