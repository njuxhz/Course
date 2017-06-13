package nju.xhz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Student {
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
