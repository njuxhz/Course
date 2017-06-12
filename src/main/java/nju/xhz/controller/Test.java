package nju.xhz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Test {
    @RequestMapping(value = "/test")
    @ResponseBody
    public int test(@RequestParam(value = "id",defaultValue = "0") int param) {
        System.out.println(param);
        return 100;
    }
}
