// Rendering turns website code into the interactive pages users see when they visit a website.
// Path = Extracts the filename from a file path:
const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../__dist");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

// UTF-8 is a character encoding system. It lets you represent characters as ASCII text, 
// while still allowing for international characters, such as Chinese characters.
// const renderManager = manager => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
//   template = replacePlaceholders(template, "name", manager.getName());
//   template = replacePlaceholders(template, "role", manager.getRole());
//   template = replacePlaceholders(template, "email", manager.getEmail());
//   template = replacePlaceholders(template, "id", manager.getId());
//   template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
//   return template;
// };
const renderManager = manager => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${id.get()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
          <li class="list-group-item">Office number: ${number.getOfficeNumber()}</li>
      </ul>
  </div>
</div>`
  return template;
};

// const renderEngineer = engineer => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
//   template = replacePlaceholders(template, "name", engineer.getName());
//   template = replacePlaceholders(template, "role", engineer.getRole());
//   template = replacePlaceholders(template, "email", engineer.getEmail());
//   template = replacePlaceholders(template, "id", engineer.getId());
//   template = replacePlaceholders(template, "github", engineer.getGithub());
//   return template;
// };
const renderEngineer = engineer => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${id.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank"
                  rel="noopener noreferrer">{{ github }}</a></li>
      </ul>
  </div>
</div>`
  return template;
};

const renderIntern = intern => {
  let template = `<div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${id.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>`
  return template;
};

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