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
        List<Student> studentList = studentService.getAllStudents();
        return studentList;
    }

    @PutMapping("/student")
    @ResponseBody
    public int add(@RequestParam(value = "id",defaultValue = "0") String id,
                    @RequestParam(value = "name",defaultValue = "xhz") String name,
                    @RequestParam(value = "major",defaultValue = "computer") String major) {
        boolean isOK = studentService.findById(id);
        if(isOK) {
            Student s = new Student(id, name, major);
            studentService.saveStudent(s);
            return 1;
        }
        return 0;
    }

    @DeleteMapping("/student")
    @ResponseBody
    public int delete(@RequestParam(value = "id",defaultValue = "0") String id) {
        studentService.deleteStudent(id);
        return 1;
    }

    @PostMapping("/student")
    @ResponseBody
    public int update(@RequestParam(value = "id",defaultValue = "0") String id,
                   @RequestParam(value = "name",defaultValue = "xhz") String name,
                   @RequestParam(value = "major",defaultValue = "computer") String major,
                   @RequestParam(value = "regular",defaultValue = "0") String regular,
                   @RequestParam(value = "project",defaultValue = "0") String project,
                   @RequestParam(value = "final",defaultValue = "0") String fin,
                   @RequestParam(value = "total",defaultValue = "0") String total) {
        studentService.deleteStudent(id);
        Student s = new Student(id, name, major, Float.parseFloat(regular), Float.parseFloat(project),
                Float.parseFloat(fin), Float.parseFloat(total));
        studentService.saveStudent(s);
        return 1;
    }
}
