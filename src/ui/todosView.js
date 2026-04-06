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
            const isDone = document.createElement ("input");
            isDone.type = ("checkbox");
            isDone.classList.add("isDoneCheckbox");
            if (element.priority === "high") {
                isDone.classList.add("high");
            } else if (element.priority === "low") {
                isDone.classList.add("low");
            };


            todo.appendChild(title);
            todo.appendChild(description);
            todo.appendChild(dueDate);
            todo.appendChild(deleteTodo);
            todo.prepend(isDone);

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
        const submitBtn = document.getElementById("submit-form-btn");
        const editBtn = document.getElementById("edit-form-btn");
        submitBtn.style.display = ('flex');
        editBtn.style.display = ('none');
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
    },
    makeTodoCompleted (todoID) {
        const todo = document.querySelector(`[data-id="${todoID}"]`)
        todo.classList.add("completed");
    },
    makeTodoActive (todoID) {
        const todo = document.querySelector(`[data-id="${todoID}"]`)
        todo.classList.remove("completed");
    },
    displayTodo (todo) {
        const todoForm = document.getElementById("addTodo-form-container");
        todoForm.style.display = ("flex");

        const title = document.getElementById ("formTitle");
        const description = document.getElementById ("formDescription");
        const dueDate = document.getElementById ("formDueDate");
        const radio = document.querySelector(`input[name="priority"][value="${todo.priority}"]`);
        const submitBtn = document.getElementById("submit-form-btn");
        const editBtn = document.getElementById("edit-form-btn");

        submitBtn.style.display = ('none');
        editBtn.style.display = ('flex');

        title.value = todo.title;
        description.value = todo.description;
        dueDate.value = todo.dueDate;
        if (radio) {
        radio.checked = true;
        }

    }
}