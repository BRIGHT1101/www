$(function () {
	const urlprev = '<iframe src="https://www.youtube.com/embed/';
	const urlnext =
		'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

	$.ajax({
		url: 'json/sub5_2.json',
		dataType: 'json',
		success: function (data) {
			let useData = data.media;
			let txt = '<ul>';
			for (var i in useData) {
				var title = useData[i].title;
				let date = useData[i].date;
				txt += '<li><a href="#">';
				txt +=
					'<div><img src="images/content2/media' +
					(+i + 1) +
					'.jpg" alt="썸네일사진"></div>';
				txt += '<dl><dt>' + title + '</dt>';
				txt += '<dd>' + date + '</dd></dl>';
				txt += '</a></li>';
			}
			txt += '</ul>';
			$('.youtube_list').html(txt);
		},
	});

	function youtube(data, num) {
		let useData = data.media[num];
		let txt = '<div>';
		txt += '<div class="main_text">';
		txt += '<p>' + useData.title + '<span>' + useData.date + '</span></p>';
		txt += '<p>' + useData.desc1 + '</p>';
		txt += '<p>' + useData.desc2 + '</p></div>';
		txt += '<div class="youtube_box">';
		txt += urlprev + useData.source + urlnext;
		txt += '</div></div>';

		$('.main_box').html(txt);
	}

	//처음에 보여질 영상
	$.ajax({
		url: 'json/sub5_2.json',
		dataType: 'json',
		success: function (data) {
			youtube(data, 0);
		},
	});

	$(document).on('click', '.youtube_list ul a', function (e) {
		e.preventDefault();
		let num = $(this).parents('li').index();
		$.ajax({
			url: 'json/sub5_2.json',
			dataType: 'json',
			success: function (data) {
				youtube(data, num);
			},
		});
		$('html,body').stop().animate({ scrollTop: 900 }, 500);
	});
});
