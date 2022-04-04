$(document).ready(function () {
	$.ajax({
		url: 'json/sub3.json',
		dataType: 'json',
		success: function (data) {
			let useData = data.qna;
			let txt = '<ul>';
			for (var i in useData) {
				var question = useData[i].question;
				var answer = useData[i].answer;
				txt += '<li class="hide">';

				txt +=
					'<p><img src="images/content3/q.png" alt="질문"><a href="#">' +
					question +
					'<img class="arrow" src="images/content3/bottom.png" alt="답변보기"></a></p>';
				txt +=
					'<div class="answer"><img src="images/content3/a.png" alt="답변"><p >' +
					answer +
					'</p></div>';
				txt += '</li>';
			}
			txt += '</ul>';
			$('.faq ul').html(txt);
		},
	});

	//qna move script
	$(document).on('click', '.faq li a', function (e) {
		e.preventDefault();
		var article = $('.faq li');
		var myArticle = $(this).parents('li');
		if (myArticle.hasClass('hide')) {
			article.find('.answer').slideUp(100);
			article.addClass('hide');
			myArticle.removeClass('hide');
			myArticle.find('.answer').slideDown(100);
			$('.arrow').css('transform', '');
			$(this).find('.arrow').css('transform', 'rotate(.5turn)');
		} else {
			myArticle.addClass('hide');
			myArticle.find('.answer').slideUp(100);
			$(this).find('.arrow').css('transform', '');
		}
	});
});
