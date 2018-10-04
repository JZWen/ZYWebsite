package com.zy.website.service;

import com.zy.website.dao.SuggestDao;
import com.zy.website.pojo.Suggest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:14:06
 */
@Service
public class SuggestService {

    @Autowired
    private SuggestDao suggestDao;

    public int insertSuggest(Suggest suggest){
        return suggestDao.insertSuggest(suggest);
    }

    public ArrayList<Suggest> getSuggest(){
        return suggestDao.getSuggest();
    }

    public int deleteSuggestByTime(double suggestTime){
        return suggestDao.deleteSuggestByTime(suggestTime);
    }
}
