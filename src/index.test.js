import { createTodo } from './index';

test('createTodo title is unchanged', () => {
  const todo = createTodo('exampleTitle');
  expect(todo.title).toBe('exampleTitle');
});
