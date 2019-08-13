package com.qintingshuang.eachotherhelp.controller;

import com.qintingshuang.eachotherhelp.model.TestConnDO;
import com.qintingshuang.eachotherhelp.service.TestConnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@CrossOrigin //同意跨域调式
public class TestConnController {

@Autowired
    TestConnService testConnService;

    @GetMapping("/conn")
    public TestConnDO testConn(@RequestParam("id") Long id ){
     TestConnDO testConnDO=   testConnService.testConnDO(id);
     return  testConnDO;

    }
}
