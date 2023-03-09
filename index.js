const employee = require('./lib/employee.js');
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer.js');
const teamMembers = [];

function createManager(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?'
        }
    ])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamMember.push(manager)
    })
    .then(() => init())
}

function createEngineer() { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the engineer\'s office number?'
        }

    ])
    .then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        teamMember.push(engineer)
    })
    .then(() => init())
};

function createIntern() { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the name of the intern\'s school?'
        }

    ])
    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.github)
        teamMembers.push(intern)
    })
    .then(() => init())
}