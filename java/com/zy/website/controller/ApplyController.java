package com.zy.website.controller;

import com.zy.website.common.Message;
import com.zy.website.dao.StudentDao;
import com.zy.website.pojo.Apply;
import com.zy.website.pojo.Student;
import com.zy.website.service.ApplyService;
import com.zy.website.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.crypto.Data;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:18:58
 */
//关于申请表
@RestController
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @Autowired
    private StudentController studentController;

    @Autowired
    private Message message;
    /**
     * 提交申请
     * @return
     */
    @RequestMapping("/putApply")
    public Message updateApply(@RequestBody Apply apply) {
        apply.setApplyTime(new Date());
        char[] tec = apply.getTec().toCharArray();
        if(tec[0] == '1'){
            apply.setQianduan(1);
        }
        else{
            apply.setQianduan(0);
        }

        if(tec[1] == '1'){
            apply.setHoutai(1);
        }else{
            apply.setHoutai(0);
        }

        if(tec[2] == '1'){
            apply.setJiagou(1);
        }
        else{
            apply.setJiagou(0);
        }

        if(tec[3] == '1'){
            apply.setYunying(1);
        }
        else{
            apply.setYunying(0);
        }

        if(tec[4] == '1'){
            apply.setVr(1);
        }
        else{
            apply.setVr(0);
        }
        Student student = new Student();
        student.setClassName(apply.getClassName());
        student.setEmail(apply.getEmail());
        student.setStatus(2);
        student.setStudName(apply.getStudName());
        student.setStudNum(apply.getStudNum());

        if (applyService.getApplyByStudNum(apply.getStudNum()) == null) {
            System.out.println("meihzaodao1");
            if (applyService.insertApply(apply) == 1) {
                /**
                 * 插入申请表之后,需要进行将信息添加到 student中
                 */
                studentController.putStudent(student);
                message.setCode(1);
                return message;
            } else {
                message.setCode(0);
                return message;
            }
        } else {
            //那说明他就是已经存在之前的申请表 那就修改之前的申请表
            if (applyService.updateApplyByStudNum(apply) == 1) {
                studentController.putStudent(student);
                message.setCode(1);
                message.setMess("覆盖之前是申请表");
                return message;
            }else {
                message.setCode(0);
                message.setMess("覆盖失败");
                return message;
            }
        }

    }


    /***
     * 获取申请表
     * @return
     */
    @RequestMapping(value = "/getApply"  , method = RequestMethod.POST)
    public Object getApply(){
        ArrayList<Apply> applies = applyService.getApplyByStatus(2);
        if(applies == null){
            return null;
        }else {
            Apply apply ;
            for(int i=0; i<applies.size(); i++){
                apply = applies.get(i);
                String tec = "";
                if(apply.getHoutai() == 1){
                    tec += "后台 ";
                }
                if(apply.getJiagou() == 1){
                    tec += "架构 ";
                }
                if(apply.getQianduan() == 1){
                    tec += "前端 ";
                }
                if(apply.getVr() == 1){
                    tec += "VR AR ";
                }
                if(apply.getYunying() == 1){
                    tec += "运营 ";
                }
                apply.setTec(tec);
                applies.set(i,apply);
                apply = null;
            }
            return applies;
        }
    }
}
