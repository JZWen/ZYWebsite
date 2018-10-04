package com.zy.website.controller;

import com.zy.website.common.Message;
import com.zy.website.pojo.Suggest;
import com.zy.website.service.SuggestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:14:09
 */
@RestController
public class SuggestController {

    @Autowired
    private SuggestService suggestService;

    @Autowired
    private Message message;

    @RequestMapping(value = "/putSuggest" , method = RequestMethod.POST)
    public Message putSuggest(@RequestBody Suggest suggest){
        System.out.println("建议时间："+suggest.getSuggestTime());
        double suggestTime = (int)(new Date().getTime()/1000);
        suggest.setSuggestTime(suggestTime);
        if(suggest == null){
            message.setCode(0);
            message.setMess("传输数据为空");
            return message;
        }
        if(suggest.getStudNum() == null){
            message.setCode(0);
            message.setMess("账号为空");
            return message;
        }
        if (suggestService.insertSuggest(suggest) == 0){
            message.setCode(0);
            message.setMess("提交意见失败");
            return message;
        }else{
            message.setCode(1);
            message.setMess("提交意见成功");
            return message;
        }
    }

    @RequestMapping(value = "/getSuggest" , method = RequestMethod.POST)
    public ArrayList<Suggest> getSuggest(){
        ArrayList<Suggest> suggests = suggestService.getSuggest();
        return suggests;
    }

    @RequestMapping(value = "/deleteSuggest" , method = RequestMethod.POST)
    public Message deleteSuggest(@RequestBody Suggest suggest){
        System.out.println(suggest.getSuggestTime());
        if(suggestService.deleteSuggestByTime(suggest.getSuggestTime())==1){
            message.setCode(1);
            return message;
        }else {
            message.setCode(0);
            return message;
        }
    }
}
