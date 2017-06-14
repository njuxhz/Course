package nju.xhz.batch;

import org.springframework.batch.item.ItemProcessor;

public class StudentProcessor implements ItemProcessor<StudentPJ, StudentPJ> {

    @Override
    public StudentPJ process(StudentPJ item) throws Exception {
        System.out.println("Processing..." + item);
        return item;
    }
}