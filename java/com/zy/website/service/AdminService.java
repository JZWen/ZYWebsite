package com.zy.website.service;

import com.zy.website.dao.AdminDao;
import com.zy.website.pojo.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/10/1
 * Time:16:02
 */
@Service
public class AdminService {

    @Autowired
     AdminDao adminDao;

    public Admin adminLogin(Admin admin){
        return adminDao.adminLogin(admin);
    }

}
