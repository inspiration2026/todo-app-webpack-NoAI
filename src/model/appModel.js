import { Project } from "./project.js";
import { Todo } from "./todo.js";
import { storageService } from "../storage/storageService.js"  ;


export const appModel = {
    projects: [],
    currentProjectID: null,
    colorScheme: "light",

    init () {
        const savedData = storageService.load ();

        if (savedData) {
            this.currentProjectID = savedData.currentProjectID || null;
            this.colorScheme = savedData.colorScheme || "light";

            this.projects = savedData.projects.map (savedProject => {
                const project = new Project (savedProject.projectName || savedProject.name);
                project.id = savedProject.id;

                project.todos = (savedProject.todos || []).map ( savedTodo => {
                    const todo = new Todo (
                        savedTodo.title,
                        savedTodo.description,
                        savedTodo.dueDate,
                        savedTodo.priority
                    );
                    todo.id = savedTodo.id;
                    todo.isDone = savedTodo.isDone || false;
                    todo.isExpired = savedTodo.isExpired || false;

                    return todo;
                });

                return project;

            });
        }
    },

    saveToStorage () {
        const dataToSave = {
            currentProjectID: this.currentProjectID,
            colorScheme: this.colorScheme,

            projects: this.projects.map (project => ({
                id: project.id,
                projectName: project.projectName,
                todos: project.todos.map ( todo => ({
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    dueDate: todo.dueDate,
                    priority: todo.priority,
                    isDone: todo.isDone,
                    isExpired: todo.isExpired

                }))
            }))
        };

        storageService.save(dataToSave);
    },

    addProject (projectName) {
        const newProject = new Project(projectName);
        this.projects.push(newProject);
        this.currentProjectID = newProject.id;
    },

    findProjectByID (projectID) {
        const index = this.projects.findIndex ( item => item.id === projectID);
        return index;
        
    },

    getCurrentProject () {
        if (!this.currentProjectID) return null;
        const currentProject = this.projects.find ( item => item.id === this.currentProjectID);
        return currentProject;
    },

    switchProject (projectID) {
        this.currentProjectID = projectID;
    },

    getAllProjects () {
        return this.projects;
    },
    
    deleteCurrentProject() {
        const index = this.projects.findIndex ( item => item.id === this.currentProjectID);
        if ((index !== -1) && (this.projects.length > 1)) {
            this.projects.splice(index,1);
            this.currentProjectID = this.projects[0].id;
            console.log(this.currentProjectID);
            console.log(index) 
            } else return;
    },

    wipeStorageData () {
        storageService.clearAll ();
    }
}

