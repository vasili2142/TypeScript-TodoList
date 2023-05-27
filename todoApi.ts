// Import Modules
import Todo from './todo';
import Todos from './todos';

export const viewList = (todos: Todos) => {
  // Outputs todos for a variable of type Todos
  console.log('Todos: ', todos);
};
export const addTodo = (todo: Todo, currentTodoList: Todos) => {
  // Pushes a new todo into the currentTodoList parameter
  currentTodoList.todos.push(todo);
};

export const editTodo = (selectTodo: Todo, property: keyof Todo, newValue: any
) => {
  // Need 3 parameters
  // First parameter should reference todo being edited
  // Second paramter should target a property of the first parameter
  // Third parameter will be the new value being returned

  // return (selectTodo[property] = newValue);
};
export const deleteTodo = (todosList: Todos, { id }: Todo) => {
  // 2 parameters
  // one to reference the todo list
  // another to reference the todo task to be deleted

  for (let i = 0; i < todosList.todos.length; i++) {
    console.log(todosList.todos[i]);

    if (todosList.todos[i].id === id) {
      todosList.todos.splice(todosList.todos[id], 1);
    }
  }

  /* Things tried
  // todosList.todos.splice(
  //   todosList.todos.findIndex(({ id }) => id === index),
  //   1
  // );

  // todosList.todos.splice(todosList.todos.keys(index), 1);
 
  // return todosList;

  // todosList.todos.filter((element) => {
  //   element = todosList.todos[index];
  // });

  // return todosList;
  */
};
