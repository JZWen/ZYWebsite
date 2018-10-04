package com.zy.website.common;

import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:16:26
 */
@Repository
public class Message {
    private Object data;

    private int code;

    private String mess;

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMess() {
        return mess;
    }

    public void setMess(String mess) {
        this.mess = mess;
    }
}
