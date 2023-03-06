// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email,
//  and school, and I am taken back to the menu

// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() Overridden to return 'Intern'

const Employee = require("./employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}