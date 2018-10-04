package com.zy.website.service;

import com.zy.website.dao.UserDao;
import com.zy.website.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:16:51
 */
@Service
public class UserService {
    @Autowired
    private UserDao userDao ;

    public User userLogin(User user){
        return userDao.userLogin(user);
    }

    public int updateUser(User user){
        return userDao.updateUser(user);
    }
}
