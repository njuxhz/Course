package nju.xhz.controller;

import nju.xhz.model.Student;
import nju.xhz.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class StudentController {
    @Autowired
    private IStudentService studentService;

    @GetMapping("/student")
    @ResponseBody
    public List<Student> get() {
        System.out.println("jyb");
        List<Student> studentList = studentService.getAllStudents();
        for(Student s : studentList) {
            System.out.println(s.getId());
        }
        return studentList;
    }

    @PutMapping("/student")
    @ResponseBody
    public int add(@RequestParam(value = "id",defaultValue = "0") String id,
                    @RequestParam(value = "name",defaultValue = "xhz") String name,
                    @RequestParam(value = "major",defaultValue = "computer") String major) {
        System.out.println(id + " " + name + " " + major);
        return 1;
    }

    @PostMapping("/student")
    @ResponseBody
    public int update(@RequestParam(value = "id",defaultValue = "0") String id,
                   @RequestParam(value = "name",defaultValue = "xhz") String name,
                   @RequestParam(value = "major",defaultValue = "computer") String major) {
        System.out.println("xhz " + id + " " + name + " " + major);
        return 1;
    }
}
