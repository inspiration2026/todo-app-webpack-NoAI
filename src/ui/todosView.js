export const todoView = {
    tasksContainer: document.getElementById("tasks"),

    renderTodos (todos, currentProjectName) {
        todos.forEach(element => {
            const todo = document.createElement("div");
            todo.classList.add ("todo-container");
            todo.dataset.id = element.id;
            const title = document.createElement("h4");
            title.classList.add ("todo-title");
            title.textContent = element.title;
            const description = document.createElement("p");
            description.classList.add ("todo-description");
            description.textContent = element.description;
            const dueDate = document.createElement("p");
            dueDate.classList.add ("todo-dueDate");
            dueDate.textContent = element.dueDate;
            const deleteTodo = document.createElement("button");
            deleteTodo.classList.add ("btn-deleteTodo");
            deleteTodo.textContent = "Delete";

            todo.appendChild(title);
            todo.appendChild(description);
            todo.appendChild(dueDate);
            todo.appendChild(deleteTodo);

            this.tasksContainer.appendChild(todo);
            
        });
        const projectName = document.getElementById("projectName");
        projectName.textContent = currentProjectName;
    },
    clearTodos () {
        this.tasksContainer.innerHTML = '';
    },
    showAddTodoForm () {
        const todoForm = document.getElementById("addTodo-form-container");
        todoForm.style.display = ("flex");
    },
    hideAddTodoForm () {
        const todoFormContainer = document.getElementById("addTodo-form-container");
        todoFormContainer.style.display = ("none");
    },
    resetAddTodoForm () {
        const addTodoForm = document.getElementById("addTodo-form");
        addTodoForm.reset();
    },
    collectAddTodoInfo () {

        const title = document.getElementById ("formTitle").value.trim();
        const description = document.getElementById ("formDescription").value;
        const dueDate = document.getElementById ("formDueDate").value;
        const priority = document.querySelector ('input[name="priority"]:checked').value;

        return {title, description, dueDate, priority};
    }
}