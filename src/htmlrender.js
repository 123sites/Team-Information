// Rendering turns website code into the interactive pages 
// users see when they visit a website.

// Path = Extracts the filename from a file path:

// What is the use of require in js?
// The JavaScript require function facilitates a way 
// to include JavaScript modules in your code. 
const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../__dist");

const render = employees => {
  const html = [];

  // The push() method adds one or more elements to the end of an array 
  // and returns the new length of the array.
  html.push(...employees
    // The filter() method creates a shallow copy of a portion 
    // of a given array, filtered down to just the elements from 
    // the given array that pass the test implemented by the provided 
    // function.
    .filter(employee => employee.getRole() === "Manager")
    // The map() method creates a new array populated with the results of 
    // calling a provided function on every element in the calling array.
    .map(manager => renderManager(manager))
  );

  // Show what's on the employee & engineer templates
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );

  // Show what's on the employee & intern templates
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

// Manager template
const renderManager = manager => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">S</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>`
  return template;
};

// Engineer template
const renderEngineer = engineer => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"></a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                  rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>`
  return template;
};

// Intern template
const renderIntern = intern => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"></a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>`
  return template;
};

// Show main.html
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

// RegExp Object = A regular expression is a pattern of characters. 
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;