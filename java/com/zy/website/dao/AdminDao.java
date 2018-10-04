package com.zy.website.dao;

import com.zy.website.pojo.Admin;
import org.springframework.stereotype.Repository;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:47
 */
@Repository
public interface AdminDao {

    //管理员登录
    Admin adminLogin(Admin admin);

}
