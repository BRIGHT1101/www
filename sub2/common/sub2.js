$(document).ready(function () {
	let leftpx = -900;

	$('.right').click(function () {
		if (leftpx <= -2100) leftpx = 300;
		else leftpx += -600;
		$('.other_product ul').stop().animate({ left: leftpx }, 1000);
	});

	$('.left').click(function () {
		if (leftpx >= 300) leftpx = -2100;
		else leftpx += 600;
		$('.other_product ul').stop().animate({ left: leftpx }, 1000);
	});
});
