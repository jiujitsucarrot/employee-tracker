const Department = require('../models/Department');

function createDepartment(req, res) {
    const { name } = req.body;

    Department.create({ name })
        .then((department) => {
            res.status(201).json(department);
        })
        .catch((error) => {
            console.error('Error creating department:', error);
            res.status(500).json({ error: 'Unable to create department' });
        });
}

function getAllDepartments(req, res) {
    
    Department.findAll()
        .then((departments) => {
            res.status(200).json(departments);
        })
        .catch((error) => {
            console.error('Error retrieving departments:', error);
            res.status(500).json({ error: 'Unable to retrive departments' });
        });
}

module.exports = {
    createDepartment,
    getAllDepartments,
};