export const projectsView = {
    projectContainer: document.getElementById("tab-projects"),

    renderProjects (projects) {
        projects.forEach(element => {
            const namePro = document.createElement("li");
            namePro.classList.add ("list-projectName");
            namePro.textContent = element.projectName;
            this.projectContainer.appendChild(namePro);
        });
    }
}