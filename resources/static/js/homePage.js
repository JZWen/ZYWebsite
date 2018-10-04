var applyMes=[];//保存所有申请信息
var wEMes=[];//保存所有申请通过人员的信息
var interviewMes=[];//保存所有申请通过人员的信息
var noticeMes=[];//保存所有申请通过人员的信息
var feedBackMes=[];//保存所有申请通过人员的信息
var allMemberMes=[];
//当点击第一个申请审核
function one_div(){
	$('#applyForApproval').show();
	$('#wEForApproval').hide();
	$('#InterviewApproval').hide();
	$('#allNotice').hide();
	$('#allFeedback').hide();
	$('#allMember').hide();
	//请求设定的日期
	$.ajax({
        type: "POST",
        url: "/getApplyTime",
        data:"",
        contentType: "application/json",
        success: function(data){
        	console.log(data);
            $("#beginTime").removeAttr("disabled");
            $("#endTime").removeAttr("disabled");
            console.log(timeToDate(data.beforeTime));
            $("#beginTime").attr("value",timeToDate(data.beforeTime));
            $("#endTime").attr("value",timeToDate(data.afterTime));
            $("#beginTime").attr("disabled","disabled");
            $("#endTime").attr("disabled","disabled");
        }
  	});
  	//请求申请表数据
	$.ajax({
         type: "POST",
         url: "/getApply",
         data:"",
         async:false,
         contentType: "application/json",
         success: function(data){
         	applyMes = data;
         	console.log(applyMes);
         }
   });
   //设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(applyMes.length/18)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			applyExcelChange((page-1)*18);//每页放18个数据项
		}
	});
}
function two_div(){
	$('#applyForApproval').hide();
	$('#wEForApproval').show();
	$('#InterviewApproval').hide();
	$('#allNotice').hide();
	$('#allFeedback').hide();
	$('#allMember').hide();

	//请求已通过申请的数据
	let data = {
		status : 3
	};
	$.ajax({
         type: "POST",
         url: "/getStudent",
         data:JSON.stringify(data),
         async:false,
         contentType: "application/json",
         success: function(data){
         	console.log('date: '+data);
         	wEMes= data;
         }
   });

	//设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(wEMes.length/18)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			wEExcelChange((page-1)*18);//每页放18个数据项
		}
	})
}
function three_div(){
	$('#applyForApproval').hide();
	$('#wEForApproval').hide();
	$('#InterviewApproval').show();
	$('#allNotice').hide();
	$('#allFeedback').hide();
	$('#allMember').hide();

	//请求已通过笔试的数据
    let data = {
        status : 4
    };
	$.ajax({
         type: "POST",
         url: "/getStudent",
         data:JSON.stringify(data),
         async:false,
         contentType: "application/json",
         success: function(data){
         	console.log(data)
         	interviewMes= data;
         }
   });
	//设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(interviewMes.length/18)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			interviewExcelChange((page-1)*18);//每页放18个数据项
		}
	})
}
function four_div(){
	$('#applyForApproval').hide();
	$('#wEForApproval').hide();
	$('#InterviewApproval').hide();
	$('#allNotice').show();
	$('#allFeedback').hide();
	$('#allMember').hide();
	//所有公告

	$.ajax({
         type: "POST",
         url: "/getNotice",
         data:"",
         async:false,
         contentType: "application/json",
         success: function(data){
         	noticeMes= data;
         }
   });
	//设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(noticeMes.length/6)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			noticeExcelChange((page-1)*6);//每页放18个数据项
			layui.use('element', function(){
				var element = layui.element;
				element.init();
			})
		}
	})
}
function five_div(){
	$('#applyForApproval').hide();
	$('#wEForApproval').hide();
	$('#InterviewApproval').hide();
	$('#allNotice').hide();
	$('#allFeedback').show();
	$('#allMember').hide();
	//获取意见反馈
	$.ajax({
         type: "POST",
         url: "/getSuggest",
         data:"",
         async:false,
         contentType: "application/json",
         success: function(data){
         	feedBackMes= data;
         }
   });
	//设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(feedBackMes.length/6)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			feedBackExcelChange((page-1)*6);//每页放18个数据项
			layui.use('element', function(){
				var element = layui.element;
				element.init();
			})
		}
	})
}
function six_div(){
	$('#applyForApproval').hide();
	$('#wEForApproval').hide();
	$('#InterviewApproval').hide();
	$('#allNotice').hide();
	$('#allFeedback').hide();
	$('#allMember').show();
	let data ={
		status : 5
	};
	$.ajax({
         type: "POST",
         url: "/getStudent",
         data: JSON.stringify(data),
         async : false,
         contentType: "application/json",
         success: function(data){
         	console.log(data);
             allMemberMes= data;
         }
   });
	//设置换页导航
	$('#boxApply').paging({
		initPageNo: 1, // 初始页码
		totalPages: Math.floor(allMemberMes.length/18)+1, //总页数
		totalCount:"", // 条目总数
		slideSpeed: 600, // 缓动速度。单位毫秒
		jump: true, //是否支持跳转
		callback: function(page) { // 回调函数
			allMemberExcelChange((page-1)*18);//每页放18个数据项
			layui.use('element', function(){
				var element = layui.element;
				element.init();
			})
		}
	})
}
//当点击添加公告
function addNotice(){
	addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"添加公告",
	    area:["400px","450px"],
	    content:$("#addNotice"),
	    end:function(){
		  $("#addNotice").hide();
		},
    });
	layui.use('element', function(){
		var element = layui.element;
		element.init();
	})
}
//当点击提交公告
function subNotice(){
	var titleVal=$("#title").val();//获取用户名trim是去掉空格
    var textareaVal=$("textarea").val();//获取密码
    if(titleVal==""||textareaVal==""){
        layer.alert("标题或者内容不能为空！",{
        title:"提示",
        icon:5, 
        });
        return;
    }
    var data ={
    	adminName :get_cookie('userName'),
    	title :titleVal,
    	context:textareaVal,
    };
   //添加公告
    $.ajax({
         type: "POST",
         url: "/insertNotice",
         data: JSON.stringify(data),
         contentType: "application/json",
         success: function(data){
         	if(data.code==0){
         		layer.alert("添加失败！",{
			        title:"提示",
			        icon:5, 
			    });
         	}else if(data.code==1){
         		layer.alert("提交成功！",{
				        title:"提示",
				        icon:1, 
				        end:function(){
				        	 $("#addNotice").hide();
				        }
			        });
         	}
         }
    });
}
function changeLength(){
	//动态调整右边div的宽度
	var rightWidth = $('#body1').css('width').substring(0,$('#body1').css('width').indexOf('p'))-154;
	$("#right").css("width",rightWidth);
	$("#tableExcel").css("width",rightWidth);
	$(".box").css("width",rightWidth);
	$(window).resize(function () {
	    rightWidth = $('#body1').css('width').substring(0,$('#body1').css('width').indexOf('p'))-154;
		$("#right").css("width",rightWidth);
		$("#tableExcel").css("width",rightWidth);
		$(".box").css("width",rightWidth);
	});
	
}



function readyAjax(){
	if(get_cookie('nowAdminLogin')!=1){
		layer.alert("请先登录",{
        title:"提示",
        shade:1,
        icon:5,
        end:function(){
        		window.open('applyPage.html','_self');
        	}
       });
       return;
	}
	$('html').show();
	//给浏览器添加滚动条滚动监听
	window.addEventListener("scroll",function(e){
		$('.box').css('bottom','0px');
	});
	document.getElementById("adminName").innerHTML = get_cookie('adminName');
}
//这个函数专门动态该变申请表的表格的内容
function applyExcelChange(index_start){
	$('#applyExceltbody').empty();
    if(applyMes==""){
        return;
    }
	let index_stop = index_start+18;
	while(index_start<index_stop){
		$('#applyExceltbody').append("<tr>"+
		  "<td>"+(index_start+1)+"</td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].studName+"<div class='MALL'>"+applyMes[index_start].studName+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].className+"</div><div class='MALL'>"+applyMes[index_start].className+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].studNum+"</div><div class='MALL'>"+applyMes[index_start].studNum+"</div></td>"+
		  "<td  id='email_td'><div class='MHover'  id='email_td'>"+applyMes[index_start].email+"</div><div class='MALL'>"+applyMes[index_start].email+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].tec+"</div><div class='MALL'>"+applyMes[index_start].tec+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].knowDeep+"</div><div class='MALL'>"+applyMes[index_start].knowDeep+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].knowWe+"</div><div class='MALL'>"+applyMes[index_start].knowWe+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].pee+"</div><div class='MALL'>"+applyMes[index_start].pee+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].suggest+"</div><div class='MALL'>"+applyMes[index_start].suggest+"</div></td>"+
		  "<td><div class='MHover'>"+applyMes[index_start].applyTime+"</div><div class='MALL'>"+applyMes[index_start].applyTime+"</div></td>"+
		  "<td><div class='MHover memberReception' onclick='memberReception(this)'>✔</div></td>"+
		  "<td><div class='MHover memberRefuse' onclick='memberRefuse(this)'>✖</div></td>"+
		"</tr>");
		index_start++;
		if(index_start>=applyMes.length){
			break;
		}
	}
	changeLength();
	dynamicDisplay();
}
//这个函数专门动态该变已通过申请表表格的内容
function wEExcelChange(index_start){
	$('#wEtbody').empty();
    if(wEMes==""){
        return;
    }
	let index_stop = index_start+18;
	while(index_start<index_stop){
		$('#wEtbody').append("<tr>"+
		  "<td>"+(index_start+1)+"</td>"+
		  "<td><div class='MHover'>"+wEMes[index_start].studName+"<div class='MALL'>"+wEMes[index_start].studName+"</div></td>"+
		  "<td><div class='MHover'>"+wEMes[index_start].className+"</div><div class='MALL'>"+wEMes[index_start].className+"</div></td>"+
		  "<td><div class='MHover'>"+wEMes[index_start].studNum+"</div><div class='MALL'>"+wEMes[index_start].studNum+"</div></td>"+
		  "<td  id='email_td'><div class='MHover'  id='email_td'>"+wEMes[index_start].email+"</div><div class='MALL'>"+wEMes[index_start].email+"</div></td>"+
		  "<td><div class='MHover memberReception' onclick='wEReception(this)'>✔</div></td>"+
		  "<td><div class='MHover memberRefuse' onclick='wERefuse(this)'>✖</div></td>"+
		"</tr>");
		index_start++;
		if(index_start>=wEMes.length){
			break;
		}
	}
	changeLength();
	dynamicDisplay();
}
//这个函数专门动态该变面试表格的内容
function interviewExcelChange(index_start){
	$('#interviewtbody').empty();
    if(interviewMes==""){
        return;
    }
	let index_stop = index_start+18;
	while(index_start<index_stop){
		$('#interviewtbody').append("<tr>"+
		  "<td>"+(index_start+1)+"</td>"+
		  "<td><div class='MHover'>"+interviewMes[index_start].studName+"<div class='MALL'>"+interviewMes[index_start].studName+"</div></td>"+
		  "<td><div class='MHover'>"+interviewMes[index_start].className+"</div><div class='MALL'>"+interviewMes[index_start].className+"</div></td>"+
		  "<td><div class='MHover'>"+interviewMes[index_start].studNum+"</div><div class='MALL'>"+interviewMes[index_start].studNum+"</div></td>"+
		  "<td  id='email_td'><div class='MHover'  id='email_td'>"+interviewMes[index_start].email+"</div><div class='MALL'>"+interviewMes[index_start].email+"</div></td>"+
		  "<td><div class='MHover memberReception' onclick='interviewReception(this)'>✔</div></td>"+
		  "<td><div class='MHover memberRefuse' onclick='interviewRefuse(this)'>✖</div></td>"+
		"</tr>");
		index_start++;
		if(index_start>=interviewMes.length){
			break;
		}
	}
	changeLength();
	dynamicDisplay();
}
//这个函数专门动态改变公告的内容
function noticeExcelChange(index_start){
	$('#noticeExcel').empty();
    if(noticeMes==""){
        return;
    }
	let index_stop = index_start+6;
	while(index_start<index_stop){
		$('#noticeExcel').append("<div class='layui-colla-item'>"+
					    "<h2 class='layui-colla-title'>"+noticeMes[index_start].title+"</h2>"+
					    "<div style='height: 4%;width: 100%;background-color: white;'>"+
					    	"<div style='display: inline;text-align: center;'>时间:"+timeToDate(noticeMes[index_start].publicTime,true,8)+"</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
					    	"<div style='display: inline;text-align: center;'>作者:"+noticeMes[index_start].adminName+"</div>"+
					    	"<div id='refresh_div' class='memberRefuse' onclick='deleteNotice(this)'style='float: right;'>✖</div>"+
					    "</div>"+
					    "<div class='layui-colla-content'>"+noticeMes[index_start].context+"</div>"+
					  "</div>");
		index_start++;
		if(index_start>=noticeMes.length){
			break;
		}
	}
	changeLength();
}

//这个函数专门动态改变意见反馈的内容
function feedBackExcelChange(index_start){
	$('#FeedbackExcel').empty();
    if(feedBackMes==""){
        return;
    }
	let index_stop = index_start+6;
	while(index_start<index_stop){
		$('#FeedbackExcel').append("<div class='layui-colla-item'>"+
					    "<h2 class='layui-colla-title'>"+feedBackMes[index_start].suggestTitle+"</h2>"+
					    "<div style='height: 4%;width: 100%;background-color: white;'>"+
					    	"<div style='display: inline;text-align: center;'>时间:"+timeToDate(feedBackMes[index_start].suggestTime,true,8)+"</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
					    	"<div style='display: inline;text-align: center;'>反馈人:"+feedBackMes[index_start].studNum+"</div>"+
					    	"<div id='refresh_div' class='memberRefuse' onclick='deleteFeedback(this)'style='float: right;'>✖</div>"+
					    "</div>"+
					    "<div class='layui-colla-content'>"+feedBackMes[index_start].suggestContext+"</div>"+
					  "</div>");
		index_start++;
		if(index_start>=feedBackMes.length){
			break;
		}
	}
	changeLength();
}
//这个函数专门动态改变正式成员的内容
function allMemberExcelChange(index_start){
	$('#allMembertbody').empty();
    if(allMemberMes==""){
        return;
    }
	let index_stop = index_start+18;
	while(index_start<index_stop){
		$('#allMembertbody').append("<tr>"+
		  "<td>"+(index_start+1)+"</td>"+
		  "<td><div class='MHover'>"+allMemberMes[index_start].studName+"<div class='MALL'>"+allMemberMes[index_start].studName+"</div></td>"+
		  "<td><div class='MHover'>"+allMemberMes[index_start].className+"</div><div class='MALL'>"+allMemberMes[index_start].className+"</div></td>"+
		  "<td><div class='MHover'>"+allMemberMes[index_start].studNum+"</div><div class='MALL'>"+allMemberMes[index_start].studNum+"</div></td>"+
		  "<td  id='email_td'><div class='MHover'  id='email_td'>"+allMemberMes[index_start].email+"</div><div class='MALL'>"+allMemberMes[index_start].email+"</div></td>"+
		  "<td><div class='MHover memberRefuse' onclick='memberDelete(this)'>✖</div></td>"+
		"</tr>");
		index_start++;
		if(index_start>=allMemberMes.length){
			break;
		}
	}
	changeLength();
	dynamicDisplay();
}
//申请表中的拒绝接受事件
function memberReception(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let memberReception = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	  		layer.close(memberReception);
		  	let data = {
				studNum :value,
				status :3
			};

			$.ajax({
		         type: "POST",
		         url: "/alterStatus",
		         data:JSON.stringify(data),
		         contentType: "application/json",
		         success: function(data){
		         	if(data.code==0){
                        layer.msg('操作失败！',{
                            time:1000
                        });
					}else if(data.code==1){
                        $(applyRow.parentElement.parentElement).css('pointer-events','none');
                        $(applyRow.parentElement).css('background','rgb(30,159,255)');
                        layer.msg('操作成功！',{
                            time:1000
                        });
					}

		         	
		         }
		   });
	  }
	});
}
function memberRefuse(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let memberRefuse = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	  	layer.close(memberRefuse);
	  	let data = {
			studNum : value,
			status : -1
		};
		$.ajax({
	         type: "POST",
	         url: "/alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
                }else if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','red');
                    layer.msg('操作成功！',{
                        time:1000
                    });
                }

	         }
	 	});
	  }
	});
}
//笔试中的拒绝接受事件
function wEReception(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let wEReception = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(wEReception);
	    let data = {
			studNum : value,
			status : 4
		};

		$.ajax({
	         type: "POST",
	         url: "/alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
	         	}else if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','rgb(30,159,255)');
                    layer.msg('操作成功！',{
                        time:1000
                    });
                }

	         }
	  });
	  }
	});
}
function wERefuse(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let wERefuse = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(wERefuse);
	    let data = {
			email: value,
			status: -1
		};

		$.ajax({
	         type: "POST",
	         url: "/alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
				}else  if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','red');
                    layer.msg('操作成功！',{
                        time:1000
                    });
				}

	         }
	  });
	  }
	});
}
//面试中的拒绝接受事件
function interviewReception(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let interviewReception = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(interviewReception);
	    let data = {
		studNum :value,
		status :5
		};

		$.ajax({
	         type: "POST",
	         url: "alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
				}else if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','rgb(30,159,255)');
                    layer.msg('操作成功！',{
                        time:1000
                    });
				}

	         }
	   });
	  }
	});
}
function interviewRefuse(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let interviewRefuse = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(interviewRefuse);
	    let data = {
			studNum: value,
			status: -1
		};

		$.ajax({
	         type: "POST",
	         url: "alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
				}else if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','red');
                    layer.msg('操作成功！',{
                        time:1000
                    });
				}

	         }
	  });
	  }
	});
}
//删除公告事件
function deleteNotice(applyRow){
	let value = applyRow.previousElementSibling.previousElementSibling.innerHTML;
	value =value.replace(/-/g,  "/");
	var timeStamp = Date.parse(value)/1000;
	
	let deleteNotice = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(deleteNotice);
		let data = {
			publicTime :timeStamp
		};
		//删除公告
		$.ajax({
	         type: "POST",
	         url: "/deleteNotice",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
				}else if(data.code==1) {
                    $(applyRow.parentElement.parentElement).css('pointer-events', 'none');
                    $(applyRow.parentElement).css('background', 'red');
                    layer.msg('操作成功！',{
                        time:1000
                    });
                }
	         }
	   });
	  }
	});
}
//删除反馈
function deleteFeedback(applyRow){
	let value = applyRow.previousElementSibling.previousElementSibling.innerHTML;
	value =value.replace(/-/g,  "/");
	var timeStamp = Date.parse(value)/1000;
	
	let deleteNotice = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(deleteNotice);
		let data = {
		suggestTime : timeStamp
		};
		$.ajax({
	         type: "POST",
	         url: "/deleteSuggest",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
	         	if(data.code==0){
                    layer.msg('操作失败！',{
                        time:1000
                    });
				}else if(data.code==1){
                    $(applyRow.parentElement.parentElement).css('pointer-events','none');
                    $(applyRow.parentElement).css('background','red');
                    layer.msg('操作成功！',{
                        time:1000
                    });
				}

	         }
	   });
	  }
	});
}
//删除正式成员
function memberDelete(applyRow){
	let value = applyRow.parentElement.previousElementSibling.previousElementSibling.childNodes[0].innerHTML;
	let deleteNotice = layer.open({
	  content: '确认?'
	  ,btn: ['确认']
	  ,yes: function(index, layero){
	    layer.close(deleteNotice);
		let data = {
			studNum: value,
			status: -1
		};
		$.ajax({
	         type: "POST",
	         url: "/alterStatus",
	         data:JSON.stringify(data),
	         contentType: "application/json",
	         success: function(data){
                 if(data.code==0){
                     layer.msg('操作失败！',{
                         time:1000
                     });
                 }else if(data.code==1) {
                     $(applyRow.parentElement.parentElement).css('pointer-events','none');
                     $(applyRow.parentElement).css('background','red');
                     layer.msg('操作成功！',{
                         time:1000
                     });
                 }
	         }
	   });
	  }
	});
}
//当点击更改时间
function changeTime(){
	$("#beginTime").removeAttr("disabled");
	$("#endTime").removeAttr("disabled");
	layer.msg('已启用时间更改',{
		time:1000
	});
}
//突然不想更改时间当点击取消
function cancelChange(){
	$("#beginTime").attr("disabled","disabled");
	$("#endTime").attr("disabled","disabled");
	layer.msg('已禁用时间更改',{
		time:1000
	});
}
//当点击提交时间
function subTime(){
	var endTime = Date.parse($("#endTime").val());
	var beginTime = Date.parse($("#beginTime").val());
	if((isNaN(beginTime))||(isNaN(endTime))){
		layer.msg('请选择时间',{
			time:1000
		});
	    return;
	}
	if(endTime-beginTime<86400){
		layer.alert("间隔时间不能少于一天!",{
	        title:"提示",
	        icon:0, 
		});
	    return;
	}
	let data ={
		adminName : get_cookie('adminName'),
		beforeTime : beginTime,
		afterTime : endTime
	}
    $.ajax({
        type: "POST",
        url: "/updateApplyTime",
        data:JSON.stringify(data),
        contentType: "application/json",
        success: function(data){
        	if(data.code == 1) {
                layer.msg('提交成功',{
                    time:1000
                });
                $("#beginTime").attr("disabled", "disabled");
                $("#endTime").attr("disabled", "disabled");
            }else if(data.code==0){
                layer.msg('提交失败',{
                    time:1000
                });
			}
        }
    });
}


//导航栏的样式设置
function navigation_style(){
	var att = document.getElementsByClassName("li_div");
	var att2 = document.getElementsByClassName("navigation_word");
	var att3 = document.getElementsByClassName("navigation_img");
	$(".li_div").click(function(){
		for(var i = 0;i<att.length;i++){
			if(i==$(this).index()){
				att[i].style.backgroundColor="rgb(33,179,231)";
				att2[i].style.color="white";
			}else{
				att[i].style.backgroundColor="";
				att2[i].style.color="";
			}
		}
	})	
	$("#one_div").trigger("click");
	var ht = $("#get").height();
	var att_div = document.getElementsByClassName("a_div");
	for(var i = 0;i<att_div.length;i++){
		att_div[i].style.lineHeight=ht+"px";
	}
	var min_width = $("#get").height();
	for(var j=0;j<att3.length;j++){
		att[j].style.minWidth=min_width+"px";
	}
}
//超出的文本动态显示
function dynamicDisplay(){
	$(".MALL").hide();
    $(".MHover").mouseover(function (e) {
    	if (this.offsetWidth < this.scrollWidth) {
    		$(this).next(".MALL").show();
    		$(this).next(".MALL").css({ 
	        	"font-size":"14px",
	        	"color": "black",
	        	"position": "absolute", 
	        	"opacity": "1",
	        	"height":"100px",
	        	"width":"150px",
	        	"background":"white"
        	});
    	}
    });
    $(".MHover").mouseout(function () {
        $(this).next(".MALL").hide();
	});
}


$(document).ready(function(){
	readyAjax();//请求数据函数
	dynamicDisplay();//给table中的div添加动态显示效果
	navigation_style();//左侧导航栏当鼠标移动时 样式的调整
	changeLength();//当浏览器缩小或放大动态调整显示长度
})
