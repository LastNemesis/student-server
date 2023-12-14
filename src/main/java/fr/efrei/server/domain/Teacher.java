package fr.efrei.server.domain;

import jakarta.persistence.*;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "teacherSequenceGenerator")
    @SequenceGenerator(name = "teacherSequenceGenerator", sequenceName = "teacher_sequence", allocationSize = 1)
    private Integer id;

    private String name;

    public Teacher(){
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
}