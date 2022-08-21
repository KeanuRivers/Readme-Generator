
import inquirer from "inquirer";
import axios from "axios";
import fs from "fs"
var Useranswer = ""
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
    .then((userData) => {
        Useranswer = userData
        return axios.get(`https://api.github.com/users/${Useranswer.github}`)

    })
    .then(function(axiosResponse) {
        console.log(axiosResponse.data);
        var readMeString = `
    # About The Author
    # Name: ${axiosResponse.data.name}
    ## Username: ${axiosResponse.data.login}
    ### Location: ${axiosResponse.data.location}
    
    First Header | Second Header
    -------------|---------------
    Project      | ${Useranswer.Project}
    Project URL  | https://github.com/${Useranswer.github}/${Useranswer.Project}
    Description  | ${Useranswer.Description}
    Installation | ${Useranswer.Installation}
    License      | ${Useranswer.License}
    Test         | ${Useranswer.Test}
    
    
    ![GitHub Logo](${axiosResponse.data.avatar_url})
    
    [![GitHub license](https://img.shields.io/badge/license-${Useranswer.License}-blue.svg)](https://github.com/${Useranswer.github}/${Useranswer.Project})
    
        `
        console.log(readMeString)
        
        fs.writeFileSync("./README.md", readMeString)
    })
    // function to write README file
    // function writeToFile(fileName, data) {
    // }
    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}
    
    // function to initialize program
    // function init() {
    // // TODO: Create a function to initialize app
    // // function init() {}
    
    // }
    // function call to initialize program
    // Function call to initialize app