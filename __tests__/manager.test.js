
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument, parameterized constructor", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "cfreitas12345+1@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Manager("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});