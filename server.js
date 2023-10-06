const inquirer = require('inquirer');
const departmentController = require('./controllers/departmentController');
const roleController = require('./controllers/roleController');
const employeeController = require('./controllers/employeeController');

async function startApp() {
    console.log('Welcome to the Employee Tracker!');
    await mainMenu();
}

startApp();