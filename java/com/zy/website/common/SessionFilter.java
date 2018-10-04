package com.zy.website.common;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


/**
 * Created with IDEA
 * author:JZWen
 * Date:2018/10/2
 * Time:21:17
 */
@WebFilter(filterName = "sessionFilter",urlPatterns = {"/*"})
public class SessionFilter implements Filter {

    String NO_LOGIN = "您还未登录";

    String[] includeUrls = new String[]{"/getNoticeTop5" ,"/user/login","/admin/login", "/index", "user/alter", "/getStudent"};
    String[] userUrls = new String[]{"/putSuggest","/putApply"};
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = request.getSession(false);
        String uri = request.getRequestURI();

        //System.out.println("filter url:"+uri);
        //是否需要过滤
        boolean needFilter = isNeedFilter(uri);

        //判断是不是用户的请求uri
        boolean userFilter = isUserFilter(uri);

        if (!needFilter || request.getMethod().equals("GET")) { //不需要过滤直接传给下一个过滤器
            System.out.println(uri);
            System.out.println("不需要过滤");
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            // session中包含user对象,则是登录状态
            if (session != null && session.getAttribute("user") != null && !isUserFilter(uri)) {
                System.out.println("user:"+session.getAttribute("user"));
                filterChain.doFilter(request, response);
            } else if (session != null && session.getAttribute("admin") != null){
                System.out.println(uri);
                System.out.println(session.getAttribute("admin"));
                filterChain.doFilter(request, response);
            }else {
                System.out.println("重定向");
                String requestType = request.getHeader("X-Requested-With");
                //判断是否是ajax请求
                if (requestType != null && "XMLHttpRequest".equals(requestType)) {
                    response.getWriter().write(this.NO_LOGIN);
                } else {
                    //我的登录页面请求是 index
                    response.sendRedirect(request.getContextPath() + "index");
                }
                return;
            }
        }
    }
    public boolean  isUserFilter(String uri) {
        for (String userUrls : userUrls) {
            if(userUrls.equals(uri)) {
                return false;
            }
        }
        return true;
    }

    public boolean isNeedFilter(String uri){
        for (String includeUrl : includeUrls) {
            if(includeUrl.equals(uri)) {
                return false;
            }
        }
        return true;
    }

    @Override
    public void destroy() {

    }
}
