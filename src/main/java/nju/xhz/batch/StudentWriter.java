package nju.xhz.batch;

import nju.xhz.model.Student;
import nju.xhz.service.IStudentService;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

public class StudentWriter implements ItemWriter<StudentPJ> {
    @Autowired
    private IStudentService studentService;

    @Override
    public void write(List<? extends StudentPJ> list) throws Exception {
        for(StudentPJ s : list) {
            //studentService.saveStudent(new Student(s.getId(), s.getName(), s.getMajor()));
            System.out.println(s.getId());
        }
    }
}