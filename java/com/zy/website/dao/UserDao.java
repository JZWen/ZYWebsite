package com.zy.website.dao;


import com.zy.website.pojo.User;
import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:47
 */
@Repository
public interface UserDao {

    User userLogin(User user);

    int updateUser(User user);
}
