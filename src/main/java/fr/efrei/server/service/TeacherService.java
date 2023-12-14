package fr.efrei.server.service;

import fr.efrei.server.domain.Teacher;
import fr.efrei.server.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    // READ-All Service
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    // READ-One Service
    public Teacher getTeacherById(Integer id) {
        return teacherRepository.findById(id).orElse(null);
    }

    // CREATE Service
    public Teacher createTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    // UPDATE Service
    public Teacher updateTeacher(Integer id, String name){
        // Getting the teacher
        Teacher existingTeacher = teacherRepository.findById(id)
                .orElse(null);

        // Setting the found teacher
        if(existingTeacher!=null) {
            existingTeacher.setName(name);
            return teacherRepository.save(existingTeacher);
        }

        // If teacher not found
        return null;
    }

    // DELETE Service
    public Integer deleteTeacher(Integer id){
        // Getting the teacher
        Teacher existingTeacher = teacherRepository.findById(id)
                .orElse(null);

        // Deleting the teacher
        if(existingTeacher!=null) {
            teacherRepository.delete(existingTeacher);
            return 1;
        }

        // If teacher not found
        return 0;
    }
}
