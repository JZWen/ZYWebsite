package com.zy.website.service;

import com.zy.website.dao.StudentDao;
import com.zy.website.pojo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:17:16
 */
@Service
public class StudentService {
    @Autowired
    private StudentDao studentDao;

    public int updateStatusByStudNum(Map map){
        return studentDao.updateStatusByStudNum(map);
    }

    public ArrayList<Student> getStudentByStatus(int status){
        return studentDao.getStudentByStatus(status);
    }

    //通过studNum 找 status
    public Integer getStatusByStudNum(String studNum){
        return studentDao.getStatusByStudNum(studNum);
    }

    //通过studNum  去找这个 student
    public Student getStudentByStudNum(String studNum){
        return studentDao.getStudentByStudNum(studNum);
    }

    public int updateStudent(Student student){
        return studentDao.updateStudent(student);
    }

    public int insertStudent(Student student){
        return studentDao.insertStudent(student);
    }



}
