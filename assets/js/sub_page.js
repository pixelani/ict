



// 스크롤에 따른 progress-bar 업데이트 함수
function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myProgressBar").style.width = scrolled + "%";
}

// 스크롤 이벤트에 함수 연결
window.onscroll = function() {
    updateProgressBar();
};












// 메인메뉴 컨트롤 ~~~~



$(function(){
	$(".submenu").hover(function(){
		var index = $(this).index();
		$("#head_nav > ul > li").children('a').removeClass('hover_on');
		$("#head_nav > ul > li").eq((index * 2 + 1)).children('a').addClass('hover_on');
	}, function(){
		var index = $(this).index();
		$("#head_nav > ul > li").children('a').removeClass('hover_on');
	});
});

// var height = '350';
function viewFullMenu(){
	//전체 메뉴 닫혀있을 때 실행

		$("#head_nav .fulldown").css({'z-index':'1', 'padding-top':'50px'});
		$("#head_nav .fulldown").stop().animate({
			'height': '270px'
		}, 270, 'linear');
		

}
//전체 메뉴 열려있고 전체 메뉴 마우스 벗어날 때 실행
function hideFullMenu(){

		$("#head_nav .fulldown").stop().animate({

			'height': '0'
		}, 270, 'linear', function(){

			$("#head_nav .fulldown").css({'z-index':'0', 'padding-top':'49px'});

		});
		

// 	}
}









