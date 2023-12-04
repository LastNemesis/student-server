# Student-server

This is the backend of the graded Cloud Integration Project

## Table of Contents

- [Project Name](#Student-server)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

# Description

This project goal is to have a web service able to create, read, update and delete student of the database.

This project is developed in Java 17.

# Features

1. **As a User, I should see a default web service ;**
    - Creation of StudentResource.java in fr.efrei.server.web.rest
    - Creation of Hello world in a test method
    - Updating the settings.gradle to fix gradle compilation
    - Gradle compilation (_gradlew_) & Gradle run (_gradlew bootRun_)
    - Adding the GitHub Action for all branches
2. **Add an H2 database for the Students entity ;**
    - Filing the application.properties with the H2 database parameters in fr.efrei.resources
3. **Create a Student entity ;**
    - Student (ID, Name, age)
        - By creating the entity with its getters and setters in fr.efrei.server.domain
        - By creating the schema of the SQL Table in fr.efrei.resources
        - By creating the data file for the schema in fr.efrei.resources
        - By filling the data with a test row in fr.efrei.resources.data.sql
    - Creating the StudentRepository interface crespository
    - Creating the first service in fr.efrei.server.service
    - Editing the StudentReource in fr.efrei.server.web.rest
        - Adding the feature that allows to read all the students of the database
        - Adding the feature that creates a read-only student depending on the ID
4. **Create the CRUD features for the Student entity**
    - (C) Create
        - Adding the CREATE not persisted method - GET
            - http://http://localhost:8080/api/studentsCreate/Matthew/22
        - Adding the CREATE persisted method (Controller) - POST
        - Adding the CREATE persisted method (Service) - POST
        - Creating the sequence for the auto-incremented ID
            - /!\ Require the use of a RESTful service (Extension RESTClient for Mozilla Firefox)
            - curl -X POST 'http://localhost:8080/api/student/create?name=John&age=22'
    - (R) Read
        - Partially implemented in feature n°3
        - Refactor of the READ-One method
        - Creation of getStudentById in studentResource and studentService
        - curl -X GET -i http://localhost:8080/api/students
        - curl -X GET -i http://localhost:8080/api/students/1
    - (U) Update
        - Adding the UPDATE persisted method
        - Adding a error-handler by returning null if student not found
        - curl -X PUT -i 'http://localhost:8080/api/student/update/1?name=Matt&age=23'
    - (D) Delete
        - Adding the DELETE persisted method
        - Adding a error-handler by returning 0/a message if student not found
        - curl -X DELETE -i http://localhost:8080/api/student/delete/17
5. **Create the test unit for each of the repository methods**
   - readStudents
   - readOneStudent
   - createStudent
   - updateStudent
   - deleteStudent
6. **Package the project in a Docker file.**

# Contributing

Matthew DAVID, Student of M2-Digital Transformation

# License

Copyright (c) 2023 - StudentServer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Acknowledgments

_None_
