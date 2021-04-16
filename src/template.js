function generateTeam(team) {
    function generateEngineer(engineer) {
        return `
        <div class="col s4">
        <div class="row">
            <div class="col s12 m6">
              <div class="card black">
                <div class="card-content white-text">
                  <span class="card-title">${engineer.name}</span>
                  <ul>
                      <li>
                      <h5>${engineer.getRole()}</h5>
                      </li>
                      <li>
                          <h5>ID #</h5><p> ${engineer.id}</p>
                      </li>
                      <li>
                        <h5>Email</h5><p> ${engineer.email}</p>
                    </li>
                    <li>
                        <h5>Github</h5><p> ${engineer.gitHub}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
        `
    }

    function generateIntern(intern) {
        return `
            <div class="col s4">
            <div class="row">
                <div class="col s12 m6">
                  <div class="card black">
                    <div class="card-content white-text">
                      <span class="card-title">${intern.name}</span>
                      <ul>
                          <li>
                          <h5>${intern.getRole()}</h5>
                          </li>
                          <li>
                              <h5>ID #</h5><p> ${intern.id}</p>
                          </li>
                          <li>
                            <h5>Email</h5><p> ${intern.email}</p>
                        </li>
                        <li>
                            <h5>School</h5><p> ${intern.school}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        `
    }

    function generateManager(manager) {
        return `
        <div class="col s4">
        <div class="row">
            <div class="col s12 m6">
              <div class="card black">
                <div class="card-content white-text">
                  <span class="card-title">${manager.name}</span>
                  <ul>
                      <li>
                      <h5>${manager.getRole()}</h5>
                      </li>
                      <li>
                          <h5>ID #</h5><p> ${manager.id}</p>
                      </li>
                      <li>
                        <h5>Email</h5><p> ${manager.email}</p>
                    </li>
                    <li>
                        <h5>Phone #</h5><p> ${manager.officeNumber}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );

    return html.join("");
}




module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Team Generator</title>
</head>
<body>
<nav>
<div class="nav-wrapper valign-wrapper">
  <h3 class="brand-logo center">My Team </h3>
 
</div>
</nav>
    <div class="row">
     ${generateTeam(team)}

    </div>
    
</body>
</html>
    `
}