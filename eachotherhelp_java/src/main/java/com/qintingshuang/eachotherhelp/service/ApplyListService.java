package com.qintingshuang.eachotherhelp.service;

import com.github.pagehelper.PageInfo;
import com.qintingshuang.eachotherhelp.model.ApplyListDO;

import java.util.List;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-09 19:41
 */
public interface ApplyListService {

    PageInfo<List<ApplyListDO>> applylist(Integer userId);


}
