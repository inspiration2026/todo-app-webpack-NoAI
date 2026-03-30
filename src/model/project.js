import { Todo } from "./todo.js";

export class Project {
    constructor (projectName) {
        this.projectName = projectName;
        this.id = Math.random();
        this.todos = [];

    }

    addTodo (title, description, dueDate, priority) {
        const newTodo = new Todo (title, description, dueDate, priority);
        this.todos.push (newTodo);
    }

    findTodoByID (TodoID) {
        const index = this.todos.findIndex ( item => item.id === TodoID);
        return index;
    }
    getTodoByID (TodoID) {
        const Todo = this.todos.find ( item => item.id === TodoID);
        return Todo;
    }

    deleteTodo (TodoID) {
        const index = this.todos.findIndex ( item => item.id === TodoID);
        console.log (index);
        if (index !== -1) this.todos.splice(index,1);
    }
}



