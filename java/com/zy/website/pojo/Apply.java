package com.zy.website.pojo;

import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:20
 */

public class Apply {

    private String studName;  //姓名

    private String className;  //班级

    private String tec; //感兴趣的技术

    private String email;  //邮箱

    private String studNum;  //学号

    private String knowDeep; //了解多深

    private String knowWe;   //了解工作室吗

    private String pee;   //考研意向

    private String suggest; //建议

    private Date applyTime; //申请时间

    private int jiagou;  //架构

    private int yunying;  //运营

    private int houtai;  //后台

    private int vr;      //vr

    private int qianduan;  //前端

    public Apply(){}

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

        public String getTec() {
            return tec;
        }

        public void setTec(String tec) {
            this.tec = tec;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getStudNum() {
            return studNum;
        }

        public void setStudNum(String studNum) {
            this.studNum = studNum;
        }

        public String getKnowDeep() {
            return knowDeep;
        }

        public void setKnowDeep(String knowDeep) {
            this.knowDeep = knowDeep;
        }

        public String getKnowWe() {
            return knowWe;
        }

        public void setKnowWe(String knowWe) {
            this.knowWe = knowWe;
        }

        public String getPee() {
            return pee;
        }

        public void setPee(String pee) {
            this.pee = pee;
        }

        public String getSuggest() {
            return suggest;
        }

        public void setSuggest(String suggest) {
            this.suggest = suggest;
        }

        public Date getApplyTime() {
            return applyTime;
        }

        public void setApplyTime(Date applyTime) {
            this.applyTime = applyTime;
        }

        public int getJiagou() {
            return jiagou;
        }

        public void setJiagou(int jiagou) {
            this.jiagou = jiagou;
        }

        public int getYunying() {
            return yunying;
        }

        public void setYunying(int yunying) {
            this.yunying = yunying;
        }

        public int getHoutai() {
            return houtai;
        }

        public void setHoutai(int houtai) {
            this.houtai = houtai;
        }

        public int getVr() {
            return vr;
        }

        public void setVr(int vr) {
            this.vr = vr;
        }

        public int getQianduan() {
            return qianduan;
        }

        public void setQianduan(int qianduan) {
            this.qianduan = qianduan;
        }

}
