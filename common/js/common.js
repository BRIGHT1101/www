$(document).ready(function () {
    // navbar hover
	$('#gnb').hover(
		function (e) {
			$('#headerArea').animate({ height: 350 }, 200).clearQueue();
			$('ul.depth2_list').show();
			$('#gnb h3 a').css('color', 'black');
			$('#headerArea').css({
				'background-color': 'white',
				'border-radius': '0 0 40px 40px',
			});
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
			}
		}
	);

	//navbar tab 
	$('#gnb>ul>li>h3>a').on('focus', function () {
		$('ul.depth2_list').show();
		$('#headerArea')
			.animate({ height: 350 }, 200)
			.clearQueue()
			.css('background-color', 'white')
			.css('border-radius', '0 0 40px 40px');
		$('#gnb h3 a').css('color', 'black');
	});
	$('li.user .depth2_list li:last  a').on('blur', function () {
		$('ul.depth2_list').hide();
		$('#headerArea')
			.animate({ height: 90 }, 200)
			.clearQueue()
			.css('box-shadow', 'none')
			.css('border-radius', '');
	});

    // navbar 2depth hover
	$('.depth2_list').hover(
		function () {
			$(this).parents('li').find('h3 a').css('color', '#d2081e');
		},
		function () {
			$(this).parents('li').find('h3 a').css('color', 'black');
		}
	);

    // navbar 2depth list hover
	$('#gnb>ul>li>h3>a').hover(
		function () {
			$(this).css('color', '#d2081e');
		},
		function () {
			$(this).css('color', 'black');
		}
	);

	// scroll
	$('.topMove').hide();
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll) {
			$('#headerArea')
				.css('background-color', 'white')
				.css('box-shadow', '0 0 5px 0 #ccc');
			$('#gnb h3 a').css('color', 'black');
		} else if ($('#headerArea').height() == '90') {
			$('#headerArea')
				.css('background-color', 'transparent')
				.css('box-shadow', 'none');
			$('#gnb h3 a').css('color', '');
		}
		if (scroll > 500) {
			$('.topMove').fadeIn('slow');
		} else {
			$('.topMove').fadeOut('slow');
		}
	});

    // go to top button
	$('.topMove').click(function (e) {
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 800);
	});

	// family site
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
