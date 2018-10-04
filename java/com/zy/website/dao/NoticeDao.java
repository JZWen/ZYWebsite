package com.zy.website.dao;

import com.zy.website.pojo.Notice;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:48
 */
@Repository
public interface NoticeDao {
    int insertNotice(Notice notice);

    int deleteNotice(double publicTime);

    ArrayList<Notice> getNotice();

    ArrayList<Notice> getNoticeTop5();

}
