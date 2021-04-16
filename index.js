const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require("./src/template.js");

const inquirer = require('inquirer');
const fs = require ('fs');
const path = require ('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist");     // folder where we want to store final rendered file --> HTML file
const outputPath = path.join(OUTPUT_DIR, "team.html");  // ./dist/team.html

const teamArray =[];

function startMenu(){
    createManager();
}

function createManager(){
    console.log('Build your team');

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name",
            validate: (answer) => {
                if (answer !== ""){
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email"
            // look up how to validate an email
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's phone number ex(555-555-5555)"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's work ID"
        }

    ]).then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOffice   
        )
        teamArray.push(manager);
        createTeam();
    });
}

function createTeam(){

    inquirer.prompt(
        [
       { 
        type: "list",
        name: "teamMember",
        choices: [
            "Engineer", "Intern", "No more team members needed"
        ]
    }]).then((choice) => {
        console.log(choice.teamMember)
        //if statement call functions create intern or engineer
        if(choice.teamMember === "Engineer"){
            createEngineer();
        }else if(choice.teamMember === "Intern"){
            createIntern();
        }else buildTeam();
        // call function to build the team and export to html
    });

}

function createEngineer() 
{

inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "What is the team engineer's name",
        validate: (answer) => {
            if (answer !== ""){
                return true;
            }
            return "Please enter at least one character"
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email"
        // look up how to validate an email
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's Github"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's work ID"
    }

]).then(answers => {
    const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub   
    )
    teamArray.push(engineer);
    createTeam();
});
}

function createIntern() 
{

inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "What is the team intern's name",
        validate: (answer) => {
            if (answer !== ""){
                return true;
            }
            return "Please enter at least one character"
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email",
        // look up how to validate an email
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S/);
            if (pass) return true;
            else return "Please enter a valid email";
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the intern's School"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's work ID",
        validate: answer => {
            const pass = answer.match(/[1-9]\d*$/);

            if (pass) return true;
        }
    }

]).then(answers => {
    const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool   
    )
    teamArray.push(intern);
    createTeam();
});
}

function buildTeam(){
    // if the output directory OUTPUT_DIR doesn't exist
        // create it
    // create the output file team.html outputPath
        // to do this, we need a helper file that turns the team into html --> template file
        console.log(teamArray);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
                    // filename,       text          encoding
    fs.writeFileSync(outputPath, render(teamArray), "utf-8")
}


startMenu();