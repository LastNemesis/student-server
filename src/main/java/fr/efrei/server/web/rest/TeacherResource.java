package fr.efrei.server.web.rest;

import fr.efrei.server.domain.Teacher;
import fr.efrei.server.service.TeacherService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TeacherResource {

    public final TeacherService teacherService;

    public TeacherResource(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    // READ-All Controller
    @GetMapping ("/teachers")
    public List<Teacher> getAllTeachers() {
        return teacherService.findAll();
    }

    // READ teacher based on ID
    @GetMapping("/teachers/{id}")
    public Teacher getTeacherById(@PathVariable String id) {

        Integer parsedId;

        // Parsing the id into Integer
        try {
            // Setting the id
            parsedId = Integer.parseInt(id);

        }catch (NumberFormatException e){
            // Setting the id by default
            parsedId = 0;
        }

        // Getting the Teacher entity in the service
        Teacher teacher = teacherService.getTeacherById(parsedId);

        return teacher;
    }

    // CREATE teacher based on Name, Age (ID auto-incremented)
    @PostMapping("/teacher/create")
    public Teacher createTeacher(@RequestParam String name) {

        // Creating the new teacher
        Teacher teacher = new Teacher();

        // Adding its passed-down variables
        teacher.setName(name);

        // Creating the teacher entity in the service
        Teacher createdTeacher = teacherService.createTeacher(teacher);

        return createdTeacher;
    }

    // UPDATE teacher base on ID for Name and Age
    @PutMapping("/teacher/update/{id}")
    public Teacher updateTeacher(@PathVariable Integer id, @RequestParam String name) {
        Teacher teacher = teacherService.updateTeacher(id, name);
        return teacher;
    }

    // DELETE teacher based on ID
    @DeleteMapping("teacher/delete/{id}")
    public String deleteTeacher(@PathVariable Integer id){
        Integer response = teacherService.deleteTeacher(id);
        if(response==1){
            return "Teacher deleted.";
        }
        return "Teacher not found.";
    }
}
