-- --------------- STUDENT
-- STUDENT (DELETE)
DELETE FROM student;

-- STUDENT (INSERT)
INSERT INTO student (name, age) VALUES ('ERROR-STUDENT', 00);
INSERT INTO student (name, age) VALUES ('Matthew', 22);
INSERT INTO student (name, age) VALUES ('Julie', 22);
INSERT INTO student (name, age) VALUES ('Elena', 22);
INSERT INTO student (name, age) VALUES ('Maxence', 21);
INSERT INTO student (name, age) VALUES ('Lisa', 22);

-- --------------- TEACHER
-- TEACHER (DELETE)
DELETE FROM teacher;

-- TEACHER (INSERT)
INSERT INTO teacher (name) VALUES ('ERROR-TEACHER');
INSERT INTO teacher (name) VALUES ('FILLIOLAUD Pierre-Alexandre');

-- --------------- COURSE
-- COURSE (DELETE)
DELETE FROM course;

-- COURSE (INSERT)
INSERT INTO course (name, teacher_id) VALUES ('ERROR-COURSE', 0);
INSERT INTO course (name, teacher_id) VALUES ('Cloud Integration', 1);

-- --------------- GRADE
-- GRADE (DELETE)
DELETE FROM grade;

-- GRADE (INSERT)
INSERT INTO grade (type, student_id, course_id, grade) VALUES ('ERROR-INSERT', 0, 0, 0);
INSERT INTO grade (type, student_id, course_id, grade) VALUES ('TD', 1, 1, 20);