package fr.efrei.server.domain;

import jakarta.persistence.*;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "coursesSequenceGenerator")
    @SequenceGenerator(name = "coursesSequenceGenerator", sequenceName = "courses_sequence",allocationSize = 1)
    private Integer id;

    private String name;

    // Secondary key
    private String teacher;

    public Course(){
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}
