package com.zy.website.pojo;


/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:29
 */

public class Suggest {
    //private String studName;

    private String suggestTitle;

    private String studNum;

    private String suggestContext;  //建议内容。

    private Double suggestTime;  // 提交建议的时间。

    public String getStudNum() {
        return studNum;
    }

    public void setStudNum(String studNum) {
        this.studNum = studNum;
    }

    public String getSuggestContext() {
        return suggestContext;
    }

    public void setSuggestContext(String suggestContext) {
        this.suggestContext = suggestContext;
    }

    public Double getSuggestTime() {
        return suggestTime;
    }

    public void setSuggestTime(Double suggestTime) {
        this.suggestTime = suggestTime;
    }

    public String getSuggestTitle() {
        return suggestTitle;
    }

    public void setSuggestTitle(String suggestTitle) {
        this.suggestTitle = suggestTitle;
    }
}
