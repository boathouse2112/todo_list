import { v4 as uuidv4 } from 'uuid';

const todos = [];

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

export { todos, createTodo, createList };
