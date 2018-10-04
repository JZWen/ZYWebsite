package com.zy.website.controller;

import com.zy.website.common.Message;
import com.zy.website.pojo.Student;
import com.zy.website.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:14:50
 */
@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private Message message;

    public String  putStudent(Student student){
        if (studentService.getStudentByStudNum(student.getStudNum()) == null) {
            //该学生不存在 那就直接插入
            if (studentService.insertStudent(student) == 1) {
                return "插入学生成功";
            } else {
                return "插入学生失败";
            }
        } else {
            //该学生存在 那就直接覆盖这个学生的信息
            if (studentService.updateStudent(student) == 1) {
                return "插入学生成功";
            } else {
                return "插入学生失败";
            }
        }
    }

    @RequestMapping(value = "/getStudent", method = RequestMethod.POST)
    public Object getStudent(@RequestBody Student student){
        ArrayList<Student> studentArrayList = studentService.getStudentByStatus(student.getStatus()) ;
            if(studentArrayList == null){
            return null;
        }else {
            return studentArrayList;
        }
    }

    @RequestMapping( value = "/alterStatus" , method = RequestMethod.POST)
    public Message alterStudent(@RequestBody Student student){

//        //通过status还有studNu
//   m 去修改学生status
//        int status = -1;
//        String studNum = "1";
        int status = student.getStatus();
        String studNum = student.getStudNum();
        Map<String,Object> map = new HashMap<>();
        map.put("status", status);
        map.put("studNum" ,studNum);
        if(studentService.updateStatusByStudNum(map) == 1) {
            message.setCode(1);
            message.setMess("修改成功");
            return message;
        }else{
            message.setCode(0);
            message.setMess("修改失败");
            return message;
        }
    }
}
