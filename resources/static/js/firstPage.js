var noticeMes=[];//保存最新的5条公告信息
var allMemberMes=[];//保存最新的5条公告信息




function readyAjax(){
	let data={
		status:5
	}
  $.ajax({
         type: "POST",
         url: "/getStudent",
         data: JSON.stringify(data),
	     async:false,
         contentType: "application/json",
         success: function(data){
         	allMemberMes = data;
         }
   });
    $.ajax({
        type: "POST",
        url: "/getNoticeTop5",
        data:"",
        async:false,
        contentType: "application/json",
        success: function(data){
            noticeMes= data;
        }
    });
  $('#news_ul').empty();
  for(let i=0;i<noticeMes.length;i++){
  	switch(i){
  		case 0: $('#news_ul').append("<li><a class='tab_title' onclick='showOneNotice();'>"+noticeMes[i].title+"</a><span>"+timeToDate(noticeMes[i].publicTime,false,8)+"</span></li>");
  				break;
  		case 1: $('#news_ul').append("<li><a class='tab_title' onclick='showTwoNotice();'>"+noticeMes[i].title+"</a><span>"+timeToDate(noticeMes[i].publicTime,false,8)+"</span></li>");
  				break;
  		case 2: $('#news_ul').append("<li><a class='tab_title' onclick='showThreeNotice();'>"+noticeMes[i].title+"</a><span>"+timeToDate(noticeMes[i].publicTime,false,8)+"</span></li>");
  				break;
  		case 3: $('#news_ul').append("<li><a class='tab_title' onclick='showFourNotice();'>"+noticeMes[i].title+"</a><span>"+timeToDate(noticeMes[i].publicTime,false,8)+"</span></li>");
  				break;
  		case 4: $('#news_ul').append("<li><a class='tab_title' onclick='showFiveNotice();'>"+noticeMes[i].title+"</a><span>"+timeToDate(noticeMes[i].publicTime,false,8)+"</span></li>");
  				break;
  	}
  }
  for(let i =0;i<noticeMes.length;i++){
  	switch(i){
  		case 0:$('#addNotice1').show();
  				$('#addNotice1').append(""+
		  			"<div class='addNotice-item'><input  type='text' id='title'placeholder='标题' value="+noticeMes[i].title+"></div><br />"+
			   		"<div class='addNotice-item'><textarea placeholder='正文'>"+noticeMes[i].context+"</textarea></div>")
  				$('#addNotice1').hide();
  				break;
  		case 1:$('#addNotice2').show();
  				$('#addNotice2').append(""+
		  			"<div class='addNotice-item'><input  type='text' id='title'placeholder='标题' value="+noticeMes[i].title+"></div><br />"+
			   		"<div class='addNotice-item'><textarea placeholder='正文'>"+noticeMes[i].context+"</textarea></div>")
  				$('#addNotice2').hide();
  				break;
  		case 2:$('#addNotice3').show();
  				$('#addNotice3').append(""+
		  			"<div class='addNotice-item'><input  type='text' id='title'placeholder='标题' value="+noticeMes[i].title+"></div><br />"+
			   		"<div class='addNotice-item'><textarea placeholder='正文'>"+noticeMes[i].context+"</textarea></div>")
  				$('#addNotice3').hide();
  				break;
  		case 3:$('#addNotice4').show();
  				$('#addNotice4').append(""+
		  			"<div class='addNotice-item'><input  type='text' id='title'placeholder='标题' value="+noticeMes[i].title+"></div><br />"+
			   		"<div class='addNotice-item'><textarea placeholder='正文'>"+noticeMes[i].context+"</textarea></div>")
  				$('#addNotice4').hide();
  				break;
  		case 4:$('#addNotice5').show();
  				$('#addNotice5').append(""+
		  			"<div class='addNotice-item'><input  type='text' id='title'placeholder='标题' value="+noticeMes[i].title+"></div><br />"+
			   		"<div class='addNotice-item'><textarea placeholder='正文'>"+noticeMes[i].context+"</textarea></div>")
  				$('#addNotice5').hide();
  				break;
  	}
  }
}


function showOneNotice(){
	let addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"公告",
	    area:["400px","400px"],
	    content:$("#addNotice1"),
	    end:function(){
		  $("#addNotice1").hide();
		},
    });
}
function showTwoNotice(){
	let addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"公告",
	    area:["400px","400px"],
	    content:$("#addNotice2"),
	    end:function(){
		  $("#addNotice2").hide();
		},
    });
}
function showThreeNotice(){
	let addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"公告",
	    area:["400px","400px"],
	    content:$("#addNotice3"),
	    end:function(){
		  $("#addNotice3").hide();
		},
    });
}

function showFourNotice(){
	let addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"公告",
	    area:["400px","400px"],
	    content:$("#addNotice4"),
	    end:function(){
		  $("#addNotice4").hide();
		},
    });
}
function showFiveNotice(){
	let addNoticeIndex = layer.open({
	    type:1,
	    shade:0.5,
	    title:"公告",
	    area:["400px","400px"],
	    content:$("#addNotice5"),
	    end:function(){
		  $("#addNotice5").hide();
		},
    });
}



$(document).ready(function(){
	readyAjax();
	let oDiv;
	let aA;
	let i;
	var timer;
	layui.use('carousel', function(){
		  var carousel = layui.carousel;
		  //建造实例
		  carousel.render({
		    elem: '#test1',
		    width: '75%',//设置容器宽度,
		    height:'420px',
		    arrow: 'always',//始终显示箭头,
		    anim: 'fade',//切换动画方式
		    interval:'4500',
		    autoplay:false,
		  });
		  carousel.on('change(test1)', function(obj){ //test1来源于对应HTML容器的 lay-filter="test1" 属性值
			  if(obj.index==3){
			  		$('#we').empty();
			  		for(i=0;i<allMemberMes.length;i++){
				  		$('#we').append("<a href='#' class='everyone'>"+allMemberMes[i].studName+"-"+allMemberMes[i].className+"</a>");
			  		}
			  		$('#we').append("<a href='#' class='everyone'>VR卓越工作室正式成员</a>");
					oDiv = document.getElementById('we');
					aA = document.getElementsByClassName('everyone');
					for (i = 0; i < aA.length; i++) {
						aA[i].pause = 1;
						aA[i].time = null;
						initialize(aA[i]);
						aA[i].onmouseover = function() {
							this.pause = 0;
						};
						aA[i].onmouseout = function() {
							this.pause = 1;
						};
					}
					timer = setInterval(starmove, 50);
				}else{
					clearInterval(timer);
				}
			});

	});
	var leftPx = (document.body.clientWidth-document.getElementById("test1").offsetWidth)/2;
	$("#test1").css("left",leftPx);
	$(window).resize(function () {
	    leftPx = (document.body.clientWidth-document.getElementById("test1").offsetWidth)/2;
		$("#test1").css("left",leftPx);
	});
	
	function starmove() {
		for (i = 0; i < aA.length; i++) {
			if (aA[i].pause) {
				domove(aA[i]);
			}
		}
	}

	function domove(obj) {
		if (obj.offsetTop <= -obj.offsetHeight) {
			obj.style.top = oDiv.offsetHeight + "px";
			initialize(obj);
		} else {
			obj.style.top = obj.offsetTop - obj.ispeed + "px";
		}
	}

	function initialize(obj) {
		var iLeft = parseInt(Math.random() * oDiv.offsetWidth);
		var scale = Math.random() * 1 + 1;
		var iTimer = parseInt(Math.random() * 1500);
		obj.pause = 0;

		obj.style.fontSize = 12 * scale + 'px';

		if ((iLeft - obj.offsetWidth) > 0) {
			obj.style.left = iLeft - obj.offsetWidth + "px";
		} else {
			obj.style.left = iLeft + "px";
		}
		clearTimeout(obj.time);
		obj.time = setTimeout(function() {
			obj.pause = 1;
		}, iTimer);
		obj.ispeed = Math.ceil(Math.random() * 4) + 1;
	}
})
