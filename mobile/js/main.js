$(function () {
	$('.ag_list a').click(function (e) {
		e.preventDefault();
		let name = this.className;
		$('.ag_list li').removeClass();
		$(this).parents('li').addClass('selected');
		$.ajax({
			url: 'json/list.json',
			dataType: 'json',
			success: function (data) {
				let useData = data.ag;
				let txt = '';
				let src = '';
				let href = '';
				for (let i in useData) {
					let title = useData[i].title;
					let desc = useData[i].desc;
					if (title == name) {
						txt = '<p>' + desc + '</p>';
						src = 'images/index/ag' + (+i + 1) + '.jpg';
						href = 'sub2_' + (+i + 1) + '.html';
					}
				}
				$('.ag_text').html(txt);
				$('.ag_img').attr('src', src);
				$('.agencies_inner>a').attr('href', href);
			},
		});
	});
});
