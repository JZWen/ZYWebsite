package com.zy.website.pojo;

import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:15
 */

public class User {

    private String studNum;

    private String password;

    public String getStudNum() {
        return studNum;
    }

    public void setStudNum(String studNum) {
        this.studNum = studNum;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
