export class TodoList {
    constructor() {
        this.todos = [];
    }
    addTask(task) {
        this.todos.push({ task, completed: false });
    }
    markComplete(taskIndex) {
        for (let i = 0; i < this.todos.length; i++) {
            if (i === taskIndex) {
                this.todos[i].completed = true;
            }
        }

    }
    allListTasks() {
        return this.todos;

    }
}
export default TodoList;