package com.zy.website.service;

import com.zy.website.dao.ApplyTimeDao;
import com.zy.website.pojo.ApplyTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:16:27
 */
@Service
public class AppleTimeService {

    @Autowired
    private ApplyTimeDao applyTimeDao;
    public int insertApplyTime(ApplyTime applyTime){
        return applyTimeDao.insertApplyTime(applyTime);
    }

    public int deleteApplyTime(){
        return applyTimeDao.deleteApplyTime();
    }

    public ApplyTime getApplyTime(){
        return applyTimeDao.getApplyTime();
    }

}
