const db = require('../connection');

function createRole(title, salary, department_id) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Roles (title, salary, department_id) VALUES (?, ?, ?)';
        db.query(query, [title, salary, department_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

function getAllRoles() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Roles';
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
    createRole,
    getAllRoles,
};