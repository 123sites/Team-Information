// The application must have these classes: Employee, Manager, Engineer, and Intern. 
// The tests for these classes (in the _tests_ directory) must all pass.
// The other three classes will extend Employee.
// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() Returns 'Employee'

// “This” keyword refers to an object that is executing the current piece of 
// code. It references the object that is executing the current function. 
// If the function being referenced is a regular function, “this” references 
// the global object.

module.exports = class Employee {

  constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
  }

  getName() {
      return this.name;
  }

  getId() {
      return this.id;
  }

  getEmail() {
      return this.email;
  }

  getRole() {
      return 'Employee';
  }

}