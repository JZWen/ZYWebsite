package com.zy.website.controller;

import com.zy.website.common.AppMD5Util;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:14:08
 */
@Controller
public class Path {

    @RequestMapping("/index")
    public String user(){
        return "applyPage";
    }


    @RequestMapping(value = "/test" ,method = RequestMethod.GET)
    public String test(){
        System.out.println("md5");
        AppMD5Util appMD5Util =new AppMD5Util();
        System.out.println(appMD5Util.getMD5("11"));
        return "ok";
    }

}
