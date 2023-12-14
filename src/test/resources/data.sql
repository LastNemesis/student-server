-- Dropping tables                          (first step)
DROP TABLE IF EXISTS grade;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS student;

-- Dropping sequences                       (second step)
DROP SEQUENCE IF EXISTS grade_sequence;
DROP SEQUENCE IF EXISTS course_sequence;
DROP SEQUENCE IF EXISTS teacher_sequence;
DROP SEQUENCE IF EXISTS student_sequence;

-- Creating sequences                       (third step)
CREATE SEQUENCE grade_sequence START WITH 0 INCREMENT BY 1;
CREATE SEQUENCE course_sequence START WITH 0 INCREMENT BY 1;
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
    name VARCHAR(100)
    );
-- -- COURSE
CREATE TABLE IF NOT EXISTS course (
    id INT DEFAULT NEXT VALUE FOR course_sequence PRIMARY KEY,
    name VARCHAR(100),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id)
    );
-- -- GRADE
CREATE TABLE IF NOT EXISTS grade (
    grade_id INT DEFAULT NEXT VALUE FOR grade_sequence PRIMARY KEY,
    type VARCHAR(100),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES student(id),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES course(id),
    grade INT
);

-- DELETE                                   (fifth step)
DELETE FROM grade;
DELETE FROM course;
DELETE FROM student;
DELETE FROM teacher;

-- INSERT                                   (sixth step)
-- STUDENT (INSERT)
INSERT INTO student (name, age) VALUES ('ERROR-STUDENT', 00);
INSERT INTO student (name, age) VALUES ('Dummy', 01);

-- TEACHER (INSERT)
INSERT INTO teacher (name) VALUES ('ERROR-TEACHER');

-- COURSE (INSERT)
INSERT INTO course (name, teacher_id) VALUES ('ERROR-COURSE', 0);

-- GRADE (INSERT)
INSERT INTO grade (type, student_id, course_id, grade) VALUES ('ERROR-GRADE', 0, 0, 0);