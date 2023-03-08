const inquirer = require("inquirer");
const fs = require("fs");
const markdownHTML = require("./src/HTML");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

function makeTeam() {
  const team = [];

  const manager = [
    {
      type: "input",
      message: "Please enter manager's name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter Manager ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter Manager email address: ",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the office number: ",
      name: "officeNumber",
    },
  ];
  const engineer = [
    {
      type: "input",
      message: "Enter engineer's name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Enter engineer's ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Enter engineer's email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Enter engineer's GitHub username: ",
      name: "github",
    },
  ];
  const intern = [
    {
      type: "input",
      message: "Enter intern's name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Enter intern's ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Enter intern's email",
      name: "email",
    },
    {
      type: "input",
      message: "Enter intern's school: ",
      name: "school",
    },
  ];

  inquirer.prompt(manager.then((data) => {
    const newManager = new manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
    );
    team.push(newManager);
        addTeamMember();
  }));

  function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "What team member would you like to add?",
            name: "memberType",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add anymore."
            ]
        }
    ])
  }


}





