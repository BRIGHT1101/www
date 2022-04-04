$(document).ready(function () {
	var timeonoff; //타이머 처리
	var imageCount = 5; //이미지 총개수
	var cnt = 1; //이미지 순서
	var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

	$('.btn1')
		.css('background', 'white')
		.css('width', '20')
		.css('box-shadow', '0 0 5px 0 rgba(0,0,0,0.3');
	$('.gallery .link1').css('opacity', '1');
	$('.gallery .link1 span')
		.css('transition', '0.5s all')
		.css('opacity', '1')
		.css('transform', 'translateY(0)');

	function hide() {
		$('.gallery li').css('opacity', '0');
		$('.gallery span')
			.css('transition', '')
			.css('opacity', '')
			.css('transform', '');
	}

	function effect(count) {
		$('.gallery .link' + count).css('opacity', '1');
		$('.gallery .link' + count + ' span')
			.css('opacity', '1')
			.css('transition', '0.5s all')
			.css('transform', 'translateY(0)');
		$('.mbutton')
			.css('background', '#ebebeb81')
			.css('width', '12')
			.css('box-shadow', '');
		$('.btn' + count)
			.css('background', 'white')
			.css('width', '20')
			.css('box-shadow', '0 0 5px 0 rgba(0,0,0,0.3');
	}

	function moveg() {
		if (cnt == imageCount + 1) cnt = 1;
		if (cnt == imageCount) cnt = 0; //카운트 초기화
		cnt++;
		hide();
		effect(cnt);
		if (cnt == imageCount) cnt = 0; //카운트의 초기화
	}

	timeonoff = setInterval(moveg, 5000);

	$('.mbutton').click(function (event) {
		var $target = $(event.target);
		clearInterval(timeonoff);
		hide();
		for (let i = 1; i <= imageCount; i++) {
			if ($target.is('.btn' + i)) cnt = i;
		}
		effect(cnt);
		if (cnt == imageCount) cnt = 0; //카운트 초기화
		timeonoff = setInterval(moveg, 5000); //타이머의 부활
		if (onoff == false) {
			onoff = true;
			$('.play').hide();
			$('.pause').show();
		}
	});

	//stop play 버튼 클릭시 타이머 동작/중지
	$('.ps').click(function () {
		if (onoff == true) {
			clearInterval(timeonoff);
			$('.play').show();
			$('.pause').hide();
			onoff = false;
		} else {
			timeonoff = setInterval(moveg, 5000);
			$('.play').hide();
			$('.pause').show();
			onoff = true;
		}
	});

	//왼쪽/오른쪽 버튼 처리
	$('.visual .btn').click(function () {
		clearInterval(timeonoff);
		if ($(this).is('.btnRight')) {
			if (cnt == imageCount) cnt = 0;
			cnt++; //카운트 1씩증가
		} else if ($(this).is('.btnLeft')) {
			//왼쪽 버튼 클릭
			if (cnt == 1) cnt = imageCount + 1;
			if (cnt == 0) cnt = imageCount;
			cnt--; //카운트 감소
		}
		hide(); //모든 이미지를 보이지 않게.
		effect(cnt);
		timeonoff = setInterval(moveg, 5000);
		if (onoff == false) {
			onoff = true;
			$('.play').show();
			$('.pause').hide();
		}
	});

	// navigation
	$('#gnb').hover(
		function (e) {
			$('#headerArea')
				.css({ 'background-color': 'white', 'border-radius': '0 0 40px 40px' })
				.animate({ height: 350 }, 200)
				.clearQueue();
			$('ul.depth2_list').show();
			$('#gnb h3 a').css('color', 'black');
			$('h1').css('background-image', 'url(common/images/navlogo.png)');
		},
		function () {
			$('#headerArea').animate({ height: 90 }, 200).clearQueue();
			$('#headerArea').css('border-radius', '0');
			$('ul.depth2_list').hide();
			if ($(window).scrollTop() == 0) {
				$('#headerArea')
					.css('background-color', 'transparent')
					.css('box-shadow', 'none');
				$('#gnb h3 a').css('color', '');
				$('h1').css('background-image', 'url(common/images/navlogo_white.png)');
			}
		}
	);
	//nav tab 처리
	$('#gnb>ul>li>h3>a').on('focus', function () {
		$('ul.depth2_list').slideDown(200);
		$('#headerArea')
			.animate({ height: 350 }, 200)
			.clearQueue()
			.css('background-color', 'white')
			.css('border-radius', '0 0 40px 40px');
		$('#gnb h3 a').css('color', 'black');
		$('h1').css('background-image', 'url(common/images/navlogo.png)');
	});
	$('li.user .depth2_list li:last  a').on('blur', function () {
		$('ul .depth2_list').slideUp(200);
		$('#headerArea')
			.animate({ height: 90 }, 200)
			.clearQueue()
			.css('box-shadow', 'none')
			.css('border-radius', '');
	});

	$('.depth2_list').hover(
		function () {
			$(this).parents('li').find('h3 a').css('color', '#d2081e');
		},
		function () {
			$(this).parents('li').find('h3 a').css('color', 'black');
		}
	);

	$('#gnb>ul>li>h3>a').hover(
		function () {
			$(this).css('color', '#d2081e');
		},
		function () {
			$(this).css('color', 'black');
		}
	);

	//스크롤 스크립트
	$('.topMove').hide();
	$(window).on('scroll', function () {
		let introli = $('.introduction li').offset().top - 700;
		let agencyli = $('.agencies li').offset().top - 700;
		let productli = $('.products li').offset().top - 700;
		let newsli = $('.news li').offset().top - 700;
		let mediali = $('.media li').offset().top - 700;
		let scroll = $(window).scrollTop();

		if (scroll) {
			$('#headerArea')
				.css('background-color', 'white')
				.css('box-shadow', '0 0 5px 0 #ccc');
			$('#gnb h3 a').css('color', 'black');
			$('h1').css('background-image', 'url(common/images/navlogo.png)');
		} else if ($('#headerArea').height() == '90') {
			$('#headerArea')
				.css('background-color', 'transparent')
				.css('box-shadow', 'none');
			$('#gnb h3 a').css('color', '');
			$('h1').css('background-image', 'url(common/images/navlogo_white.png)');
		}
		if (scroll > 500) {
			$('.topMove').show();
		} else {
			$('.topMove').hide();
		}

		if (scroll > introli) {
			$('.introduction li').addClass('moved');
			$('.introduction h3,.introduction p').css('opacity', '1').css('top', '0');
		}

		if (scroll > agencyli) {
			$('.agencies ul').addClass('moved');
			$('.agencies_inner>h3,.agencies_inner>p')
				.css('opacity', '1')
				.css('top', '0');
		}

		if (scroll > productli) {
			$('.products h3').css('opacity', '1').css('top', '0');
			$('.products li').css('opacity', '1');
			$('.products .pro_btn').css('opacity', '1');
			$('.products .more').css('opacity', '1');
		}

		if (scroll > newsli) {
			$('.news h3').css('opacity', '1').css('top', '0');
			$('.news li:eq(0)').css('left', '0');
			$('.news li:eq(1)').css('top', '0');
			$('.news li:eq(2)').css('right', '0');
			$('.news li').css('opacity', '1');
			$('.news .more').css('opacity', '1');
		}

		if (scroll > mediali) {
			$('.media h3, .media p').css('opacity', '1').css('top', '0');
			$('.media_box li').css({ opacity: '1' });
			$('.media .more').css({ opacity: 1, top: '330px' });
			$('.media .remote').css({ opacity: 1 });
		}
	});

	$('.topMove').click(function (e) {
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 800);
	});

	// Agencies accordion script
	function accordion(imgnum) {
		$(
			'.ag_title:eq(' +
				imgnum +
				'),.agencies_inner li:not(:eq(' +
				imgnum +
				')) .ag_main'
		).hide();
		$('.agencies_inner li:eq(' + imgnum + ')  .ag_main').fadeIn('slow');
		$('.agencies_inner span:eq(' + imgnum + ')').css('width', '100');
		$('.agencies_inner span:not(:eq(' + imgnum + '))').css('width', '200');
		$('.ag_title:not(:eq(' + imgnum + '))')
			.show()
			.animate({ width: 200 });
	}

	$('.agencies_inner li span').mouseenter(function (event) {
		var $target = $(event.target);
		if ($target.is('.agencies_inner span:eq(0)')) {
			$('.agencies_inner li:eq(1)')
				.animate({ left: [800, 'easeOutQuad'] }, 500)
				.clearQueue();
			$('.agencies_inner li:eq(2)')
				.animate({ left: [1000, 'easeOutQuad'] }, 500)
				.clearQueue();
			accordion(0);
		} else if ($target.is('.agencies_inner span:eq(1)')) {
			$('.agencies_inner li:eq(1)')
				.animate({ left: [200, 'easeOutQuad'] }, 500)
				.clearQueue();
			$('.agencies_inner li:eq(2)')
				.animate({ left: [1000, 'easeOutQuad'] }, 500)
				.clearQueue();
			accordion(1);
		} else if ($target.is('.agencies_inner span:eq(2)')) {
			$('.agencies_inner li:eq(1)')
				.animate({ left: [200, 'easeOutQuad'] }, 500)
				.clearQueue();
			$('.agencies_inner li:eq(2)')
				.animate({ left: [400, 'easeOutQuad'] }, 500)
				.clearQueue();
			accordion(2);
		}
	});

	$('.agencies_inner>div').mouseleave(function (event) {
		$('.ag_main').hide();
		$('.agencies_inner li:eq(0)')
			.animate({ left: [0, 'easeOutQuad'] }, 500)
			.clearQueue();
		$('.agencies_inner li:eq(1)')
			.animate({ left: [400, 'easeOutQuad'] }, 500)
			.clearQueue();
		$('.agencies_inner li:eq(2)')
			.animate({ left: [800, 'easeOutQuad'] }, 500)
			.clearQueue();
		$('.agencies_inner span').css('width', '');
		$('.ag_title').animate({ width: 400 });
		$('.ag_title').fadeIn(200);
	});

	// products script
	let position = -300; //최초위치
	let movesize = 600; //이미지 하나의 너비
	$('.products ul').after($('.products ul').clone());
	$('.pro_btn').click(function (e) {
		e.preventDefault();
		if ($(this).is('.left')) {
			if (position == -300) {
				$('.products>div:eq(0)').css('left', -2700);
				position = -2700;
			}
			position += movesize;
			$('.products>div:eq(0)')
				.stop()
				.animate({ left: position }, 'normal', function () {
					if (position == -300) {
						$('.products>div:eq(0)').css('left', -2700);
						position = -2700;
					}
				});
		} else if ($(this).is('.right')) {
			if (position == -2700) {
				$('.products>div:eq(0)').css('left', -300);
				position = -300;
			}
			position -= movesize;
			$('.products>div:eq(0)')
				.stop()
				.animate({ left: position }, 'normal', function () {
					if (position == -2700) {
						$('.products>div:eq(0)').css('left', -300);
						position = -300;
					}
				});
		}
	});

	//media script
	let mediabtn = 0;
	$('.remote li a').css({ 'pointer-events': 'none', opacity: 0.3 });
	$('.remote li:eq(1) a').css({ 'pointer-events': 'visible', opacity: '1' });
	$('.remote li:eq(1) a').click(function (e) {
		e.preventDefault();
		$('.remote li:eq(0) a').css({ 'pointer-events': 'visible', opacity: '1' });
		if (mediabtn <= -1080)
			$(this).css({ 'pointer-events': 'none', opacity: 0.3 });
		else {
			mediabtn += -360;
			$(this).css({ 'pointer-events': 'visible', opacity: '1' });
		}
		$('.media_box ul').stop().animate({ left: mediabtn }, 1000);
	});

	$('.remote li:eq(0) a').click(function (e) {
		e.preventDefault();
		$('.remote li:eq(1) a').css({ 'pointer-events': 'visible', opacity: '1' });
		if (mediabtn >= 0) $(this).css({ 'pointer-events': 'none', opacity: 0.3 });
		else {
			mediabtn += 360;
			$(this).css({ 'pointer-events': 'visible', opacity: '1' });
		}
		$('.media_box ul').stop().animate({ left: mediabtn }, 1000);
	});

	$.ajax({
		url: 'sub5/json/sub5_2.json',
		dataType: 'json',
		success: function (data) {
			let useData = data.media;
			let txt = '<ul>';
			for (let i = 0; i < 5; i++) {
				var title = useData[i].title;
				let date = useData[i].date;
				txt += '<li><a href="sub5/sub5_2.html#tube">';
				txt +=
					'<img src="images/youtube' +
					(+i + 1) +
					'.jpg" alt="MEDIA Thumbnail">';
				txt += '<div>' + title;
				txt += '<span>' + date + '</span></div>';
				txt += '</a></li>';
			}
			txt += '</ul>';
			$('.media_box').html(txt);
		},
	});

	// family site script
	$('.family_box>a').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$('.family_box ul').slideUp(200, function () {
				$('.family_box>a').css('border-radius', '22.5px');
			});
		} else {
			$(this).addClass('selected');
			$('.family_box ul').slideDown(200);
			$('.family_box>a').css({ 'border-radius': '0 0 22.5px 22.5px' });
		}
	});
});
