import { Todo } from "./todo.js";

export class Project {
    constructor (projectName) {
        this.projectName = projectName;
        this.id = crypto.randomUUID();
        this.todos = [];

    }

    addTodo (title, description, dueDate, priority) {
        const newTodo = new Todo (title, description, dueDate, priority);
        this.todos.push (newTodo);
    }

    switchTodoisDone (TodoID) {
        const index = this.todos.findIndex ( item => item.id === TodoID);
        this.todos[index].isDone = !this.todos[index].isDone;
        return this.todos[index].isDone;
    }

    findTodoByID (TodoID) {
        const index = this.todos.findIndex ( item => item.id === TodoID);
        return index;
    }
    getTodoByID (TodoID) {
        const Todo = this.todos.find ( item => item.id === TodoID);
        return Todo;
    }

    getAllTodos () {
        return this.todos;
    }

    deleteTodo (TodoID) {
        const index = this.todos.findIndex ( item => item.id === TodoID);
        console.log (index);
        console.log(typeof(TodoID));
        if (index !== -1) this.todos.splice(index,1);
    }
}



