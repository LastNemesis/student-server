package fr.efrei.server.service;

import fr.efrei.server.domain.Student;
import fr.efrei.server.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    public final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // READ-All Service
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    // READ-One Service
    public Student getStudentById(Integer id) {
        return studentRepository.findById(id).orElse(null);
    }

    // CREATE Service
    public Student createStudent(Student student){
        return studentRepository.save(student);
    }

    // UPDATE Service

    // DELETE Service



}