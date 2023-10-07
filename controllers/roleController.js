const Role = require('../models/Role');

function createRole(req, res) {
    const { title, salary, department_id } = req.body;

    Role.create({ title, salary, department_id })
        .then((role) => {
            res.status(201).json(role);
        })
        .catch((error) => {
            console.error('Error creating role:', error);
            res.status(500).json({ error: 'Unable to create role' });
        });
}

function getAllRoles(req, res) {
    Role.findAll()
        .then((roles) => {
            res.status(200).json(roles);
        })
        .catch((error) => {
            console.error('Error retrieving roles:', error);
            res.status(500).json({ error: 'Unable to retrieve roles' });
        });
}

module.exports = {
    createRole,
    getAllRoles,
};