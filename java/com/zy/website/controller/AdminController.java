package com.zy.website.controller;

import com.zy.website.common.AppMD5Util;
import com.zy.website.common.Message;
import com.zy.website.pojo.Admin;
import com.zy.website.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/10/1
 * Time:16:03
 */
@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private  Message message;

    @RequestMapping("/admin/login")
    public Message adminLogin(@RequestBody Admin admin , HttpServletRequest request){
        admin.setPassword(AppMD5Util.getMD5(admin.getPassword()));
        if(adminService.adminLogin(admin) != null){
            HttpSession session = request.getSession();
            //以秒为单位，即在没有活动30分钟后，session将失效
            session.setMaxInactiveInterval(30*60);
            session.setAttribute("admin",admin);
            message.setCode(1);
            return message;
        }else {
            message.setCode(0);
            return message;
        }
    }
}
