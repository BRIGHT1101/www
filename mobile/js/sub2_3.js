$(function () {
	$('.visual').css('background-image', 'url(images/sub2/content3/visual.jpg)');
	function product(data, kind, num) {
		let useData = data[kind];
		let txt = '<div class="intro_title"><div><h3>BEST PRODUCT</h3>';
		txt += '<p>' + useData[num].title + '</p></div></div>';
		txt += '<div class="feature">';
		txt +=
			'<img src="images/sub2/content3/feature' + num + '1.jpg" alt="상세사진">';
		txt += '<p>' + useData[num].info1 + '</p></div>';
		txt += '<div class="feature">';
		txt +=
			'<img src="images/sub2/content3/feature' + num + '2.jpg" alt="상세사진">';
		txt += '<p>' + useData[num].info2 + '</p></div>';
		$('.intro_inner').html(txt);
		let decolor =
			'<div style="background-color:' + useData[num].color1 + '"></div>';
		decolor +=
			'<div style="background-color:' + useData[num].color2 + '"></div>';
		$('.intro_title').css(
			'background-image',
			'url(images/sub2/content3/pd' + num + '.jpg)'
		);
		$('.detail_color').html(decolor);
		$('.size').html(useData[num].size);
	}

	$.ajax({
		url: 'json/sub2.json',
		dataType: 'json',
		success: function (data) {
			product(data, 'bath', 0);
		},
	});

	$('.con_nav a:eq(0)').addClass('activated');
	$(document).on('click', '.con_nav a', function (e) {
		e.preventDefault();
		$('.con_nav a').removeClass();
		$(this).addClass('activated');
		let list = $(this).parents('li').index();

		$.ajax({
			url: 'json/sub2.json',
			dataType: 'json',
			success: function (data) {
				product(data, 'bath', list);
			},
		});
	});
});
