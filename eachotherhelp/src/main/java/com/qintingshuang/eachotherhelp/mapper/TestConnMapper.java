package com.qintingshuang.eachotherhelp.mapper;

import com.qintingshuang.eachotherhelp.model.TestConnDO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

@Repository
public interface TestConnMapper extends Mapper<TestConnDO> {

    TestConnDO testConn(@Param("id") Long  id);

}
