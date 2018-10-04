var openIndex;
var openAdminIndex;
var signIndex;


$(document).ready(function(){
	console.log('网站开发人员：后台：蒋子文，前端：钟李聪、曾沛');
	cookie.set("nowLogin",0,1);
	cookie.set("nowAdminLogin",0,1);
	//注意：导航 依赖 element 模块，否则无法进行功能性操作
	layui.use('element', function(){
		var element = layui.element;
		element.init();
	})
	//当点击导航栏切换页面
	$(".navigation").click(function(){
		if($(this).index()==0){
			$('iframe').attr("src","firstPage.html");
		}else if($(this).index()==1){
			$('iframe').attr("src","knowUs.html");
		}else if($(this).index()==2){
			$('iframe').attr("src","joinUs.html");
		}else if($(this).index()==3){
			$('iframe').attr("src","feedback.html");
		}
	})
	//设置内联框架的高度
	
})
function showLoginText(){
    openIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"登录",
	    area:["395px","250px"],
	    content:$("#loginBox"),
	    end:function(){
		  $("#loginBox").hide();
		},
    });
}

function showAdminLoginText(){
    openAdminIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"登录",
	    area:["395px","250px"],
	    content:$("#loginAdminBox"),
	    end:function(){
		  $("#loginAdminBox").hide();
		},
    });
}
//当点击登录按钮
function login(){
    var userName=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputUserPwd").val());//获取密码
    if(userName==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
        return;
    }else if(userName.length!=8){
    	layer.alert("请输入正确的学号!",{
        title:"提示",
        icon:5, 
        });
        return;
    }
    var data ={
    	studNum:userName,
    	password:password
    }

    $.ajax({
         type: "POST",
         url: "user/login",
         data: JSON.stringify(data),
         contentType: "application/json",
         success: function(data){
         	console.log(data);
         	if(data.code==0){
         		layer.alert("登录失败！账号或密码错误",{
			        title:"提示",
			        icon:5, 
			    });
         	}else if(data.code==1){
         		cookie.set("userName",userName,1);
         		layer.close(openIndex);
		    	$("#top_ul").hide();
		    	document.getElementById("userName").innerHTML = userName;
		    	$("#top_ul1").show();
		    	cookie.set("nowLogin",1,1);
         	}
         	if(data.data==-1){
         		cookie.set("status",1);
         	}
         	cookie.set("status",data.data);
         }
    });
   //测试用
   /*
   if(userName=="20162461"&&password=="123456"){
   		layer.close(openIndex);
   		$("#top_ul").hide();
   		$("#top_ul1").show();
   		cookie.set("nowLogin",1,1);
   }*/
}

//当管理员点击登录按钮
function adminLogin(){
    var userName=$.trim($("#inputAdminName").val());//获取用户名trim是去掉空格
    var password=$.trim($("#inputAdminPwd").val());//获取密码
    if(userName==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
        return;
    }
    var data ={
    	email:userName,
    	password:password
    }

    $.ajax({
         type: "POST",
         url: "admin/login",
         data: JSON.stringify(data),
         contentType: "application/json",
         success: function(data){
         	if(data.code==0||data.code==-1){
         		layer.alert("登录失败！账号或密码错误",{
			        title:"提示",
			        icon:5, 
			    });
         	}else if(data.code==1){
         		cookie.set("adminName",userName,1);
         		layer.close(openIndex);
		    	$("#top_ul").hide();
		    	document.getElementById("userName").innerHTML = userName;
		    	$("#top_ul1").show();
		    	cookie.set("nowAdminLogin",1,1);
		    	window.open("homePage.html",'_self');
         	}
         }
    });
   //测试用
   /*
   if(userName=="1"&&password=="1"){
   		layer.close(openAdminIndex);
   		cookie.set("userName",1,1);
   		cookie.set("nowAdminLogin",1,1);
   		window.open("homePage.html",'_self');
   }*/
}


//当点击修改按钮
function sign(){
    var username=$.trim($("#InputSignUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputSignUserPwd").val());//获取密码
    var password2=$.trim($("#InputSign2UserPwd").val());//获取再次输入的密码
    if(username==""||password==""||password2==""){
        layer.alert("学号或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
        return;
    }else if(username.length!=8){
    	layer.alert("请输入正确的学号!",{
        title:"提示",
        icon:5, 
        });
        return;
    }
	var data ={
		studNum: username,
		password: password,
		password1: password2
	}

	$.ajax({
         type: "POST",
         url: "user/alter",
         data: JSON.stringify(data),
         contentType: "application/json",
         success: function(data){
         	if(data.code==1){
         		layer.alert("修改成功！",{
			        title:"提示",
			        icon:1, 
		        });
		        layer.close(signIndex);
         	}else if(data.code==0){
         		layer.alert("修改失败！",{
			        title:"提示",
			        icon:5, 
		        });
         	}else if(data.code==2){
         		layer.alert("请输入正确的密码！",{
			        title:"提示",
			        icon:5, 
		        });
         	}
         }
    });
    
}

function showChangePwdText(){
    signIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"修改密码",
	    area:["395px","320px"],
	    content:$("#changePwdBox"),
	    end:function(){
		  $("#changePwdBox").hide();
		},
    });
}
function out(){
	if(get_cookie("Qisok")==1){
		layer.alert("请填写完申请表再退出!",{
        title:"提示",
        icon:5, 
        });
        return;
	}
	$("#top_ul").show();
    $("#top_ul1").hide();
    cookie.set("nowLogin",0,1);
}	