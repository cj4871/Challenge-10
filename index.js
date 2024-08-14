const inquirer = require('inquirer')
const fs = require('fs')
const {circle, square, triangle} = require('./lib/shapes')

function generateLogo(shapeType, text, shapeColor, textColor){
    let svg
}
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape',
        choices: ['circle', 'square', ]
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Company Acronym: (no more than 3 letters)'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter in logo color'
    }
]).then((answers) => {
    const createdSVG = GenerateSVG(answers.shape, answers.text, answers.shapeColor, answers.textColor);
    fs.writeToFile(createdSVG)
})