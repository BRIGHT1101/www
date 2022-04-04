$(function () {
	$.ajax({
		url: 'json/sub3_list.json',
		dataType: 'json',
		success: function (data) {
			let growData = data.task;
			let dealData = data.deal;
			let humanData = data.human;
			let htext = '';
			let gtext = '';
			let dtext = '';
			for (let i = 0; i < growData.length; i++) {
				gtext += '<li>' + growData[i] + '</li>';
			}
			$('.main_task ul').html(gtext);

			for (let i = 0; i < dealData.length; i++) {
				dtext += '<li>';
				dtext +=
					'<img src="images/content3/fair' +
					(+i + 1) +
					'.png" alt="공정거래이미지">';
				dtext += '<dl>';
				dtext += '<dt>' + dealData[i].title + '</dt>';
				dtext += '<dd>' + dealData[i].desc + '</dd>';
				dtext += '</dl>';
				dtext += '</li>';
			}
			$('.good_deal ul').html(dtext);

			for (let i = 0; i < humanData.length; i++) {
				htext += '<li>';
				htext += '<dl>';
				htext += '<dt>' + humanData[i].title + '</dt>';
				htext += '<dd>' + humanData[i].desc + '</dd>';
				htext += '</dl>';
				htext += '</li>';
			}
			$('.human_list ul').html(htext);
		},
	});
});
