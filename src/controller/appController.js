import { appModel } from "../model/appModel.js";
import { todoView } from "../ui/todosView.js";
import { projectsView } from "../ui/projectsView.js";

export const controller = {
    init() {
        appModel.addProject("Study");
        appModel.addProject("Workout");
        let curr = appModel.getCurrentProject();
        curr.addTodo("Test Code", "Run npm testing", "2026-04-05", "high");
        curr.addTodo("Test Again", "simulate full App", "2026-04-12", "medium");
        appModel.addProject("Work");
        curr = appModel.getCurrentProject();
        curr.addTodo("Git Commit All", "-", "2026-04-12", "low");
        curr.addTodo("Upload project to Odin", "asap", "2026-04-12", "low");
        const todos = curr.getAllTodos();
        todoView.renderTodos(todos, curr.projectName);
        const projects = appModel.getAllProjects();
        projectsView.renderProjects(projects, appModel.currentProjectID);

        this.addEventListeners();
        this.addTodoViaForm ();
        this.addProjecViaForm ();
        this.darkMode();

            
    },
    addEventListeners() {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest(".btn-deleteTodo")) {
                const todoElement = e.target.closest(".todo-container");
                const todoID = todoElement.dataset.id;
                const currentProject = appModel.getCurrentProject();
                currentProject.deleteTodo (todoID);
                todoView.clearTodos();
                const todos = currentProject.getAllTodos();
                todoView.renderTodos(todos, currentProject.projectName);
            } else if (e.target.closest(".list-projectName")) {
                const projectClicked = e.target.closest(".list-projectName");
                const projectClickedID = projectClicked.dataset.id;
                appModel.switchProject(projectClickedID);
                todoView.clearTodos();
                const newProject = appModel.getCurrentProject();
                const todos = newProject.getAllTodos();
                todoView.renderTodos(todos, newProject.projectName);  
                projectsView.clearProjectTab();
                const projects = appModel.getAllProjects();
                projectsView.renderProjects(projects, appModel.currentProjectID);  
            } else if (e.target.closest("#btn-new-task")) {
                todoView.showAddTodoForm();
            } else if (e.target.closest("#btn-del-project")) {
                appModel.deleteCurrentProject();

                const newProject = appModel.getCurrentProject();
                const todos = newProject.getAllTodos();
                todoView.clearTodos();
                todoView.renderTodos(todos, newProject.projectName);

                projectsView.clearProjectTab();
                const projects = appModel.getAllProjects();
                projectsView.renderProjects(projects, appModel.currentProjectID);  
            } else if (e.target.closest("#btn-add-project")) {
                projectsView.showProjectForm();
            }
            
        });
        document.body.addEventListener('change', (e) => {
            
            if (e.target.classList.contains("isDoneCheckbox")) {
                const todoElement = e.target.closest(".todo-container");
                const todoID = todoElement.dataset.id;
                const currentProject = appModel.getCurrentProject();
                const status = currentProject.switchTodoisDone (todoID); 
                
                status?todoView.makeTodoCompleted(todoID):todoView.makeTodoActive(todoID);
            }

        });
    },
    addTodoViaForm () {
        const todoForm = document.getElementById("addTodo-form");

        const cancelBtn = document.getElementById ("cancel-form-btn");

        cancelBtn.addEventListener ("click", (e) => {
            todoView.hideAddTodoForm();
            todoView.resetAddTodoForm();
        });

        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const currentProject = appModel.getCurrentProject();

            const newTodo = todoView.collectAddTodoInfo();
            currentProject.addTodo(newTodo.title, newTodo.description, newTodo.dueDate, newTodo.priority);

            todoView.hideAddTodoForm();
            todoView.resetAddTodoForm();
            
            todoView.clearTodos();
            const newProject = appModel.getCurrentProject();
            const todos = newProject.getAllTodos();
            todoView.renderTodos(todos, newProject.projectName);  
        }
    )},
    addProjecViaForm () {
        
        const submitProjectButton = document.getElementById("submit-form-project-btn");
        const cancelProjectButton = document.getElementById("cancel-form-project-btn");

        cancelProjectButton.addEventListener ("click", (e) => {
            projectsView.resetProjectForm();
            projectsView.hideProjectForm();
        })

        submitProjectButton.addEventListener("click", (e) => {
            const newProjectName = projectsView.collectProjectInfo();
            appModel.addProject(newProjectName);

            projectsView.resetProjectForm();
            projectsView.hideProjectForm();

            todoView.clearTodos();
            projectsView.clearProjectTab();

            const newProject = appModel.getCurrentProject();
            const todos = newProject.getAllTodos();
            todoView.renderTodos(todos, newProject.projectName);

            const projects = appModel.getAllProjects();
            projectsView.renderProjects(projects, appModel.currentProjectID);

        })
    },
    darkMode () {
        const mode = document.getElementById("mode");
        mode.addEventListener ("click", (e) => {
            document.body.classList.toggle ("dark");
        })
    }
    
}