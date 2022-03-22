/* eslint-disable no-unused-vars */
const { createTodo } = require('./index');

describe('create todo', () => {
  test('id is 36 characters long', () => {
    const todo = createTodo('Example Title');
    expect(todo.id).toHaveLength(36);
  });

  test('title is unchanged', () => {
    const todo = createTodo('Example Title');
    expect(todo.title).toBe('Example Title');
  });

  test('notes are unchanged', () => {
    const noNotes = createTodo('title');
    const notes = createTodo('title', 'A note');
    expect(noNotes.note).toBe('');
    expect(notes.note).toBe('A note');
  });

  test('if there are no other todos, non-null priority is set correctly', () => {
    const todo = createTodo('title', null, null, 20);
    expect(todo.priority).toBe(20);
  });

  test('if there are no other todos, null priority is set to 0', () => {
    const todo = createTodo('title');
    expect(todo.priority).toBe(0);
  });

  test('if there are other todos, non-null priority is set correctly', () => {
    const priority0 = createTodo('title');
    const priority20 = createTodo('title', null, null, 20);
    expect(priority20.priority).toBe(20);
  });

  test('two of the same priority can coexist', () => {
    const priority0 = createTodo('title');
    const samePriority = createTodo('title', null, null, 0);
    expect(samePriority.priority).toBe(0);
  });

  test('if there are other todos, null priority is set to the maximum plus 1', () => {
    const priority0 = createTodo('title');
    const priority1 = createTodo('title');
    const priority2 = createTodo('title');
    expect(priority0.priority).toBe(0);
    expect(priority0.priority).toBe(0);
    expect(priority0.priority).toBe(0);
  });
});
