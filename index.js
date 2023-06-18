const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "How do I use this application?",
        name: "installation"
    },
    {
        type: "input",
        message: "What do you want to call this readme?",
        name: "tests"
    },
];
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

init();
