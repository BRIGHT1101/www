$(function () {
	$.ajax({
		url: 'json/client_list.json',
		dataType: 'json',
		success: function (data) {
			let useData = data.service;
			function dataPrint() {
				let txt = '<ul>';
				for (var i in useData) {
					var $Title = useData[i].title;
					var $Desc = useData[i].desc;
					txt += '<li>';
					txt += '<h4>' + $Title + '</h4>';
					txt += '<div>';
					txt +=
						'<img src="images/content2/quality' +
						(+i + 1) +
						'_1.jpg" alt="안전사진">';
					txt +=
						'<img src="images/content2/quality' +
						(+i + 1) +
						'_2.jpg" alt="안전사진">';
					txt += '<p>' + $Desc + '</p>';
					txt += '</div>';
					txt += '</li>';
				}
				txt += '</ul>';
				$('.service_list').html(txt);
			}
			dataPrint();
		},
	});
	$.ajax({
		url: 'json/process_list.json',
		dataType: 'json',
		success: function (data) {
			let processtext = '';
			processtext += '<ul>';
			for (let i in data) {
				processtext += '<li><p>' + i + '</p>';
				processtext += '<ul>';
				for (let j = 0; j < data[i].length; j++) {
					processtext += '<li>' + data[i][j] + '</li>';
				}
				processtext += '</ul>';
				processtext += '</li>';
			}
			processtext += '</ul>';
			$('.process_list').html(processtext);
		},
	});
});
