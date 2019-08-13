package com.qintingshuang.eachotherhelp.service.impl;

import com.qintingshuang.eachotherhelp.mapper.TestConnMapper;
import com.qintingshuang.eachotherhelp.model.TestConnDO;
import com.qintingshuang.eachotherhelp.service.TestConnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestConnServiceImpl implements TestConnService {


    @Autowired
    TestConnMapper testConnMapper;


    @Override
    public TestConnDO testConnDO(Long id) {

        TestConnDO testConnDO= testConnMapper.testConn(id);
        return testConnDO;
    }



}
