-- Dropping tables                          (first step)
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS grade;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS student;

-- Dropping sequences                       (second step)
DROP SEQUENCE IF EXISTS course_sequence;
DROP SEQUENCE IF EXISTS grade_sequence;
DROP SEQUENCE IF EXISTS teacher_sequence;
DROP SEQUENCE IF EXISTS student_sequence;

-- Creating sequences                       (third step)
CREATE SEQUENCE course_sequence START WITH 0 INCREMENT BY 1;
CREATE SEQUENCE grade_sequence START WITH 0 INCREMENT BY 1;
CREATE SEQUENCE teacher_sequence START WITH 0 INCREMENT BY 1;
CREATE SEQUENCE student_sequence START WITH 0 INCREMENT BY 1;

-- Creating tables                          (fourth step)
-- -- STUDENT
CREATE TABLE IF NOT EXISTS student (
    id INT DEFAULT NEXT VALUE FOR student_sequence PRIMARY KEY,
    name VARCHAR(100),
    age SMALLINT
);
-- -- TEACHER
CREATE TABLE IF NOT EXISTS teacher (
    id INT DEFAULT NEXT VALUE FOR teacher_sequence PRIMARY KEY,
    name VARCHAR(100),
);
-- -- GRADE
CREATE TABLE IF NOT EXISTS grade (
    id INT DEFAULT NEXT VALUE FOR grade_sequence PRIMARY KEY,
    type VARCHAR(100),
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (course_id) REFERENCES course(id),
    grade INT
);
-- -- COURSE
CREATE TABLE IF NOT EXISTS course (
    id INT DEFAULT NEXT VALUE FOR course_sequence PRIMARY KEY,
    name VARCHAR(100),
    FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);