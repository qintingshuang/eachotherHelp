package com.qintingshuang.eachotherhelp.mapper;
import com.qintingshuang.eachotherhelp.model.ApplyListDO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;
import java.util.List;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-09 19:49
 */
@Repository
public interface ApplyListMapper extends Mapper<ApplyListDO> {

    List<ApplyListDO> applylist(@Param("userId") Integer userId);

}
