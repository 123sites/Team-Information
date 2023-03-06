const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UofA";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "cfreitas12345+1@gmail.com", "UofA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofA";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Intern("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});