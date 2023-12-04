-- Dropping the table (first)
DROP TABLE IF EXISTS student;

-- Dropping the sequence (second)
DROP SEQUENCE IF EXISTS student_sequence;

-- Creating the sequence
CREATE SEQUENCE student_sequence START WITH 0 INCREMENT BY 1;

-- Creating the table
CREATE TABLE IF NOT EXISTS student (
    id INT DEFAULT NEXT VALUE FOR student_sequence PRIMARY KEY,
    name VARCHAR(100),
    age SMALLINT
    );

-- Deleting
DELETE FROM student;

-- Filling the Table with a dummy-entry
INSERT INTO student (name, age) VALUES ('Matthew', 22);