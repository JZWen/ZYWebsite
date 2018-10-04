package com.zy.website.dao;

import com.zy.website.pojo.Suggest;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:48
 */
@Repository
public interface SuggestDao {
    int insertSuggest(Suggest suggest);

    int deleteSuggestByTime(double suggestTime);

    ArrayList<Suggest> getSuggest();
}