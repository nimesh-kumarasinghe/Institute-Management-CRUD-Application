/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.course;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author DELL
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping(path = "/courses")
    public List<Course> getAllCourse() {
        return courseService.getCourses();
    }

    @GetMapping(path = "/courses/{courseId}")
    public Course getCourseById(@PathVariable int courseId) {
        return courseService.getCoursesById(courseId);
    }

    @PostMapping(path = "/courses")
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }
    
    @DeleteMapping(path = "/courses/{courseId}")
    public void deleteCourseById (@PathVariable int courseId){
       courseService.deleteCourse(courseId);
    }
    
    @PutMapping(path = "/courses")
    public Course updateCourseById(@RequestBody Course course) {
        return courseService.updateCourseInfo(course);
    }
}
