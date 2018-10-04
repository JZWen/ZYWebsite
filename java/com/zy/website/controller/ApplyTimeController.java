package com.zy.website.controller;

import com.zy.website.common.Message;
import com.zy.website.pojo.Apply;
import com.zy.website.pojo.ApplyTime;
import com.zy.website.service.AppleTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:16:29
 */
@RestController
public class ApplyTimeController {
    @Autowired
    private AppleTimeService appleTimeService;

    @Autowired
    private Message message;

    @RequestMapping(value = "/updateApplyTime"  , method = RequestMethod.POST)
    public Message updateAppleTime(@RequestBody ApplyTime applyTime){
        applyTime.setAfterTime(applyTime.getAfterTime()/1000);
        applyTime.setBeforeTime(applyTime.getBeforeTime()/1000);
        applyTime.setAlterTime(Calendar.getInstance().getTimeInMillis()/1000);
        if(appleTimeService.deleteApplyTime() == 1) {
            if (appleTimeService.insertApplyTime(applyTime) == 1) {
                message.setCode(1);
                return message;
            } else {
                message.setCode(0);
                return message;
            }
        }else {
            message.setCode(0);
            return message;
        }
    }

    @RequestMapping(value = "/getApplyTime"  , method = RequestMethod.POST)
    public ApplyTime getApplyTime(){
        ApplyTime applyTime ;
        applyTime = appleTimeService.getApplyTime();
        return applyTime;
    }
}
