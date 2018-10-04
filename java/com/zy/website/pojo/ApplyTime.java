package com.zy.website.pojo;

import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:25
 */
//设置申请的时间
public class ApplyTime {

    private String adminName;

    private double alterTime; // 设置时间

    private double afterTime;  //结束时间 两个时间设置 时间戳

    private double beforeTime;  //开始时间

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public double getAlterTime() {
        return alterTime;
    }

    public void setAlterTime(double alterTime) {
        this.alterTime = alterTime;
    }

    public double getAfterTime() {
        return afterTime;
    }

    public void setAfterTime(double afterTime) {
        this.afterTime = afterTime;
    }

    public double getBeforeTime() {
        return beforeTime;
    }

    public void setBeforeTime(double beforeTime) {
        this.beforeTime = beforeTime;
    }
}