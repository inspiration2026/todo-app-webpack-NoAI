import { Project } from "./project.js";
import { Todo } from "./todo.js";

export const appModel = {
    projects: [],
    currentProjectID: null,

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
        }
}



// const pro = appModel.addProject("namePro");
// const curr = appModel.getCurrentProject();
// curr.addTodo("Test Todo", "This is a test", "2026-04-05", "high");
// console.log (curr);

// console.log (appModel.projects);
// console.log (appModel.currentProjectID);
// const x = appModel.currentProjectID;
// console.log (x);
// appModel.deleteProject(x);
// console.log (appModel.projects);

