$(document).ready(function () {
	//nav
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll > 1) {
			$('#headerArea')
				.css('background-color', 'white')
				.css('box-shadow', '0 0 5px 0 #ccc');
			$('.menu_open').css('color', 'black');
			$('h1').css('background-image', 'url(images/logo640.png)');
		} else {
			$('#headerArea')
				.css('background-color', 'transparent')
				.css('box-shadow', 'none');
			$('.menu_open').css('color', '');
			$('h1').css('background-image', 'url(images/logo640_white.png)');
		}
	});

	//gnb
	var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
	$('.menu_open').click(function (e) {
		e.preventDefault();
		var documentHeight = $(document).height();
		$('#gnb').css('height', documentHeight);
		if (op == false) {
			$('#gnb').animate({ right: 0, opacity: 1 }, 200);
			$('#headerArea').css('background-color', 'white');
			$('h1').css('background-image', 'url(images/logo640.png)');
			$('.menu_open').css('color', 'black');
			$('.menu_open i').attr('class', 'fas fa-times');
			$('body').css({ overflow: 'hidden', height: '100' });
			op = true;
		} else {
			$('#gnb').animate({ right: '-100%', opacity: 0 }, 'fast');
			if ($(window).scrollTop() <= 1) {
				$('#headerArea').css('background-color', '');
				$('h1').css('background-image', 'url(images/logo640_white.png)');
				$('.menu_open').css('color', '');
			}
			$('.menu_open i').attr('class', 'fas fa-bars');
			$('body').css({ overflow: '', height: '' });
			op = false;
		}
	});
	//2depth 메뉴 교대로 열기 처리
	var onoff = [false, false, false, false];
	var arrcount = onoff.length;
	$('.mainmenu h3 a').click(function (e) {
		e.preventDefault();
		var ind = $(this).parents('li').index();
		if (onoff[ind] == false) {
			//$('#gnb .depth1 ul').hide();
			$(this).parents('li').find('ul').slideDown('fast');
			$(this).parents('li').siblings('li').find('ul').slideUp('fast');
			for (var i = 0; i < arrcount; i++) onoff[i] = false;
			onoff[ind] = true;
			$('.mainmenu span').text('▼');
			$(this).find('span').text('▲');
		} else {
			$(this).parents('li').find('ul').slideUp('fast');
			onoff[ind] = false;
			$(this).find('span').text('▼');
		}
	});

	//topmove

	$('.topMove').hide();
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll > 500) {
			$('.topMove').show();
		} else {
			$('.topMove').hide();
		}
	});
	$('.topMove').click(function (e) {
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 800);
	});
});
