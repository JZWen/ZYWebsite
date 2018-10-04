package com.zy.website.service;

import com.zy.website.dao.NoticeDao;
import com.zy.website.pojo.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/30
 * Time:16:49
 */
@Service
public class NoticeService {
    @Autowired
    private NoticeDao noticeDao;

    public int insertNotice(Notice notice){
        return noticeDao.insertNotice(notice);
    }
    public int deleteNotice(double publicTime){
        return noticeDao.deleteNotice(publicTime);
    }
    public ArrayList<Notice> getNotice(){
        return noticeDao.getNotice();
    }

    public ArrayList<Notice> getNoticeTop5(){
        return noticeDao.getNoticeTop5();
    }
}
