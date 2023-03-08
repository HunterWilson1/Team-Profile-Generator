const inquirer = require("inquirer");
const fs = require("fs");
const markdownHTML = require("./src/HTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

  inquirer.prompt(
    manager).then((data) => {

    // new manager object
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );

      //adds to team array
      team.push(newManager);

      //brings up employee questions
      addTeamMember();
    });

  function addTeamMember() {
    //prompt to add more employee
    inquirer
      .prompt([
        {
          type: "list",
          message: "What team member would you like to add?",
          name: "memberType",
          choices: ["Engineer", "Intern", "I do not want to add anymore."],
        },
      ])
      .then((data) => {
        if (data.memberType === "Engineer") {
          inquirer.prompt(engineer).then((data) => {
            const newEngineer = new Engineer(
              data.name,
              data.id,
              data.email,
              data.github
            );
            team.push(newEngineer);
            addTeamMember();
          });
          
          //if select intern creates new object
        } else if (data.memberType === "Intern") {
          inquirer.prompt(intern).then((data) => {
            const newIntern = new Intern(
              data.name,
              data.id,
              data.email,
              data.school
            );
            team.push(newIntern);
            addTeamMember();
          });
        } else {
          const HTML = markdownHTML(team);
          writeToFile("index.html", HTML);
        }
      });
  }
}

function writeToFile(fileName, team) {
  fs.writeFile(fileName, team, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File has been generated successfully!");
    }
  });
}


makeTeam();
