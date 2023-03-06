const inquirer = require('inquirer')
const fs = require('fs');
const markdownHTML = require('./src/HTML');

function makeTeam(){

}
const manager = [
    {
        type: "input",
        message: "Please enter manager's name",
        name: "name"
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Everything is good!")
        }
    });
}

function writeHTML() {
    inquirer.prompt().then((data) => {
        const HTML = markdownHTML(data);
        writeToFile('index.html', HTML)
    })
}

writeHTML();