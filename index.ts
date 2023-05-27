// Import stylesheets
import './style.css';

// Import Modules
import Todo from './todo';
import Todos from './todos';
import { userCredentials } from './userCredentials';
import { viewList, addTodo, editTodo, deleteTodo } from './todoApi';
import Person from './test';
import greet from './test';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Todo List</h1>`;

// create a script to print a list of the todos
// create this as a module to be imported here

// create a script to add a todo to the list
// after created, use the listTodos to print the list
// to the console

// First Todo List
const initialTodosList: Todos = {
  userId: 'Todo List 1',
  todos: [],
};

const testTodo: Todo = {
  id: 1,
  title: 'Todo 1',
  description: 'First Todo',
  dueDate: 2023,
  status: true,
  type: 'task',
};

const additionalTodo: Todo = {
  id: 2,
  title: 'Todo 2',
  description: 'Second Todo',
  dueDate: 2023,
  status: true,
  type: 'event',
};

const anotherTodo: Todo = {
  id: 3,
  title: 'Third Todo',
  dueDate: 2025,
  status: false,
  type: 'event',
};

// Adds things to initialTodosList
addTodo(testTodo, initialTodosList);
addTodo(additionalTodo, initialTodosList);
addTodo(anotherTodo, initialTodosList);

// Outputs all Todos to console
// viewList(initialTodosList);

// create a script to edit a todo in the list
// after created, use the editTodos to print the list
// to the console

// Edited Todos
// const updated = editTodo(testTodo, testTodo.dueDate, 2222);
// console.log(updated);

const test = editTodo(anotherTodo.id, anotherTodo);
console.log(test);

// create a script to delete a todo from the list
// after created, use the deleteTodos to print the list
// to the console

// console.log('Before delete: ', initialTodosList.todos);
// const deleted = deleteTodo(initialTodosList, 2);
// console.log('After delete: ', deleted);

// const todo = deleteTodo(initialTodosList.todos, 1);
// console.log(todo);

// const deleted = deleteTodo(initialTodosList, 0);
// console.log(deleted);

// every method/function needs to be constructed/created
// outside the index.ts
