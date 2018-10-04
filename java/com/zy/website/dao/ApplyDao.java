package com.zy.website.dao;


import com.zy.website.pojo.Apply;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:47
 */
@Repository
public interface ApplyDao {

    //通过studNum去查询Apply
    Apply getApplyByStudNum(String studNum);

    //通过studNum去修改对应的Apply
    int updateApplyByStudNum(Apply apply);

    //插入一个Apply
    int insertApply(Apply apply);

    //根据status获取Apply
    ArrayList<Apply> getApplyByStatus(int status);
}
