const Employee = require("../lib/employee");

test("Can call a class' function, instanticiate, Employee instance", () => {
  const e = new Employee();
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Employee(name);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Employee("Foo", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Employee("Foo", 1, testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Bob";
  const e = new Employee(testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Employee("Foo", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Employee("Foo", 1, testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Bob", 1, "test@test.com");
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.getRole()).toBe(testValue);
});

