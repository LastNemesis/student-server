package fr.efrei.server.domain;

import jakarta.persistence.*;

@Entity
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gradeSequenceGenerator")
    @SequenceGenerator(name = "gradeSequenceGenerator", sequenceName = "grade_sequence",allocationSize = 1)
    private Integer id;

    private String type;

    // Secondary key
    private String student;

    // Secondary key
    private String course;

    private Integer grade;

    public Grade(){
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStudent() {
        return student;
    }

    public void setStudent(String student) {
        this.student = student;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }
}
