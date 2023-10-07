const Employee = require('../models/Employee');

function createEmployee(req, res) {
    const { first_name, last_name, role_id, manager_id } = req.body;

    Employee.create({ first_name, last_name, role_id, manager_id })
        .then((employee) => {
            res.status(201).json(employee);
        })
        .catch((error) => {
            console.error('Error creating employee:', error);
            res.status(500).json({ error: 'Unable to create employee' });
        });
}

function getAllEmployees(req, res) {
    Employee.findAll()
        .then((employees) => {
            res.status(200).json(employees);
        })
        .catch((error) => {
            console.error('Error retrieving employees:', error);
            res.status(500).json({ error: 'Unable to retrieve employees' });
        });
}

module.exports = {
    createEmployee,
    getAllEmployees,
};