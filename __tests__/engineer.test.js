const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "test@example.com", "GitHubUser");
  // Jest: Use .toBe to compare primitive values or to check referential identity 
  // of object instances. It calls Object.is to compare values, which is even 
  // better for testing than === strict equality operator.
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "test@example.com", testValue);
  // Jest: Use .toBe to compare primitive values or to check referential identity of object 
  // instances. It calls Object.is to compare values, which is even better for testing 
  // than === strict equality operator.
  expect(e.getGithub()).toBe(testValue);
});