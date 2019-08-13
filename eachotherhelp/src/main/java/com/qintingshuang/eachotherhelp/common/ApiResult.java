package com.qintingshuang.eachotherhelp.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

/**
 * @description:
 * @author: qintingshuang
 * @date: 2019-04-07 21:48
 */

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResult<T> extends BaseResult {
private List<T> datas;
private T Data;

public ApiResult(){};

public ApiResult(List<T> datas){
    this.datas=datas;
}

public ApiResult(T data){
    this.Data=data;
}

public ApiResult(String Code,Boolean success){
    this.code=code;
    this.success=success;
}


}
