$(function () {
	const urllist = {
		insta: 'https://www.instagram.com/hanssem_official',
		face: 'https://www.facebook.com/hanssemkorea',
		blog: 'https://blog.naver.com/hanssem70',
	};
	function sns(data, type, url) {
		let useData = data[type];
		let txt = '<ul>';
		for (var i in useData) {
			var title = useData[i].title;
			var desc = useData[i].desc;
			txt += '<li><a href="' + url + '" target="_blank">';
			txt +=
				'<img src="images/sub4/content2/' +
				type +
				(+i + 1) +
				'.jpg" alt="SNS사진">';
			txt += '<dl><dt>' + title + '</dt>';
			txt += '<dd>' + desc + '</dd></dl>';
			txt += '</a></li>';
		}
		txt += '</ul>';
		$('.sns').html(txt);
	}

	$.ajax({
		url: 'json/sub4_2.json',
		dataType: 'json',
		success: function (data) {
			sns(data, 'insta', urllist['insta']);
		},
	});

	$('.content_area>ul a').click(function (e) {
		e.preventDefault();
		let name = this.className;
		$.ajax({
			url: 'json/sub4_2.json',
			dataType: 'json',
			success: function (data) {
				sns(data, name, urllist[name]);
			},
		});
		$('.content_area>ul a').css('background-color', 'white');
		$('.insta img').attr('src', 'images/sub4/content2/instagram.png');
		$('.face img').attr('src', 'images/sub4/content2/facebook.png');
		$('.blog img').attr('src', 'images/sub4/content2/blog.png');
		let attrname = $(this).find('img').attr('src');
		let src = attrname.split('.');
		$(this)
			.find('img')
			.attr('src', src[0] + '_white.png');
		$(this).css('background-color', 'black');
	});
});
