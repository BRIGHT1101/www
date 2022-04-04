const menu1 = document.querySelector('.content_inner_menu1');
const menu2 = document.querySelector('.content_inner_menu2');
const contentNav = document.querySelector('.content_nav_bar');
window.addEventListener('scroll', function () {
	const managementRect = management.getBoundingClientRect().top;
	const designRect = design.getBoundingClientRect().top;
	if (designRect <= 0) menu2.classList.add('selected');
	else menu2.classList.remove('selected');
	if (managementRect <= 90 && designRect > 0) menu1.classList.add('selected');
	else menu1.classList.remove('selected');
	if (managementRect <= 90) contentNav.classList.add('activated');
	else contentNav.classList.remove('activated');
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
