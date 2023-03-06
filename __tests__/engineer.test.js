const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "cfreitas12345+1@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  // Foo is an intentionally meaningless placeholder 
  // word often used in computer programming.
  const e = new Engineer("Foo", 1, "cfreitas12345+1@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});