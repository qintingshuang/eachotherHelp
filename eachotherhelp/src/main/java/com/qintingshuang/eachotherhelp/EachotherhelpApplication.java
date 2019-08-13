package com.qintingshuang.eachotherhelp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//记住要有生成bean的注解，但是不要忘了对这些地方进行扫描
@MapperScan("com.qintingshuang.eachotherhelp.mapper")
@SpringBootApplication
public class EachotherhelpApplication {

    public static void main(String[] args) {
        SpringApplication.run(EachotherhelpApplication.class, args);
    }

}
