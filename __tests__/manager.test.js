
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument, parameterized constructor", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "test@example.com", 100);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.getOfficeNumber()).toBe(testValue);
});