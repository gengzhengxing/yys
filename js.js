 // 导航栏js 
window.onscroll = function(){
	var header = $1(".header");
	if(document.documentElement.scrollTop >= header.offsetHeight){
		header.style.position = "fixed";
	}
	if(!(document.documentElement.scrollTop >= header.offsetHeight)){
		header.style.position = "relative";
	}
}
// banner图部分选项卡切换
$(".top a").eq(0).click(function(){
	$(".center1").css({
		display:"block"
	});
	$(".tab2").css({
		display:"none"
	});
});
$(".top a").eq(1).click(function(){
	$(".center1").css({
		display:"none"
	});
	$(".tab2").css({
		display:"block"
	});
});
$(".top a").mouseenter(function(){
	$(".top a").removeClass('top-blur');
});
$(".top a").mouseleave(function(){
	$(".top a").addClass('top-blur');
	if($(".tab2").css("display") == "block"){	
		$(".top a").removeClass('top-blur');
		$(".top a").eq(0).addClass('top-blur');
	}
	if($(".center1").css("display") == "block"){
		$(".top a").removeClass('top-blur');
		$(".top a").eq(1).addClass('top-blur');
	}
});
// 轮播图
var next = $("#next");
var prev = $("#prev");
next.css({
	display:"block"
});
prev.css({
	display:"none"
});
next.click(function(){
	if(parseInt($(".centerwrap")[0].style.marginLeft) <= -3060){
		$(".centerwrap").animate({
			"marginLeft": "+=3060px",
		},function(){
			if($(".centerwrap").css("margin-left") == "0px"){
				next.css({
					display:"block"
				});
			}
		});
		return;
	}
	$(".centerwrap").animate({
		"marginLeft": "-=1020px"
	},function(){
		if($(".centerwrap").css("margin-left") == "-3060px"){
			next.css({
				display:"none"
			});
		}else{
			next.css({
				display:"block"
			});
			prev.css({
				display:"block"
			});
		}
	});
});
prev.click(function(){
	if(parseInt($(".centerwrap")[0].style.marginLeft) >= 0){
		$(".centerwrap").animate({
			"marginLeft": "-=3060px"
		},function(){
			if($(".centerwrap").css("margin-left") == "-3060px"){
				prev.css({
					display:"block"
				});
			}
		});
		return;
	}
	$(".centerwrap").animate({
		"marginLeft": "+=1020px"
	},function(){
		if($(".centerwrap").css("margin-left") == "0px"){
			prev.css({
				display:"none"
			});
		}else{
			prev.css({
				display:"block"
			});
			next.css({
				display:"block"
			});
		}
	});
});
var t = setInterval(function(){
	next.click();
},6000);
$(".centerwrap").mouseenter(function(){
	clearInterval(t);
});
$(".centerwrap").mouseleave(function(){
	t = setInterval(function(){
		next.click();
	},6000);
});
// 打开礼包详情
var aGift = $(".gift-top a");
var gifts = $(".tab2-fr-block");
for(var i = 0;i < aGift.length;i++){
	aGift.eq(i).attr("index",i);
}
aGift.mouseenter(function(){
	var _index = $(this).attr("index");
	$(".tab2-fr-block").eq(_index).css({
		display:"block"
	});
});
$(".gift-top a").mouseleave(function(){
	$(".tab2-fr-block").css({
		display:"none"
	});
});
// 角色卡属性分类列表设置自定义index属性
var liList1 = $(".list1 li");
for(var j = 0;j < liList1.length;j++){
	liList1.eq(j).attr("indx",j);
}
// 属性分类列表
$(".detaillist .nonedetail").animate({
	opacity:0
});
liList1.click(function(){
	liList1.removeClass('on');
	$(this).addClass('on');
	var inx = $(this).attr("indx");
	$(".detaillist .nonedetail").removeClass("detailfocus");
	$(".detaillist .nonedetail").eq(inx).addClass('detailfocus');
	$(".detaillist .nonedetail").eq(inx).animate({
		opacity:1
	});
});
// 所有式神列表
$(".part-tab2-all").click(function(){
	$(this).fadeOut();
	$(".list1").fadeIn();
	$(".detaillist").fadeIn();
	$(".zjl").fadeOut();
	$(".detaillist .nonedetail").eq(0).animate({
		opacity:1
	});
});
function nextClick(obj,width,m,previousObj,nextObj){
	if(parseInt($(obj)[0].style.marginLeft) <= -width*m){
		$(obj).animate({
			"marginLeft": "+=" + width*m + "px"
		},function(){
			if($(obj).css("margin-left") == "0px"){
				nextObj.css({
					display:"block"
				});
			}
		});
		return;
	}
	$(obj).animate({
		"marginLeft": "-=" + width + "px"
	},function(){
		if($(obj).css("margin-left") == "-" + width*m + "px"){
			nextObj.css({
				display:"none"
			});
		}else{
			nextObj.css({
				display:"block"
			});
		}
		previousObj.css({
			display:"block"
		});
	});
};
function prevClick(obj,width,m,previousObj,nextObj){
	if(parseInt($(obj)[0].style.marginLeft) >= 0){
		$(obj).animate({
			"marginLeft": "-=" + width*m + "px"
		},function(){
			if($(obj).css("margin-left") == -width*m + "px"){
				previousObj.css({
					display:"block"
				});
			}
		});
		return;
	}
	$(obj).animate({
		"marginLeft": "+=" + width + "px"
	},function(){
		if($(obj).css("margin-left") == "0px"){
			previousObj.css({
				display:"none"
			});
		}else{
			previousObj.css({
				display:"block"
			});
		}
		nextObj.css({
			display:"block"
		});
	});
};
// 式神录
$(".next1").fadeIn();
$(".prev1").fadeOut();
$(".next1").click(function(){
	nextClick(".detailfocus ol",1060,4,$(".prev1"),$(".next1"));
});
$(".prev1").click(function(){
	prevClick(".detailfocus ol",1060,4,$(".prev1"),$(".next1"));
});
$(".next2").fadeIn();
$(".prev2").fadeOut();
$(".next2").click(function(){
	nextClick(".detailfocus ol",1060,1,$(".prev2"),$(".next2"))
});
$(".prev2").click(function(){
	prevClick(".detailfocus ol",1060,1,$(".prev2"),$(".next2"))
});
$(".next3").fadeIn();
$(".prev3").fadeOut();
$(".next3").click(function(){
	nextClick(".detailfocus ol",1060,1,$(".prev3"),$(".next3"))
});
$(".prev3").click(function(){
	prevClick(".detailfocus ol",1060,1,$(".prev3"),$(".next3"))
});
// 式神录
$(".part-tab li").eq(0).click(function(){
	$(".voice").fadeOut();
	if($(".part-tab2-all").css("display") == "block"){
		$(".zjl").fadeIn();
	}else{
		$(".zjl").fadeOut();
	}
	$(".zjl-list").fadeOut();
	$(".part-tab2-detail").fadeIn();
	$(".part-search").fadeIn();
	$(".part-tab li").removeClass('on');
	$(this).addClass('on');
});
// 主角录
$(".part-tab li").eq(1).click(function(){
	$(".voice").fadeOut();
	$(".zjl").fadeIn();
	$(".zjl-list").fadeIn();
	$(".part-tab2-detail").fadeOut();
	$(".part-search").fadeOut();
	$(".part-tab li").removeClass('on');
	$(this).addClass('on')
});
// 主角录=====点击文字显示图片
var aList = $(".zjl-center a");
var nameList = $(".zjl-center .img_name");
var roleList = $(".zjl-center .img_role");
var arrNameList = [];
var topNameList = $(".zjl-list a");
for(var i = 0;i < aList.length;i++){
	topNameList.eq(i).attr('index',i);
	if(arrNameList[i] != aList.eq(i).attr("title")){
		arrNameList.push(aList.eq(i).attr("title"));
	}
}
var next_Name = $(".zjl-right b");
var prev_Name = $(".zjl-left b");
var n = 0;// 当前所处张数
var m = 0;
var dir = "";
function upContent(){
	var index2 = parseInt($(".zjl-list .on").attr('index'));
	n = index2;
	if(dir == "next"){
		if (m == arrNameList.length - 1) {
			m = 0;
		} else{
			m++;
		};
		changeName(m);
		if(!arrNameList[m - 1]){
			prev_Name.html(arrNameList[arrNameList.length - 1]);
		}
		else{
			prev_Name.html(arrNameList[m - 1]);
		}
		if(!arrNameList[m + 1]){
			next_Name.html(arrNameList[0]);
		}
		else{
			next_Name.html(arrNameList[m + 1]);	
		}
	}
	if(dir == "prev"){
		if (m == 0) {
			m = arrNameList.length - 1;
		} else{
			m--;
		};
		changeName(m);
		if(!arrNameList[m - 1]){
			prev_Name.html(arrNameList[arrNameList.length - 1]);
		}
		else{
			prev_Name.html(arrNameList[m - 1]);
		}
		if(!arrNameList[m + 1]){
			next_Name.html(arrNameList[0]);
		}
		else{
			next_Name.html(arrNameList[m + 1]);	
		}
	}
}
function callBack(){
	if(dir == "prev"){
		// 下一组将要显示的图片跟随变化
		if(n <= 0){
			n = 3;
		}else{
			n--;
		}
	}
	if(dir == "next"){
		if(n >= 3){
			n = 0;
		}else{
			n++;
		}
	}
	if(topNameList.eq(n).hasClass('on')){
		nameList.eq(n).animate({
			left:"-20px",
			opacity:1
		},700);
		roleList.eq(n).animate({
			right:"-20px",
			opacity:1
		},700);	
	}	
}
function changeName(x){
	for(var i = 0 ;i < topNameList.length;i++){
		topNameList.removeClass('on');
	}
	topNameList.eq(x).addClass('on');
}
prev_Name.html(arrNameList[arrNameList.length - 1]);
next_Name.html(arrNameList[1]);
nameList.eq(0).animate({
	left:"-20px",
	opacity:1
},700)
roleList.eq(0).animate({
	right:"-20px",
	opacity:1
},700)
$(".zjl-right").click(function(){
	dir = "next";
	upContent();
	// 左边图片角色名跟随变化
	nameList.eq(n).stop().animate({
		left:"-100px",
		opacity:0
	},700)
	// 右边图片角色跟随变化
	roleList.eq(n).stop().animate({
		right:"-100px",
		opacity:0
	},700,callBack)
});
$(".zjl-left").click(function(){
	dir = "prev";
	upContent();
	// 左边图片角色名跟随变化
	nameList.eq(n).stop().animate({
		left:"-100px",
		opacity:0
	},700)
	// 右边图片角色跟随变化
	roleList.eq(n).stop().animate({
		right:"-100px",
		opacity:0
	},700,callBack)
});
topNameList.click(function(){
	var index2 = parseInt($(".zjl-list .on").attr('index'));
	var _index = parseInt($(this).attr("index"));
	changeName(_index);
	if(_index == 0){
		prev_Name.html(arrNameList[arrNameList.length - 1]);
	}
	if(_index == arrNameList.length - 1){
		next_Name.html(arrNameList[0]);
	}
	prev_Name.html(arrNameList[_index - 1]);
	next_Name.html(arrNameList[_index + 1]);
	nameList.eq(index2).stop().animate({
		left:"-100px",
		opacity:0
	},700)
	roleList.eq(index2).stop().animate({
		right:"-100px",
		opacity:0
	},700,function(){
		m = _index;
		if(topNameList.eq(m).hasClass('on')){
			nameList.eq(m).animate({
				left:"-20px",
				opacity:1
			},700);
			roleList.eq(m).animate({
				right:"-20px",
				opacity:1
			},700);
		}
	});
});
// 声优阵
$(".part-tab li").eq(2).click(function(){
	$(".voice").fadeIn();
	$(".zjl").fadeOut();
	$(".part-tab2-detail").fadeOut();
	$(".part-search").fadeOut();
	$(".part-tab li").removeClass('on');
	$(this).addClass('on')
});


// 游戏攻略
var yxgl_tab = $('.yxgl_tab li');
var yxgl_list = $('.yxgl_list');
for(let i = 0;i < yxgl_tab.length;i++){
	yxgl_tab.eq(i).attr('index_tab',i);
}
yxgl_list.eq(0).addClass('on').fadeIn();
var n1 = 0; // 选项卡进入页面时所在张数的索引
// 选项卡切换方法
function autoFn1(){
	n1++;
	if(n1 == yxgl_tab.length){
		n1 = 0;
	}
	yxgl_tab.removeClass('on');
	yxgl_tab.eq(n1).addClass('on');
	yxgl_list.removeClass('on').hide();
	yxgl_list.eq(n1).addClass('on').fadeIn();
};
// 选项卡自动播放
var autoPlay = setInterval(autoFn1,3000);
// 选项卡鼠标进入事件
yxgl_tab.mouseenter(function(){
	if(!$(this).hasClass('on')){
		let index_tab = $(this).attr('index_tab');
		yxgl_tab.removeClass('on');
		$(this).addClass('on');
		yxgl_list.removeClass('on').hide();
		yxgl_list.eq(index_tab).addClass('on').fadeIn();
	}	
});
// 鼠标移入游戏攻略清除计时器
$('.yxgl').mouseenter(function(){
	clearInterval(autoPlay);
});
// 鼠标移出恢复计时器
$('.yxgl').mouseleave(function(){
	n1 = $('.yxgl_tab .on').attr('index_tab');
	autoPlay = setInterval(autoFn1,3000);
});

// 同人手帐
// 左边轮播图
let spanTitleList = $('.ban_num_con span');
let ban_imgList = $('.tr_ban_bb a');
let n2 = 0;
for(let i = 0;i <spanTitleList.length;i++){
	spanTitleList.eq(i).attr("index",i);
}
spanTitleList.click(function(){
	let index4 = $(this).attr('index');
	spanTitleList.removeClass('on');
	$(this).addClass('on');
	ban_imgList.fadeOut();
	ban_imgList.eq(index4).fadeIn('slow');
});
function autoPlay1(){
	n2++;
	if(n2 == ban_imgList.length){
		n2 = 0;
	}
	spanTitleList.removeClass('on');
	spanTitleList.eq(n2).addClass('on');
	ban_imgList.fadeOut();
	ban_imgList.eq(n2).fadeIn('slow');
};
var ban_imgListAutoPlay = setInterval(autoPlay1,4000);
$('.tong_ban').mouseenter(function(){
	clearInterval(ban_imgListAutoPlay);
});
$('.tong_ban').mouseleave(function(){
	let index4 = $('.ban_num_con .on').attr('index');
	n2 = index4;
	ban_imgListAutoPlay = setInterval(autoPlay1,4000);
});
// 右边轮播图
let ulRm_zpList = $('.rm_zp ul');
let refresh = $('.refresh');
let n3 = 0;
function autoPlay2(){
	n3++;
	if(n3 == ulRm_zpList.length){
		n3 = 0;
	}
	ulRm_zpList.fadeOut();
	ulRm_zpList.eq(n3).fadeIn('slow');
};
var ulRm_zpListAutoPlay = setInterval(autoPlay2,4000);
refresh.click(function(){
	autoPlay2();
});
$('.rm_box').mouseenter(function(){
	clearInterval(ulRm_zpListAutoPlay);
});
$('.rm_box').mouseleave(function(){
	ulRm_zpListAutoPlay = setInterval(autoPlay2,4000);
});
// 同人大触
let trdcUlList = $('.dachu_bot ul');
let n4 = 0;
function autoPlay3(){
	n4++;
	if(n4 == trdcUlList.length){
		n4 = 0;
	}
	trdcUlList.fadeOut();
	trdcUlList.eq(n4).fadeIn('slow');
};
var trdcUlListAutoPlay = setInterval(autoPlay3,4000);
refresh.click(function(){
	autoPlay3();
});
$('.trdc').mouseenter(function(){
	clearInterval(trdcUlListAutoPlay);
});
$('.trdc').mouseleave(function(){
	trdcUlListAutoPlay = setInterval(autoPlay3,4000);
});
// 泛娱乐
var ulLeft = $('.fyl_con ul');
var n5 = 0;
$('.fyl_btn_right').click(function(){
	if(n5 < 1){
		$('.fyl_btn_left').show();
	}else{	
		$(this).hide();
	}
	ulLeft.animate({left:-230 * ++n5});
});
$('.fyl_btn_left').click(function(){
	if(n5 > 1){
		$('.fyl_btn_right').show();
	}else{	
		$(this).hide();
	}
	ulLeft.animate({left:-230 * --n5});
});
// 京都商业街
$('.jingdu').bind("mouseenter",function(){
	window.onmousewheel=function(){
	　　	return false;
	}; 
});
$('.jingdu').bind("mouseleave",function(){
	window.onmousewheel=function(){
	　　	return true;
	}; 
});
var n6 = 0;
var jingduUl = $('.jingdu_box ul');
$('.jingdu').bind("mousewheel",function(event){  
	// console.log(event)
    var deltay = event.originalEvent.deltaY;
    if(deltay <= 0){
    	if(n6 <= 0){
    		$('.cursors').animate({left:0});
    		jingduUl.animate({left:0});
    	}else{
    		n6--;
    		$('.cursors').animate({left:50 * n6});
    		jingduUl.animate({left:-270 * n6});
    	}
    }
    if(deltay > 0){
    	if(n6 >= 18){
    		$('.cursors').animate({left:850});
    		jingduUl.animate({left:-4320});
    	}else{
    		n6++;
    		$('.cursors').animate({left:50 * n6});
    		jingduUl.animate({left:-270 * n6});
    	}
    }
});
const intPointXCursors = $('.cursors').offset().left;
$('.cursors').mousedown(function(e){
	const X = e.offsetX;
	
		$('.cursors').mousemove(function(e){
			let pointX = e.clientX;
			if(pointX - X < $('.rails-hr').width() - $('.cursors').width() && pointX-X>0){
				$('.cursors').css({left:pointX - X - intPointXCursors});
				jingduUl.css({left:-270 * (pointX - X - intPointXCursors) / 50});
			}
		});
		$(window).mouseup(function(e){
			$('.cursors').mousemove = null;
		})
	
	
})
// 二维码
var ewm = $('.ewm');
// 获取到页面加载时ewm的左边距
let intPointX = ewm.offset().left;
$(".ewm").mousemove(function(e){
	// 获取光标相对于浏览器左边的距离	
	let pointX = e.clientX;
	if(pointX <= intPointX + 490){
		$(".role-wrap").css("background-position", "0 0");
	}else if(pointX <= intPointX + 540){
		$(".role-wrap").css("background-position", "-203px 0")
	}else if(pointX <= intPointX + 590){
		$(".role-wrap").css("background-position", "-406px 0")
	}else if(pointX <= intPointX + 690){
		$(".role-wrap").css("background-position", "-609px 0")
	}else{
		$(".role-wrap").css("background-position", "-812px 0")
	}
});