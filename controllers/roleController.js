const inquirer = require('inquirer');
const { getAllRoles, createRole } = require('../models/Role');

function viewAllRoles(callback) {
    getAllRoles()
        .then((roles) => {
            console.log('All Roles:');
            console.table(roles);
            callback();
        })
        .catch((error) => {
            console.error('Error retrieving roles:', error);
            callback();
        });
}

function addRole(callback) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role:',
            },
            {
                type: 'number',
                name: 'salary',
                message: 'Enter the salary for the role:',
            },
            {
                type: 'number',
                name: 'department_id',
                message: 'Enter the department ID for the role:',
            },
        ])
        .then((answers) => {
            const { title, salary, department_id } = answers;
            createRole(title, salary, department_id)
                .then(() => {
                    console.log('Role added successfully!');
                    callback();
                })
                .catch((error) => {
                    console.error('Error adding role:', error);
                    callback();
                });
        });
}

module.exports = {
    viewAllRoles,
    addRole,
};