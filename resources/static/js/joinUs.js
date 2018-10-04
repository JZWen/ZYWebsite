var email;//邮箱
var name;//姓名
var youClass;//班级
var stuNumber;//学号  账号
var tec="";//感兴趣的技术
var know="";//了解多深
var knowWe="";//了解工作室？
var pee="";//考研意向
var suggest="";//建议
var serverTimestamp1;//服务器设置的提交申请开始时间
var serverTimestamp2;//服务器设置的提交申请结束时间


function frist_next(){
	let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
	name=$.trim($("#name").val());//trim是去掉空格
    youClass=$.trim($("#youClass").val());//获取密码
    stuNumber=$.trim($("#stuNumber").val());//获取密码
    email=$.trim($("#email").val());
    if(get_cookie("nowLogin")==0){
    	layer.alert("请先登录",{
	        title:"提示",
	        icon:0,
		});
	    return;
    }else if(name==""||youClass==""||email==""){
        layer.alert("请填写每一项",{
	        title:"提示",
	        icon:0, 
		});
	    return;
    }else if(!reg.test(email)){
    	layer.alert("请填写正确的邮箱！",{
	        title:"提示",
	        icon:0, 
		});
	    return;
    }else{
    	cookie.set("Qisok",1,3);
    	$("#frist_q").hide();
    	$("#second_q").show();
    }
}

function second_next(){
	var tec_checkBox = document.getElementsByName("tec");
	var know_radio = document.getElementsByName("know");
	var knowWe_radio = document.getElementsByName("knowWe");
	var pee_radio = document.getElementsByName("pee");
	for(var i=0;i<tec_checkBox.length;i++){
		if(tec_checkBox[i].checked==true){
			tec = tec+"1";
		}else{
			tec = tec+"0";
		}
	}
	for(var j=0;j<know_radio.length;j++){
		if(know_radio[j].checked==true){
			know = know_radio[j].value;
		}
	}
	for(var k=0;k<knowWe_radio.length;k++){
		if(knowWe_radio[k].checked==true){
			knowWe = knowWe_radio[k].value;
		}
	}
	for(var m=0;m<pee_radio.length;m++){
		if(pee_radio[m].checked==true){
			pee = pee_radio[m].value;
		}
	}
	if(get_cookie("nowLogin")==0){
    	layer.alert("请先登录",{
        title:"提示",
        icon:0, 
		});
	    return;
   }else if(tec==""||know==""||knowWe==""||pee==""){
		layer.alert("请填写每一个问题",{
        title:"提示",
        icon:0, 
        });
        return;
	}else{
		$("#second_q").hide();
    	$("#sub_q").show();
	}
}

function sub_next(){
	var timestamp = Date.parse(new Date())/1000;
	var fun_sub_next = true;
	/*
	$.ajax({
         type: "POST",
         url: "admin/applyTime",
         data: "",
         contentType: "application/json",
         success: function(data){
         	if(data.beforTime<timestamp||timestamp>data.afterTime){
				layer.alert("不在提交申请的时间内！",{
			        title:"提示",
			        icon:0, 
					});
			    fun_sub_next=false;
			}
         }
    });
	
	if(!fun_sub_next){
		return;
	}*/
	
	
	
	suggest = $("#textArea").val();
	if(get_cookie("nowLogin")==0){
    	layer.alert("请先登录",{
        title:"提示",
        icon:0, 
		});
	    return;
   }else if(suggest==""){
		layer.alert("请给出建议或者输入无",{
        title:"提示",
        icon:0, 
        });
        return;
	}else{
		userName = get_cookie("userName");//获取cookie中的邮箱地址（帐号）传送给服务器
		cookie.set("Qisok",2,1);
		var data={
			studNum:userName,
			studName:name,
			className:youClass,
			tec:tec,
			knowDeep :know,
			knowWe:knowWe,
			pee:pee,
			suggest:suggest,
			email : email
		};

		$.ajax({
	         type: "POST",
	         url: "/putApply",
	         data: JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){

	         	if(data.code==1){
	         		cookie.set("status",2,1);//提交成功后设置status为2代表已提交申请
             		layer.alert("提交成功！",{
				        title:"提示",
				        icon:1, 
				        end:function(){//当点击确定回调执行
				        	document.location.reload();//页面重新加载 显示申请进度条
				        }
			        });
             	}else if(data.code==0){
             		layer.alert("提交失败！",{
				        title:"提示",
				        icon:5, 
			        });
             	}else if(data.code==2){
             		layer.alert("请勿重复提交！",{
				        title:"提示",
				        icon:5, 
			        });
             	}
	         }
	    });
	}
}
function changeDivStyle(o_status){
	if(o_status==1){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
	}else if(o_status==2){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
		$('#check').css('background', 'rgb(57,61,73)');
		$('#checkText').css('color', 'rgb(57,61,73)');
	}else if(o_status==3){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
		$('#check').css('background', 'rgb(57,61,73)');
		$('#checkText').css('color', 'rgb(57,61,73)');
		$('#produce').css('background', 'rgb(57,61,73)');
		$('#produceText').css('color', 'rgb(57,61,73)');
	}else if(o_status==4){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
		$('#check').css('background', 'rgb(57,61,73)');
		$('#checkText').css('color', 'rgb(57,61,73)');
		$('#produce').css('background', 'rgb(57,61,73)');
		$('#produceText').css('color', 'rgb(57,61,73)');
		$('#delivery').css('background', 'rgb(57,61,73)');
		$('#deliveryText').css('color', 'rgb(57,61,73)');
	}else if(o_status==5){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
		$('#check').css('background', 'rgb(57,61,73)');
		$('#checkText').css('color', 'rgb(57,61,73)');
		$('#produce').css('background', 'rgb(57,61,73)');
		$('#produceText').css('color', 'rgb(57,61,73)');
		$('#delivery').css('background', 'rgb(57,61,73)');
		$('#deliveryText').css('color', 'rgb(57,61,73)');
		$('#received').css('background', 'rgb(57,61,73)');
		$('#receivedText').css('color', 'rgb(57,61,73)');
	}else if(o_status==6){
		$('#create').css('background', 'rgb(57,61,73)');
		$('#createText').css('color', 'rgb(57,61,73)');
		$('#check').css('background', 'rgb(57,61,73)');
		$('#checkText').css('color', 'rgb(57,61,73)');
		$('#produce').css('background', 'rgb(57,61,73)');
		$('#produceText').css('color', 'rgb(57,61,73)');
		$('#delivery').css('background', 'rgb(57,61,73)');
		$('#deliveryText').css('color', 'rgb(57,61,73)');
		$('#received').css('background', 'rgb(57,61,73)');
		$('#receivedText').css('color', 'rgb(57,61,73)');
		$('#formal').css('background', 'rgb(57,61,73)');
		$('#formalText').css('color', 'rgb(57,61,73)');
	}
}


$(document).ready(function(){
	
	//cookie.set("status",4,1);//测试用
	var statusCookie = get_cookie("status")
	if(statusCookie==5){
        statusCookie=6;
	}
	if(get_cookie("nowLogin")==1&&statusCookie>1){
		changeDivStyle(statusCookie);
		$("#sop").show();
	}else{
		$("#frist_q").show();
	}
	if(get_cookie("nowLogin")==0){
		$("#frist_q").show();
	}
	var leftPx = (document.getElementById("frist_q").offsetWidth-250)/2;
	$(".frist_q a").css("margin-left",leftPx);
	$(window).resize(function () {
	    leftPx = (document.getElementById("frist_q").offsetWidth-250)/2;
		$(".frist_q a").css("margin-left",leftPx);
	});
	
	/*var leftPx1 = (document.getElementById("sub_q").offsetWidth-250)/2;
	$(".sub_q a").css("margin-left",leftPx1);
	$(window).resize(function () {
	    leftPx1 = (document.getElementById("sub_q").offsetWidth-250)/2;
		$(".sub_q a").css("margin-left",leftPx1);
	});*/
	
	var leftPx2 = (document.getElementById("second_q").offsetWidth-250)/2;
	$(".second_q").css("margin-left",leftPx2);
	$(window).resize(function () {
	    leftPx2 = (document.getElementById("second_q").offsetWidth-250)/2;
		$(".second_q").css("margin-left",leftPx2);
	});
	
	var leftPx3 = (document.body.clientWidth-document.getElementById("frist_q").offsetWidth)/2;
	$("#frist_q").css("left",leftPx3);
	$(window).resize(function () {
	    leftPx3 = (document.body.clientWidth-document.getElementById("frist_q").offsetWidth)/2;
		$("#frist_q").css("left",leftPx3);
	});
	
	var leftPx4 = (document.body.clientWidth-document.getElementById("second_q").offsetWidth)/2;
	$("#second_q").css("left",leftPx4);
	$(window).resize(function () {
	    leftPx4 = (document.body.clientWidth-document.getElementById("second_q").offsetWidth)/2;
		$("#second_q").css("left",leftPx4);
	});
	
	var leftPx5 = (document.body.clientWidth-354)/2;
	$("#sub_q").css("left",leftPx5);
	$(window).resize(function () {
	    leftPx5 = (document.body.clientWidth-354)/2;
		$("#sub_q").css("left",leftPx5);
	});
	
	var leftPx6 = (document.body.clientWidth-document.getElementById("sop").offsetWidth)/2-86;
	$("#sop").css("left",leftPx6);
	$(window).resize(function () {
	    leftPx6 = (document.body.clientWidth-document.getElementById("sop").offsetWidth)/2-86;
		$("#sop").css("left",leftPx6);
	});
})
