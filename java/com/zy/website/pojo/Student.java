package com.zy.website.pojo;

import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:34
 */

public class Student {

    private String studNum;

    private String studName;

    private String className;

    private String email;

    private int status;

    public String getStudNum() {
        return studNum;
    }

    public void setStudNum(String studNum) {
        this.studNum = studNum;
    }

    public String getStudName() {
        return studName;
    }

    public void setStudName(String studName) {
        this.studName = studName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
