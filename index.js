const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes')

function createSVG(shapeType, txt, shapeClr, txtClr) {
    
    let svgShape;

    switch (shapeType) {
        case 'Circle':
            svgShape = new Circle(shapeClr, txt, txtClr);
            break;
        case 'Square':
            svgShape = new Square(shapeClr, txt, txtClr)
        
            break;
        case 'Triangle':
            svgShape = new Triangle(shapeClr, txt, txtClr)
            break;
        default:
            svgShape = '';
            break;
    }

    return svgShape;
}

inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select shape',
        choices: ['Circle', 'Square', 'Triangle' ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter in logo color'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Company Acronym: (no more than 3 letters)'
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:'
    }
]).then((data) => {
    const createdSVG = createSVG(data.shape, data.txt, data.shapeClr, data.textClr)
    fs.writeFileSync('Logo.svg', createdSVG.render());
    console.log('SVG Logo has been created!');
})