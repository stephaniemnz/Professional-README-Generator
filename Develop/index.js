// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credit for the contributers.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), 
    error => {
        if (error) {
            console.error(error);
        }
        console.log('README.md has been created!');
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
