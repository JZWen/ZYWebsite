package com.zy.website.controller;

import com.zy.website.common.AppMD5Util;
import com.zy.website.common.Message;
import com.zy.website.pojo.User;
import com.zy.website.service.StudentService;
import com.zy.website.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:16:47
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private Message message;
    @Autowired
    private StudentService studentService;

    @RequestMapping("/login")
    private Message userLogin(@RequestBody User user , HttpServletRequest request ) {
        HttpSession session = request.getSession();
        //以秒为单位，即在没有活动30分钟后，session将失效
        //session.setMaxInactiveInterval(30*60);
        user.setPassword(AppMD5Util.getMD5(user.getPassword()));
        if (userService.userLogin(user) == null) {
            message.setCode(0);
            message.setMess("该用户不存在");
            return message;
        } else {
            session.setAttribute("user",user);
            //从学生表里面去中状态
            Integer status = studentService.getStatusByStudNum(user.getStudNum());
            if (status == null){
                status = 1;
            }
            message.setMess("ok");
            message.setCode(1);
            message.setData(status.intValue());
            return message;
        }
    }


    //user修改信息
    @RequestMapping("/alter")
    public Message alterUser(@RequestBody Map<String , String> map) {
        String studNum = AppMD5Util.getMD5(map.get("studNum"));
        String password = AppMD5Util.getMD5(map.get("password"));
        String newPassword = AppMD5Util.getMD5(map.get("password1"));
        User user1 = new User();
        user1.setStudNum(studNum);
        user1.setPassword(password);
        if(userService.userLogin(user1) != null) {
            user1.setPassword(newPassword);
            user1.setStudNum(studNum);
            if (userService.updateUser(user1) == 1) {
                message.setCode(1);
                message.setMess("ok");
                return message;
            } else {
                message.setCode(0);
                message.setMess("修改失败");
                return message;
            }
        } else {
            message.setCode(0);
            message.setMess("密码错误");
            return message;
        }
    }
}

