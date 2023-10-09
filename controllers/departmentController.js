const inquirer = require('inquirer');
const { getAllDepartments, createDepartment } = require('../models/Department');

const db = require('../config/connection');

function viewAllDepartments(callback) {
    getAllDepartments()
        .then((departments) => {
            console.log('All Departments:');
            console.table(departments);
            callback();
        })
        .catch ((error) => {
            console.error('Error retrieving departments:', error);
            callback();
        });
}

function addDepartment(callback) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
            },
        ])
        .then((answers) => {
            const name = answers.name;
            createDepartment(name)
                .then(() => {
                    console.log('Department added successfully!');
                    callback();
                })
                .catch((error) => {
                    console.error('Error adding department:', error);
                    callback();
                });
        });
}

module.exports = {
    viewAllDepartments,
    addDepartment,
};