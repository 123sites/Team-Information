
// Uses manager code
const Manager = require("./lib/manager");
// Uses engineer code
const Engineer = require("./lib/engineer");
// Uses intern code
const Intern = require("./lib/intern");
// Gets inquirer to work.
const inquirer = require("inquirer");
// The path module provides utilities for working with file and directory paths. It can be accessed
const path = require("path");
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs");
// Sets up the email capability.
// const emailValidator = require('email-validator');

const __dir = path.resolve(__dirname, "./__dist");
const outputPath = path.join(__dir, "team.html");

const render = require("./src/htmlrender");
const Employee = require("./lib/employee");

// 
let team = [];
let canAddManager = true;
const questions = {
  Manager: [
      {
          type: 'input',
          name: 'name',
          message: "What is the manager's name?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter the manager's name." }
        //   },
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the manager's id?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter the manager's id."}
        //   },
      },
      {
          type: 'input',
          name: 'email',
          message: "What is the manager's email address?",
        //   validate: (value) => {
        //       if (emailValidator.validate(value)) {
        //           return true
        //       } else { return "Please enter a valid email address." }
        //   },
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter manager's office number." }
        //   },
      },
      {
          type: 'list',
          name: 'addNew',
          message: "Do you want to add another employee",
          choices: ["yes", "no"]
      }
  ],

  Engineer: [
      {
          type: 'input',
          name: 'name',
          message: "What is the engineer's name?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter engineer's name." }
        //   },
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the engineer's id?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter engineer's id." }
        //   },
      },
      {
          type: 'input',
          name: 'email',
          message: "What is the engineer's email address?",
        //   validate: (value) => {
        //       if (emailValidator.validate(value)) {
        //           return true
        //       } else { return "Please enter a valid email address." }
        //   },
      },
      {
          type: 'input',
          name: 'github',
          message: "What is the engineer's GitHub username?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter engineer's GitHub." }
        //   },
      },
      {
          type: 'list',
          name: 'addNew',
          message: "Do you want to add another employee",
          choices: ["yes", "no"]
      }
  ],

  Intern: [
      {
          type: 'input',
          name: 'name',
          message: "What is the intern's name?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter intern's name." }
        //   },
      },
      {
          type: 'input',
          name:'id',
          message: "What is the intern's id?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter intern's id." }
        //   },
      },
      {
          type: 'input',
          name: 'email',
          message: "What is the intern's email address?",
        //   validate: (value) => {
        //       if (emailValidator.validate(value)) {
        //           return true
        //       } else { return 'Please enter a valid email address.' }
        //   },
      },
      {
          type: 'input',
          name: 'school',
          message: "What school is the intern attending?",
        //   validate: (value) => {
        //       if (value) {
        //           return true
        //       } else { return "Please enter the name of school." }
        //   },
      },
      {
          type: 'list',
          name: 'addNew',
          message: "Do you want to add another employee",
          choices: ["yes", "no"]
      }
  ]
};

const selectMemberType = [
  {
      type: 'list',
      name: 'memberType',
      message: "Please choose the role for the employee",
      choices: ["Manager", "Engineer", "Intern"],
  }
];



function addNewMember() {
  inquirer.prompt(selectMemberType)
  // Promise
      .then(answer => {
          console.log(answer.memberType);

          if (answer.memberType === "Manager") {
              if (canAddManager) {
                  inquirer.prompt(questions.Manager)
                    // Promise
                      .then(answer => {
                          // Save employee information
                          const manager = new Manager
                              (
                                  answer.name,
                                  answer.id,
                                  answer.email,
                                  answer.officeNumber
                              );

                          // Add information to team array if manager doesn't exist.
                          team.push(manager);
                          canAddManager = false;
                          if (answer.addNew === "yes") {
                              addNewMember();
                          } else {
                              generate();
                          }
                      });
              } else {
                  // Only 1 manager
                  console.log("There is a manager already!")
                  addNewMember();
              }


          } else if (answer.memberType === "Engineer") {
              inquirer.prompt(questions.Engineer)
                // Promise
                  .then(answer => {
                      // Save information
                      const engineer = new Engineer
                          (
                              answer.name,
                              answer.id,
                              answer.email,
                              answer.github
                          );
                      // Add information to the team array
                      team.push(engineer);
                      if (answer.addNew === "yes") {
                          addNewMember();
                      } else {
                          generate();
                      };
                  });

          } else if (answer.memberType === "Intern") {
              inquirer.prompt(questions.Intern)
              
                  .then(answer => {
                      // Save information
                      const intern = new Intern
                          (
                              answer.name,
                              answer.id,
                              answer.email,
                              answer.school
                          );
                      // Add information to the team array
                      team.push(intern);
                      if (answer.addNew === "yes") {
                          addNewMember();
                      } else {
                          generate();
                      };
                  });
          };
      });
};

function generate() {
  fs.writeFileSync(outputPath, render(team), "utf-8");
  process.exit(0);
}
addNewMember();