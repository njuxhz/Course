package nju.xhz.controller;

import nju.xhz.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ScoreController {
    @Autowired
    private IStudentService studentService;

    @PostMapping("/score")
    @ResponseBody
    public int update(@RequestParam(value = "id",defaultValue = "0") String id,
                      @RequestParam(value = "regular",defaultValue = "0") String regular,
                      @RequestParam(value = "project",defaultValue = "0") String project,
                      @RequestParam(value = "final",defaultValue = "0") String fin,
                      @RequestParam(value = "total",defaultValue = "0") String total) {
        studentService.updateScore(id, Float.parseFloat(regular), Float.parseFloat(project),
                Float.parseFloat(fin), Float.parseFloat(total));
        return 1;
    }
}
