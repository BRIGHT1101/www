$(function () {
	function ideology(data, kind) {
		let useData = data[kind];
		let welcometext = useData[0];
		let vision = useData[4];
		let txt =
			'<img src="images/sub1/content2/' + kind + '.jpg" alt="' + kind + '">';
		txt += '<ul>';
		for (let i = 1; i <= 3; i++) {
			txt += '<li><div><h3>' + useData[i].title + '</h3>';
			txt += '<p>' + useData[i].desc + '</p></div></li>';
		}
		txt += '</ul>';
		txt +=
			'<div><img src="images/sub1/content2/vision_' +
			kind +
			'.jpg" alt="vision_' +
			kind +
			'">';
		txt += '<h3>' + vision.title + '</h3>';
		txt += '<p>' + vision.desc + '</p></div>';
		$('.introduction').html(txt);
		$('.wctext').html(welcometext);
	}

	$.ajax({
		url: 'json/sub1_2.json',
		dataType: 'json',
		success: function (data) {
			ideology(data, 'management');
		},
	});

	$('.con_nav a:eq(0)').addClass('activated');
	$(document).on('click', '.con_nav a', function (e) {
		e.preventDefault();
		$('.con_nav a').removeClass();
		$(this).addClass('activated');
		let list = $(this).parents('li').index();
		let sort = '';
		if (list == 0) sort = 'management';
		else sort = 'design';

		$.ajax({
			url: 'json/sub1_2.json',
			dataType: 'json',
			success: function (data) {
				ideology(data, sort);
			},
		});
	});
});
