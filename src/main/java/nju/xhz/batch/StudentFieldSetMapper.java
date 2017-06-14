package nju.xhz.batch;

import org.springframework.batch.item.file.mapping.FieldSetMapper;
import org.springframework.batch.item.file.transform.FieldSet;
import org.springframework.validation.BindException;

public class StudentFieldSetMapper implements FieldSetMapper<StudentPJ> {

    @Override
    public StudentPJ mapFieldSet(FieldSet fieldSet) throws BindException {
        StudentPJ s = new StudentPJ();
        s.setId(fieldSet.readString(0));
        s.setName(fieldSet.readString(1));
        s.setMajor(fieldSet.readString(2));
        return s;
    }
}
