// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// So we can write the file
const fs = require('fs')

const prompt = inquirer.createPromptModule();

prompt([
    {
        name: 'title',
        message: 'Please enter an appropriate readMe title',
    },
    {
        name: 'description',
        message: 'Enter appropriate readMe description',
    },
    {
        name: 'installation',
        message: 'Enter appropriate readMe installation instructions',
    },
    {
        name: 'usage',
        message: 'Enter appropriate readMe usage information',
    },
    {
        name: 'contributing',
        message: 'Enter appropriate readMe contribution guidelines',
    },
    {
        name: 'test',
        message: 'Enter appropriate readMe test instructions',
    },
    {
        name: 'license',
        message: 'Choose a license for your application',
    },
    {
        name: 'gitUsername',
        message: 'Enter your Github Username'
    },
    {
        name: 'gitEmail',
        message: 'Enter your Github email address'
    }
])
.then((data) => {
    console.log(data);
})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
