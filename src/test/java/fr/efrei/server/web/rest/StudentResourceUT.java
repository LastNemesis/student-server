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

    @Test
    @Transactional
    void readStudents() throws Exception {

        // Get the size of the database at the beginning
        int databaseSizeBeforeCreate = studentRepository.findAll().size();

        // Testing if the size is correct
        assertThat(databaseSizeBeforeCreate).isEqualTo(1);
    }

}