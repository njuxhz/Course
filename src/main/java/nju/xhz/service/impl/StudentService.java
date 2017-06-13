package nju.xhz.service.impl;

import nju.xhz.model.Student;
import nju.xhz.repository.StudentJpaRepository;
import nju.xhz.repository.StudentRepository;
import nju.xhz.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StudentService implements IStudentService{
    @Autowired
    private StudentJpaRepository studentJpaRepository;
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> getAllStudents() {
        return studentJpaRepository.findAll();
    }
}
