package com.qintingshuang.eachotherhelp.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Table(name = "test_conn")
public class TestConnDO  {

    @Id
    @GeneratedValue(generator = "jdbc")
    private Integer testId;

    private String name;

    private Integer age;

}
