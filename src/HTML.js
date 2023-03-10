const createTeam = (team) => {
  //makes the manager card
  const managerCard = (manager) => {
    return `
    <div class="card">   
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div> 
            `;
  };

  const engineerCard = (engineer) => {
    return `
    <div class="card">     
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-gear"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github username: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div> 
             `;
  };

  const internCard = (intern) => {
    return `
    <div class="card">   
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div> 
            `;
  };

  //createTeam makes an empty array
  const html = [];

  //pushes to html array when it filters out those with role of manager
  //map is called on filtered manager array which generates html strings by the managerCard
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );
  //html array is joined into string and returned to createTeam function.
  return html.join("");
};

// exports html template as a string with team as argument
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/4444fe08f6.js" crossorigin="anonymous"></script>
        <title>Team Creator</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 bg-danger">
                    <h1 class="text-center text-white"> My Team </h1>
                </div>
            </div>
        </div>
        <div class ="container">
            <div class="row">
                <div class ="row col-12 d-flex justify-content-center">
                        ${createTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};
