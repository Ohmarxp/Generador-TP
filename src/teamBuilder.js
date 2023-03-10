const generateTeam = (team) => {
  // Create an empty array to push html elements on to and loop through the team data
  const html = [];
  // Create functions for each type of employee that returns HTML data
  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = ` 
    
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Maneger</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">s${manager.email}</a></li>
            <li class="list-group-item">Office number: 1</li>
        </ul>
    </div>
</div>
        `;
    html.push(managerHtml);
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHtml = ` 
    
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
        </ul>
    </div>
</div>
</div>
        `;
    html.push(engineerHtml);
  };
  const generateIntern = (intern) => {
    console.log(intern);
    let internHtml = ` 
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School:${intern.school}</li>
        </ul>
    </div>
</div>
      
        `;
    html.push(internHtml);
  };

  // create a loop to pass each function data, to use it many times as needed
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Maneger") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }

  // join the HTML blocks
  return html.join("");
};
// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header style= 'background-color: rgb(81, 125, 139');>
    <h1> My Team </h1>
    </header>
    <main>  
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">w</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: w</li>
            <li class="list-group-item">Email: <a href="mailto:w">w</a></li>
            <li class="list-group-item">School:w</li>
        </ul>
    </div>
</div>
    <main> ${generateTeam(team)} </main>
     
</body>
</html>
    `;
};