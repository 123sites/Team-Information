// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() Overridden to return 'Manager'

// “This” keyword refers to an object that is executing the current piece of 
// code. It references the object that is executing the current function. 
// If the function being referenced is a regular function, “this” references 
// the global object.

const Employee = require("./employee");

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // The super keyword is used to call the constructor of its parent class 
        // to access the parent's properties and methods.
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}
