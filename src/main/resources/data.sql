-- DELETE
DELETE FROM grade;
DELETE FROM course;
DELETE FROM student;
DELETE FROM teacher;

-- STUDENT (INSERT)
INSERT INTO student (name, age) VALUES ('ERROR-STUDENT', 00);
INSERT INTO student (name, age) VALUES ('Matthew', 22);
INSERT INTO student (name, age) VALUES ('Julie', 22);
INSERT INTO student (name, age) VALUES ('Elena', 22);
INSERT INTO student (name, age) VALUES ('Maxence', 21);
INSERT INTO student (name, age) VALUES ('Lisa', 22);

-- TEACHER (INSERT)
INSERT INTO teacher (name) VALUES ('ERROR-TEACHER');
INSERT INTO teacher (name) VALUES ('FILLIOLAUD Pierre-Alexandre');

-- COURSE (INSERT)
INSERT INTO course (name, teacher_id) VALUES ('ERROR-COURSE', 0);
INSERT INTO course (name, teacher_id) VALUES ('Cloud Integration', 1);

-- GRADE (INSERT)
INSERT INTO grade (type, student_id, course_id, grade) VALUES ('ERROR-GRADE', 0, 0, 0);
INSERT INTO grade (type, student_id, course_id, grade) VALUES ('TD', 1, 1, 20);
