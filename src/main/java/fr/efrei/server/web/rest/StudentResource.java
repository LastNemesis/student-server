package fr.efrei.server.web.rest;

import fr.efrei.server.domain.Student;
import fr.efrei.server.service.StudentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentResource {

    public final StudentService studentService;

    public StudentResource(StudentService studentService) {
        this.studentService = studentService;
    }

    // READ-All Controller
    @GetMapping ("/students")
    public List<Student> getAllStudents() {
        return studentService.findAll();
    }

    // READ student based on ID
    @GetMapping("/students/{id}")
    public Student getStudentById(@PathVariable String id) {

        Integer parsedId;

        // Parsing the id into Integer
        try {
            // Setting the id
            parsedId = Integer.parseInt(id);

        }catch (NumberFormatException e){
            // Setting the id by default
            parsedId = 0;
        }

        // Getting the Student entity
        Student student = studentService.getStudentById(parsedId);

        return student;
    }

    // CREATE student based on ID, Name, Age

    // UPDATE student base on ID for Name and Age

    // DELETE student based on ID

}