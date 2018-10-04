package com.zy.website.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.zy.website.common.Message;
import com.zy.website.pojo.Notice;
import com.zy.website.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:16:53
 */
@RestController
public class NoticeController {
    @Autowired
    private NoticeService noticeService;

    @Autowired
    private Message message;

    @RequestMapping(value = "/getNotice" , method = RequestMethod.POST)
    public ArrayList<Notice> getNotice(){
        return noticeService.getNotice();
    }

    @RequestMapping(value = "/insertNotice" , method = RequestMethod.POST)
    public Message insertNotice(@RequestBody Notice notice){
        notice.setPublicTime(new Date().getTime()/1000);
        if (noticeService.insertNotice(notice) == 1){
            message.setCode(1);
            message.setMess("提交公告成功");
            return message;
        }else{
            message.setCode(0);
            message.setMess("提交公告失败");
            return message;
        }
    }

    @RequestMapping(value = "/deleteNotice"  , method = RequestMethod.POST)
    public Message deleteNotice(@RequestBody Notice notice){
        if(noticeService.deleteNotice(notice.getPublicTime()) == 1 ){
            message.setCode(1);
            return message;
        }else{
            message.setCode(0);
            return message;
        }
    }

    @RequestMapping(value = "/getNoticeTop5")
    public Object getNoticeTop5(){
        return noticeService.getNoticeTop5();
    }
}
