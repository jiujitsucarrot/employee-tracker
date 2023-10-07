-- Insert departments
INSERT INTO Departments (name) VALUES
    ('HR'),
    ('Engineering'),
    ('Sales'),
    ('Marketing');

-- Insert roles
INSERT INTO Roles (title, salary, department_id) VALUES
    ('HR Manager', 80000, 1),
    ('Software Engineer', 100000, 2),
    ('Sales Associate', 70000, 3),
    ('Marketing Specialist', 75000, 4);

-- Insert Employees
INSERT INTO Employees (first_name, last_name, role_id, manager_id) VALUES
    ('Method', 'Man', 1, NULL),
    ('Bobby', 'Digital', 2, NULL),
    ('Inspectah', 'Deck', 3, 1),
    ('Ghost', 'Face', 4, 2),
    ('Rae', 'Kwon', 2, NULL),
    ('Oh', 'DB', 3, 1),
    ('Uu', 'Gahd', 4, 2),
    ('GZA', 'Genius', 2, NULL),
    ('Cappa', 'Donna', 1, NULL),
    ('Masta', 'Klah', 3, 1);