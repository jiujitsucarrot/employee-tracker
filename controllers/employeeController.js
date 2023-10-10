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
    getAllEmployees()
        .then((employees) => {
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
                        type: 'list',
                        name: 'manager_id',
                        message: 'Select the manager for the employee:',
                        choices: employees.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
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
        })
        .catch((error) => {
            console.error('Error fetching employees:', error);
            callback();
        });
}

function updateEmployeeRole(callback) {
    getAllEmployees()
        .then((employees) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'employee_id',
                        message: 'Select the employee to update:',
                        choices: employees.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee_id,
                        })),
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
        })
        .catch((error) => {
            console.error('Error fetching employees:', error);
            callback();
        });
}

module.exports = {
    viewAllEmployees,
    addEmployee,
    updateEmployeeRole,
};