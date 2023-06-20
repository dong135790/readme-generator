// TODO: Include packages needed for this application
// Collecting User info
const inquirer = require('inquirer');
// Generating/writing file system
const fs = require('fs');


const prompt = inquirer.createPromptModule();

prompt([
    {
        name: 'title',
        message: 'Please enter an appropriate readMe title',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Enter appropriate readMe description',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Enter appropriate readMe installation instructions',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Enter appropriate readMe usage information',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Choose a license for your application',
        type: 'list',
        choices: ['a', 'b', 'c'],
    },    
    {
        name: 'contributing',
        message: 'Enter appropriate readMe contribution guidelines',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Enter appropriate readMe test instructions',
        type: 'input'
    },
    {
        name: 'gitUsername',
        message: 'Enter your Github Username',
        type: 'input'
    },
    {
        name: 'gitEmail',
        message: 'Enter your Github email address',
        type: 'input'
    }
])
.then((data, filename) => {
    console.log(data);
    console.log(filename);
    // ( [NAME OF FILE], [(1) DATA (MUST BE STRING)] [(2) DETERMINE WHAT WE REPLACE...NULL] [(3)HOW MUCH WE INDENT] )
    fs.writeFileSync('result.json', JSON.stringify(data, null, 1))
    return data;
})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
}

// TODO: Create a function to initialize app
function init() {}

// Need a question section

// Function call to initialize app
init();
writeToFile();
