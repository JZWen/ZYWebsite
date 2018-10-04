package com.zy.website.dao;

import com.zy.website.pojo.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/9/29
 * Time:13:48
 */
@Repository
public interface StudentDao {

    //通过studNum还有status去修改学生的状态
    int updateStatusByStudNum(Map map);

    //通过studNum获取status
    Integer getStatusByStudNum(String studNum);

    //通过status找到学生 返回一个ArrayList
    ArrayList<Student> getStudentByStatus(int status);

    //修改学生的信息 通过学号
    int updateStudent(Student student);

    //添加一个学生
    int insertStudent(Student student);

    //通过studNum去查询学生
    Student getStudentByStudNum(String studNum);



}
