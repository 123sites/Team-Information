// WHEN I select the engineer option, THEN I am prompted to enter the 
// engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// In addition to Employee's properties and methods, Engineer will also have:
// github GitHub username

// getGithub()
// getRole() Overridden to return 'Engineer'

// “This” keyword refers to an object that is executing the current piece of 
// code. It references the object that is executing the current function. 
// If the function being referenced is a regular function, “this” references 
// the global object.

const Employee = require("./employee");

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        // The super keyword is used to call the constructor of its parent class 
        // to access the parent's properties and methods.
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}