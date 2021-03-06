// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository. THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title. THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions. THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options. THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username. THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address. THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents. THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
        return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project (Required).',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project',
            choices: [
                'Apache_2.0',
                'Boost_1.0',
                'BSD_3-clause',
                'MIT',
                'Mozilla_Public_License_2.0',
                'Unlicensed'
            ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be used to run the test?',
            default: 'npm run test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What would the user need to know about your repository?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repository?'
        },
    ]);
};




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => 
        {
            console.log(answers);
            writeToFile('./demo/README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
