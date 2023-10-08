const inquirer = require('inquirer');
const { getAllEmployees, createEmployee, updateEmployeeRole } = require('../models/Employee');

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

function updateEmployeeRole(callback) {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'employee_id',
                message: 'Enter the ID of the employee whose role you want to update:',
            },
            {
                type: 'number',
                name: 'new_role_id',
                message: 'Enter the new role ID for the employee:',
            },
        ])
        .then((answers) => {
            const { employee_id, new_role_id } = answers;
            updateEmployeeRole(employee_id, new_role_id)
                .then(() => {
                    console.log('Employee role updated successfully!');
                    callback();
                })
                .catch((error) => {
                    console.error('Error updating employee role:', error);
                    callback();
                });
        });
}

module.exports = {
    viewAllEmployees,
    addEmployee,
    updateEmployeeRole,
};