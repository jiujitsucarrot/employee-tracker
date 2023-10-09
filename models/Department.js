const db = require('../config/connection');

function createDepartment(name) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Departments (name) VALUES (?)';
        db.query(query, [name], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

function getAllDepartments() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Departments';
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
    createDepartment,
    getAllDepartments,
};