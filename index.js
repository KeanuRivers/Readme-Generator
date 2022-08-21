
import inquirer from "inquirer";
// var inquirer = require("inquirer")
    // TODO: Create an array of questions for user input
    inquirer.prompt ([
        {
            name: "github",
            message: "Enter github Username",
            type: "input",
        },
        {
            name: "github",
            message: "Enter GitHub Username",
            type: "input"
        },
        {
            name: "Project",
            message: "Enter Project Repo Name",
            type: "input"
        },
        {
            name: "Description",
            message: "Enter project description",
            type: "input"
        },
        {
            name: "Installation",
            message: "Installation Software needed",
            type: "input",
            default: "npm install"
        },
        {
            name: "Contributors",
            message: "What is the information you have for the contributors?",
            type: "input"
        },
        {
            name: "Usage",
            message: "What is your usage?",
            type: "input"
        },
        {
            name: "Test",
            message: "Any tests to run?",
            type: "input",
            default: "npm test"
        },
        {
            name: "License",
            message: "Choose license",
            type: "list",
            choices: ["MIT", "ISC", "APACHE 2.0", "GPL 3.0"]
        },
    ])
    
    // function to write README file
    function writeToFile(fileName, data) {
    }
    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}
    
    // function to initialize program
    function init() {
    // TODO: Create a function to initialize app
    // function init() {}
    
    }
    // function call to initialize program
    // Function call to initialize app