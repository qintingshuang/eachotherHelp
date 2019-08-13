package com.qintingshuang.eachotherhelp.controller;

import com.github.pagehelper.PageInfo;
import com.qintingshuang.eachotherhelp.common.ApiResult;
import com.qintingshuang.eachotherhelp.model.ApplyListDO;
import com.qintingshuang.eachotherhelp.service.ApplyListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-09 19:40
 */
@RestController
@RequestMapping("/apply")
@CrossOrigin //同意跨域调式
public class ApplyListController {
    @Autowired
    ApplyListService applyListService;


    @GetMapping("/list")
    public ApiResult list(@RequestParam("userId") Integer userId){

        PageInfo info= applyListService.applylist(userId);
        // ApiResult 本身就是没有类型的
        // info.getList();

        ApiResult apiResult = new ApiResult(info);
        return apiResult;

    }
}
