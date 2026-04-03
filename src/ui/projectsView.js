export const projectsView = {
    projectContainer: document.getElementById("tab-projects"),

    renderProjects (projects, selectedProjectID) {
        projects.forEach(element => {
            const projectName = document.createElement("li");
            projectName.classList.add ("list-projectName");
            projectName.textContent = element.projectName;
            projectName.dataset.id = element.id;
            this.projectContainer.appendChild(projectName);
            if (element.id === selectedProjectID) {
                projectName.classList.add ("selected");
            }
        });
    },

    clearProjectTab () {
        this.projectContainer.innerHTML = '';
    },
    showProjectForm() {
        const projectForm = document.getElementById("add-project-form");
        projectForm.style.display = ("flex");
    },
    hideProjectForm() {
        const projectForm = document.getElementById("add-project-form");
        projectForm.style.display = ("none");
    },
    resetProjectForm () {
        const projectForm = document.getElementById("add-project-form");
        projectForm.reset();
    },
    collectProjectInfo() {
        const projectName = document.getElementById ("newProjectName").value.trim();
        console.log(projectName);
        return projectName;
        
    }
    
}