// TODO: Include packages needed for this application
// Collecting User info
const inquirer = require('inquirer');
// Generating/writing file system
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')


const prompt = inquirer.createPromptModule();

prompt([
    {
        name: 'title',
        message: 'Please enter an appropriate readMe title',
        type: 'input',
        default: 'Unique Title'
    },
    {
        name: 'description',
        message: 'Enter appropriate readMe description',
        type: 'input',
        default: 'Description text'
    },
    {
        name: 'installation',
        message: 'Enter appropriate readMe installation instructions',
        type: 'input',
        default: 'Installation text'
    },
    {
        name: 'usage',
        message: 'Enter appropriate readMe usage information',
        type: 'input',
        default: 'Usage text'
    },
    {
        name: 'license',
        message: 'Choose a license for your application',
        type: 'list',
        choices: ['MIT (Massachussets Institute of Technology)', 'Apache', 'GNU (General Public License)', 'BSD (Berkeley Software Distribution)', 'Other', 'None'],
    },    
    {
        name: 'contributing',
        message: 'Enter appropriate readMe contribution guidelines',
        type: 'input',
        default: 'Contribution text'
    },
    {
        name: 'test',
        message: 'Enter appropriate readMe test instructions',
        type: 'input',
        default: 'Test text'
    },
    {
        name: 'gitUsername',
        message: 'Enter your Github Username',
        type: 'input',
        default: 'dong135790'
    },
    {
        name: 'gitEmail',
        message: 'Enter your Github email address',
        type: 'input',
        default: 'Github Email'
    }
])
.then((data) => {
    const fileName = 'sample.md'
    writeToFile(fileName, data);
})

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMe = markdown.generateMarkdown(data)    
    // ( [NAME OF FILE], [(1) DATA (MUST BE STRING)] [(2) DETERMINE WHAT WE REPLACE...NULL] [(3)HOW MUCH WE INDENT] )
    fs.writeFileSync(fileName, readMe)    
    console.log(fileName)
    console.log(readMe)
    console.log(data)
}

// TODO: Create a function to initialize app
function init() {}

// Need a question section

// Function call to initialize app
init();
