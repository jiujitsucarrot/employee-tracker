const db = require('../config/connection');

function createEmployee(first_name, last_name, role_id, manager_id) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        db.query(query, [first_name, last_name, role_id, manager_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

function getAllEmployees() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Employees';
        db.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    createEmployee,
    getAllEmployees,
};