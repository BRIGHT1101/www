const menu1 = document.querySelector('.content_inner_menu1');
const menu2 = document.querySelector('.content_inner_menu2');
const contentNav = document.querySelector('.content_nav_bar');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');

window.addEventListener('scroll', function () {
	const jobRect = section1.getBoundingClientRect().top;
	const processRect = section2.getBoundingClientRect().top;
	if (processRect < 91) menu2.classList.add('selected');
	else menu2.classList.remove('selected');
	if (jobRect <= 90 && processRect > 91) menu1.classList.add('selected');
	else menu1.classList.remove('selected');
	if (jobRect <= 90) contentNav.classList.add('activated');
	else contentNav.classList.remove('activated');
});

$(document).ready(function () {
	$('.content_nav_bar a').click(function (e) {
		e.preventDefault();
		var value = 0;
		if ($(this).hasClass('content_inner_menu1')) {
			value = $('.content_area section:eq(0)').offset().top - 90;
		} else if ($(this).hasClass('content_inner_menu2')) {
			value = $('.content_area section:eq(1)').offset().top - 90;
		}
		$('html,body').stop().animate({ scrollTop: value }, 500);
	});
});
