// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'To start your README, please provide your full name:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your prefered email address:',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description:",
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for proper installation?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for correct usage:',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'How can others contribute to this project?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Describe how your project was tested to ensure it works correctly:',
    },

    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: false
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();