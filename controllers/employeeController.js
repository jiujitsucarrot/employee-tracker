const inquirer = require('inquirer');
const { getAllEmployees, createEmployee } = require('../models/Employee');

const db = require('../config/connection');

function viewAllEmployees(callback) {
    getAllEmployees()
        .then((employees) => {
            console.log('All Employees:');
            console.table(employees);
            callback();
        })
        .catch((error) => {
            console.error('Error retrieving employees:', error);
            callback();
        });
}

function addEmployee(callback) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the employee:',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the employee:',
            },
            {
                type: 'number',
                name: 'role_id',
                message: 'Enter the role ID for the employee:',
            },
            {
                type: 'number',
                name: 'manager_id',
                message: 'Enter the manager ID for the employee (or leave blank):',
            },
        ])
        .then((answers) => {
            const { first_name, last_name, role_id, manager_id } = answers;
            createEmployee(first_name, last_name, role_id, manager_id)
                .then(() => {
                    console.log('Employee added successfully!');
                    callback();
                })
                .catch((error) => {
                    console.error('Error adding employee:', error);
                });
        });
}

module.exports = {
    viewAllEmployees,
    addEmployee,
};