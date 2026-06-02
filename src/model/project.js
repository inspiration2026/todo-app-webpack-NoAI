import { Todo } from "./todo.js";
import {format, addDays, subDays, isToday, isTomorrow, isPast, parseISO} from 'date-fns';

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

    updateTodo (newTitle, newDescription, newDueDate, newPriority, TodoID) {
        const index = this.findTodoByID (TodoID);

        if (newTitle !== undefined) this.todos[index].title = newTitle;
        if (newDescription !== undefined) this.todos[index].description = newDescription;
        if (newDueDate !== undefined) this.todos[index].dueDate = newDueDate;
        if (newPriority !== undefined) this.todos[index].priority = newPriority;

    }

    checkIfOverdue () {
        const Today = new Date();
        console.log(Today);
        this.todos.forEach ((todo) => {
            const dueDate = parseISO (todo.dueDate);
            if ((!todo.isDone) && (isPast(dueDate))) {todo.isExpired = true} 
                else if ((!todo.isDone) && (!isPast(dueDate))) {todo.isExpired = false};
            console.log(!todo.isDone);
            console.log(isPast(dueDate));
            console.log(dueDate);
            console.log(todo.isExpired);
            
        })

    }
   
}



