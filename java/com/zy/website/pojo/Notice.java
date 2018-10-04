package com.zy.website.pojo;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:22
 */
public class Notice {

    private String adminName;

    private double publicTime; // 发布时间 时间戳

    private String title;

    private String context;

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public double getPublicTime() {
        return publicTime;
    }

    public void setPublicTime(double publicTime) {
        this.publicTime = publicTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }
}


