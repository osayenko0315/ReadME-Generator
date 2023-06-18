const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [   
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
    }
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Enter an email users can reach out to if they have questions. (Required)',
        validate: questionsEmailInput => {
            if (questionsEmailInput) {
            return true;
            } else {
            console.log('Please enter an email!');
            return false;
            }
    }
    },    

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
            return true;
            } else {
            console.log('Please enter the title of your project!');
            return false;
            }
        }
        }
        ,  {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
        }
        },