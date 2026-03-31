import { appModel } from "../model/appModel.js";
import { todoView } from "../ui/todosView.js";
import { projectsView } from "../ui/projectsView.js";

export const controller = {
    init() {
        appModel.addProject("namePro");
        appModel.addProject("Test2");
        appModel.addProject("Test 3");
        const curr = appModel.getCurrentProject();
        curr.addTodo("Test Todo", "This is a test", "2026-04-05", "high");
        curr.addTodo("Test Again", "test2", "2026-04-12", "low");
        curr.addTodo("Test 3", "test3", "2026-04-12", "low");
        curr.addTodo("Test 4", "test4", "2026-04-12", "low");
        console.log (curr);
        const todos = curr.getAllTodos();
        todoView.renderTodos(todos);
        const projects = appModel.getAllProjects();
        projectsView.renderProjects(projects);

        this.addEventListeners();

            
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
                todoView.renderTodos(todos);
            } else if (e.target.closest(".list-projectName")) {
                const currentProject = appModel.getCurrentProject();
                const projectClicked = e.target.closest(".list-projectName");
                const projectClickedID = projectClicked.dataset.id;
                console.log(currentProject.id);
                console.log(projectClickedID);
                appModel.switchProject(projectClickedID);
                todoView.clearTodos();
                const newProject = appModel.getCurrentProject();
                const todos = newProject.getAllTodos();
                todoView.renderTodos(todos);
                    
            }
            
        });
    }
}