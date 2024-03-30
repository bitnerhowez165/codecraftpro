// Create a class named CodeCraftPro
class CodeCraftPro {
    constructor() {
        this.projects = [];
    }

    // Method: start a new project
    startProject(project) {
        this.projects.push(project);
        console.log(`Started a new project: ${project}`);
    }

    // Method: complete a project
    completeProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            console.log(`Completed the project: ${project}`);
        } else {
            console.log(`Project ${project} is not found.`);
        }
    }

    // Method: list all ongoing projects
    listProjects() {
        console.log("Ongoing projects:");
        this.projects.forEach(project => {
            console.log(project);
        });
    }
}

// Create an instance of CodeCraftPro named myCodeCraftPro
const myCodeCraftPro = new CodeCraftPro();

// Start new projects
myCodeCraftPro.startProject("Web Application");
myCodeCraftPro.startProject("Mobile App");
myCodeCraftPro.startProject("Data Analysis Tool");

// List all ongoing projects
myCodeCraftPro.listProjects();

// Complete a project
myCodeCraftPro.completeProject("Mobile App");

// List all ongoing projects after completion
myCodeCraftPro.listProjects();
