package fr.efrei.server.web.rest;

import fr.efrei.server.domain.Student;
import fr.efrei.server.repository.StudentRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-test.properties")
public class StudentResourceUT {

    @Autowired
    private StudentRepository studentRepository;

    // Setting global expectation
    private int expectedDatabaseSize = 1;

    @Test
    @Transactional
    void readStudents() throws Exception {

        // Get the size of the database at the beginning
        int databaseSize = studentRepository.findAll().size();

        // Testing if the size is correct
        assertThat(databaseSize).isEqualTo(expectedDatabaseSize);
    }

    @Test
    @Transactional
    void readOneStudent() throws Exception {

        // Get the size of the database at the beginning
        Student studentFound = studentRepository.findById(0).orElse(null);

        // Checking that the student we found is correct
        assertThat(studentFound.getId()).isEqualTo(0);
        assertThat(studentFound.getName()).isEqualTo("Matthew");
        assertThat(studentFound.getAge()).isEqualTo(22);

    }

    @Test
    @Transactional
    void createStudent() throws Exception {

        // Testing if the size of the database before creation is correct
        int size = studentRepository.findAll().size();

        // Creating a student
        Student newStudent = new Student();

        // Adding its attributes
        newStudent.setName("Antoine");
        newStudent.setAge(22);

        // Saving newStudent in repository (adding its id as the same time)
        Student createdStudent = studentRepository.save(newStudent);

        // Checking if the database size has changed
        assertThat(studentRepository.findAll().size()).isEqualTo(size + 1);

        // Checking that the second student is the one we created
        assertThat(createdStudent.getId()).isEqualTo(1);
        assertThat(createdStudent.getName()).isEqualTo("Antoine");
        assertThat(createdStudent.getAge()).isEqualTo(22);

    }

}