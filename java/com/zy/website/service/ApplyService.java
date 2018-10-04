package com.zy.website.service;

import com.zy.website.dao.ApplyDao;
import com.zy.website.pojo.Apply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:10:23
 */
@Service
public class ApplyService {

    @Autowired
    private ApplyDao applyDao;

    //通过studNum去查询Apply
    public Apply getApplyByStudNum(String studNum){
        System.out.println(studNum);
        return applyDao.getApplyByStudNum(studNum);
    }

    //通过studNum去修改对应的Apply
    public int updateApplyByStudNum(Apply apply){
        return applyDao.updateApplyByStudNum(apply);
    }

    //插入一个Apply
    public int insertApply(Apply apply){
        return applyDao.insertApply(apply);
    }

    //根据status获取Apply
    public ArrayList<Apply> getApplyByStatus(int status){
        return applyDao.getApplyByStatus(status);
    }

}
