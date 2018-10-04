package com.zy.website.dao;
import com.zy.website.pojo.ApplyTime;
import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:48
 */
@Repository
public interface ApplyTimeDao {

    int insertApplyTime(ApplyTime applyTime);

    int deleteApplyTime();

    ApplyTime getApplyTime();
}
