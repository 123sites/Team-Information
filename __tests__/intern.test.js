const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UofA";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "test@example.com", "UofA");
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofA";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.getSchool()).toBe(testValue);
});