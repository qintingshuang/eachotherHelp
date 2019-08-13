package com.qintingshuang.eachotherhelp.common;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import java.io.Serializable;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-07 21:11
 */
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseResult implements Serializable {

    private static final long serialVersionUID=1L;

    public String code="200";

    public Boolean success=true;


}
