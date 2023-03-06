// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email,
//  and school, and I am taken back to the menu

// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() Overridden to return 'Intern'

// “This” keyword refers to an object that is executing the current piece of 
// code. It references the object that is executing the current function. 
// If the function being referenced is a regular function, “this” references 
// the global object.

const Employee = require("./employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        // The super keyword is used to call the constructor of its parent class 
        // to access the parent's properties and methods.
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}