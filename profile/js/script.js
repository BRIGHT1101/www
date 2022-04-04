const navul = document.querySelector('.navul');
const section = document.querySelectorAll('section');
const ullist = navul.children;
const deg = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
];

document.addEventListener('scroll', e => {
	section.forEach((item, index) => {
		if (
			(item.offsetHeight / 2) * 3 > item.getBoundingClientRect().bottom &&
			item.offsetHeight / 2 < item.getBoundingClientRect().bottom
		) {
			for (let i = 0; i < ullist.length; i++) {
				ullist[i].className = '';
				ullist[i].classList.add(deg[6 - index + i]);
			}
		}
	});
});

$('section').on('mousewheel', function (event, delta) {
	if ($(window).width() >= 768) {
		if (delta > 0 && $(this).index() != 0) {
			var prev = $(this).prev().offset().top;
			$('html,body').stop().animate({ scrollTop: prev }, 1000);
			return false;
		} else if (delta < 0 && $(this).index() != 6) {
			var next = $(this).next().offset().top;
			$('html,body').stop().animate({ scrollTop: next }, 1000);
			return false;
		}
	}
});

$('.navul li a').on('click', function (e) {
	e.preventDefault();
	const sectionHeight = $('section').eq($('.navul a').index(this)).offset().top;
	$('html,body').stop().animate({ scrollTop: sectionHeight }, 1000);
});

if ($(window).width() < 768) {
	$('.navbar').addClass('mobile');
} else if ($(window).width() >= 768 && $(window).width() < 1280) {
	$('.navbar').addClass('top');
}

$(window).resize(function (e) {
	if ($(window).width() < 768) {
		$('.navbar').addClass('mobile');
	} else if ($(window).width() >= 768 && $(window).width() < 1280) {
		$('.navbar').addClass('top');
		$('.navbar').removeClass('mobile');
	} else {
		$('.navbar').removeClass('top');
		$('.navbar').removeClass('mobile');
	}
});
