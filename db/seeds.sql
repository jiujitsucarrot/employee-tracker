-- Insert departments
INSERT INTO Departments (name) VALUES
    ('Management'),
    ('Engineers'),
    ('Lyricists'),
    ('Marketing');

-- Insert roles
INSERT INTO Roles (title, salary, department_id) VALUES
    ('Agent/Manager', 100000, 1),
    ('Sound Engineer', 250000, 2),
    ('Creative Artists', 1000000, 3),
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