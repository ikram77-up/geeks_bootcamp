import TodoList from "./todo.js";
const todoList = new TodoList();
todoList.addTask("Buy groceries");
todoList.addTask("Clean the house");
todoList.addTask("Go for a walk");
todoList.markComplete(0);
todoList.markComplete(2);
console.log(todoList.allListTasks());