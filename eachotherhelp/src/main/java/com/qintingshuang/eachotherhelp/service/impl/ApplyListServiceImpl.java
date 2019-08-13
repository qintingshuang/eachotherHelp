package com.qintingshuang.eachotherhelp.service.impl;

import com.github.pagehelper.PageInfo;
import com.qintingshuang.eachotherhelp.mapper.ApplyListMapper;
import com.qintingshuang.eachotherhelp.model.ApplyListDO;
import com.qintingshuang.eachotherhelp.service.ApplyListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-09 19:50
 */
@Service
public class ApplyListServiceImpl implements ApplyListService {

    @Autowired
    ApplyListMapper applyListMapper;

    //参数化类型定义的方法不需要指明是什么类型
    @Override
    public PageInfo applylist(Integer userId) {

        List<ApplyListDO> applyListDOS= applyListMapper.applylist(userId);

        PageInfo info=new PageInfo(applyListDOS);
        return info;
    }

}
