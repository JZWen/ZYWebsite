function subFeedback(){
    let titleVal=$("#title option:selected").val();//获取用户名trim是去掉空格
    let textareaVal=$("textarea").val();//获取密码
    if(get_cookie('nowLogin')!=1){
        layer.msg('请先登录',{
            time:1000
        });
        return;
    }
    let userName = get_cookie('userName');
    if(titleVal==""||textareaVal==""){
        layer.alert("请填写详细描述",{
            title:"提示",
            icon:5,
        });
        return;
    }
    let data ={
        studNum :userName,
        suggestTitle :titleVal,
        suggestContext :textareaVal
    }
    
    $.ajax({
         type: "POST",
         url: "/putSuggest",
         data: JSON.stringify(data),
         contentType: "application/json",
         success: function(data){
         	if(data.code==0){
         		layer.alert("提交失败",{
			        title:"提示",
			        icon:5, 
			    });
         	}else if(data.code==1){
         		layer.alert("提交成功",{
			        title:"提示",
			        icon:1, 
			    });
         	}
         }
    })
    
}




$(document).ready(function(){
	
	
	var leftPx3 = (document.body.clientWidth-document.getElementById("feedback").offsetWidth)/2;
	$("#feedback").css("left",leftPx3);
	$(window).resize(function () {
	    leftPx3 = (document.body.clientWidth-document.getElementById("feedback").offsetWidth)/2;
		$("#feedback").css("left",leftPx3);
	});
	
})
