const menu1 = document.querySelector('.content_inner_menu1');
const menu2 = document.querySelector('.content_inner_menu2');
const contentNav = document.querySelector('.content_nav_bar');
const prevbutton = document.querySelector('.prevhistory');
const nextbutton = document.querySelector('.nexthistory');
const bg = document.querySelectorAll('.bg');
const lists = document.querySelectorAll('.listcontent');
let count = 0;

window.addEventListener('scroll', function () {
	const prizeRect = prize.getBoundingClientRect().top;
	const historyRect = historylist.getBoundingClientRect().top;

	if (historyRect <= 0) menu2.classList.add('selected');
	else menu2.classList.remove('selected');
	if (prizeRect <= 90 && historyRect > 0) menu1.classList.add('selected');
	else menu1.classList.remove('selected');
	if (prizeRect <= 90) contentNav.classList.add('activated');
	else contentNav.classList.remove('activated');

	for (let i = 0; i < bg.length; i++) {
		const bgtop = bg[i].getBoundingClientRect().top;
		const bgbottom = bg[i].getBoundingClientRect().bottom;
		const textstyle = bg[i].childNodes[1].style;

		if (bgtop <= 0 && bgtop > -1080 && bgbottom >= 1080) {
			textstyle.position = 'fixed';
			textstyle.top = (Math.abs(bgtop) / 1080) * 30 + '%';
		} else if (bgtop <= 0 && bgbottom >= 1080) textstyle.top = '30%';
		else if (bgtop <= 0 && bgbottom < 1080)
			textstyle.top = (bgbottom / 1080) * 30 + '%';
		else textstyle.position = 'static';
	}
});

$('.prevhistory').css({ opacity: '.35', 'pointer-events': 'none' });
prevbutton.addEventListener('click', function () {
	$('.nexthistory').css({ opacity: '1', 'pointer-events': 'visible' });
	nextbutton.className = 'nexthistory';
	if (count == 1) $(this).css({ opacity: '.35', 'pointer-events': 'none' });
	else $(this).css({ opacity: '1', 'pointer-events': 'visible' });
	for (let i = 0; i < lists.length; i++) {
		lists[i].className = 'listcontent';
	}
	count--;
	lists[count + 1].classList.add('zerotonext');
	lists[count].classList.add('prevtozero');
});

nextbutton.addEventListener('click', function () {
	prevbutton.className = 'prevhistory';
	$('.prevhistory').css({ opacity: '1', 'pointer-events': 'visible' });
	if (count == 1) $(this).css({ opacity: '.35', 'pointer-events': 'none' });
	else $(this).css({ opacity: '1', 'pointer-events': 'visible' });
	lists[0].style.opacity = '0';
	for (let i = 0; i < lists.length; i++) {
		lists[i].className = 'listcontent';
	}
	count++;
	lists[count - 1].classList.add('zerotoprev');
	lists[count].classList.add('nexttozero');
});

$(document).ready(function () {
	$('.content_nav_bar a').click(function (e) {
		e.preventDefault();
		var value = 0;
		if ($(this).hasClass('content_inner_menu1')) {
			value = $('.content_area section:eq(0)').offset().top - 90;
		} else if ($(this).hasClass('content_inner_menu2')) {
			value = $('.content_area section:eq(1)').offset().top;
		}
		$('html,body').stop().animate({ scrollTop: value }, 500);
	});
});
