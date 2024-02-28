const inquirer = require('inquirer');
const fs = require('fs')


inquirer
    .prompt([
        {
            type: 'list',
            message: 'Pick a shape.',
            name: 'shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            message: 'Enter a color',
            name: 'color'
        },
        {
            type: 'input',
            message: 'Enter your logo text (maximum of three characters).',
            name: 'logoText'
        }
    ])
    .then((response) => { 
        if (response.logoText.length > 3) console.log('Logo text cannot be longer that 3 characters.')
        else generateLogo(response)}
    )


