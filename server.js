require('dotenv').config();

const inquirer = require('inquirer');
const departmentController = require('./controllers/departmentController');
const roleController = require('./controllers/roleController');
const employeeController = require('./controllers/employeeController');

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            },
        ])

        .then((answers) => {
            const choice = answers.choice;

            switch (choice) {
                case 'View all departments':
                    departmentController.viewAllDepartments(mainMenu);
                    break;
                case 'View all roles':
                    roleController.viewAllRoles(mainMenu);
                    break;
                case 'View all employees':
                    employeeController.viewAllEmployees(mainMenu);
                    break;
                case 'Add a department':
                    departmentController.addDepartment(mainMenu);
                    break;
                case 'Add a role':
                    roleController.addRole(mainMenu);
                    break;
                case 'Add an employee':
                    employeeController.addEmployee(mainMenu);
                    break;
                case 'Update an employee role':
                    employeeController.updateEmployeeRole(mainMenu);
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit(0);
                default:
                    console.log('Invalid choice. Please try again.');
                    mainMenu();
            }
        });
}

function startApp() {
    console.log('Welcome to the Employee Tracker!');
    mainMenu();
}

startApp();