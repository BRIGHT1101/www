const related = document.querySelector('.related_products');
const best = document.querySelectorAll('.best_modal');

related.onmouseover = function (e) {
	for (let i = 1; i <= 3; i++) {
		if (related.children[i] == e.target) {
			best[i - 1].classList.add('activated');
		} else best[i - 1].className = 'best_modal';
	}
};

$(document).ready(function () {
	var memo = [
		{
			title: '오르스티드',
			price: '￦ 24,900',
			titlesub: '탁상스탠드',
			info: '세월이 흘러도 변치 않는 아름다움을 지닌 근사한 조명을 소개합니다. 시리즈에 포함된 조명 제품과 함께 사용해 은은하고 부드러운 불빛으로 방안을 가득 채우고 통일감 있는 인테리어를 연출해보세요.텍스타일 전등갓으로 은은하고 아름다운 조명효과를 느낄 수 있습니다. 조명은 별도구매입니다. LED전구 E26 구형 오팔 화이트 사용을 권장합니다.',
			size: '22cm x 55cm',
			color1: 'gold',
			color2: 'white',
		},

		{
			title: '아뢰드',
			price: '￦ 79,000',
			titlesub: '플로어스탠드/독서등',
			info: '조명의 각도를 자유롭게 조절하여 원하는 곳에 빛을 비출 수 있습니다. 조명의 각도를 자유롭게 조절하여 원하는 곳에 빛을 비출 수 있습니다. 독서등으로 사용해보세요. 조명은 별도구매입니다. LED전구 E26 구형 오팔 화이트 사용을 권장합니다. 같은 시리즈의 다른 조명과도 함께 사용해보세요.',
			size: '30cm x 170cm',
			color1: 'darkgreen',
			color2: 'grey',
		},

		{
			title: '호르테',
			price: '￦ 14,900',
			titlesub: 'LED작업등',
			info: '컴퓨터의 USB 포트에 조명을 연결해 원하는 곳에서 자유롭게 사용할 수 있습니다. 곡선형 메탈 파이프 소재로 제작된 깔끔하고 유쾌한 디자인의 제품으로, 어느 인테리어와도 잘 어울립니다. 컴퓨터의 USB 포트나 일반 콘센트에 연결할 수 있어 원하는 곳에서 자유롭게 사용할 수 있습니다. 조명의 방향을 상하로 자유롭게 조정할 수 있습니다. 슈퍼슬림 스탠드로 아주 좁은 공간에도 놓아둘 수 있어서 실용적입니다. ',
			size: '32cm x 42cm',
			color1: 'white',
			color2: 'yellow',
		},

		{
			title: '네블링에',
			price: '￦ 14,900',
			titlesub: '펜던트등',
			info: 'NÄVLINGE/네블링에 시리즈에는 대부분의 용도에 적합한 등이 포함되어 있습니다. 실내에 편안하게 녹아드는 디자인의 깔끔한 등으로, 가정 내 어느 곳에서든 간편하게 사용하여 눈부심 없는 조명 효과를 얻을 수 있습니다. 아래 방향으로 빛이 비춰주는 제품으로 식탁 위에 설치하면 좋습니다. 조명은 별도구매입니다. LED전구 E26 구형 오팔 화이트 사용을 권장합니다.',
			size: '33cm x 24cm',
			color1: 'white',
			color2: 'lightgrey',
		},

		{
			title: '라나르프',
			price: '￦ 39,900',
			titlesub: '벽부착/집게형스폿조명',
			info: 'RANARP/라나르프 조명 시리즈는 과거의 향수를 떠오르게 하는 클래식한 디자인을 자랑합니다. 스틸 소재의 연결장치와 텍스타일 전원코드를 채운 스트라이프 패턴이 매력적인 제품입니다. 플로어스탠드와 작업등은 튼튼하고 안정적이며, 조명의 각도를 자유롭게 조절할 수 있습니다. 방향과 각도 조절이 자유로워서 원하는 곳에 쉽게 빛을 비출 수 있습니다. 독서등이나 상향등으로 사용할 수 있고 원하는 곳 어디에든 빛을 비출 수 있습니다. ',
			size: '14cm x 34cm',
			color1: 'gold',
			color2: 'white',
		},

		{
			title: '크룩스',
			price: '￦ 39,900',
			titlesub: 'LED작업등',
			info: '특허받은 네오프레임을 패널을 국내 소파 최초로 적용다양한 물건의 정리정돈, 수납, 보관에 필요한 모든 것이 마련되어 있습니다. 기존 콤비네이션을 선택할 수도 있고 추구하는 스타일과 가지고 있는 물건에 맞추어 원하는 콤비네이션을 구성할 수도 있습니다. 가능성은 무궁무진합니다. 자유로운 조합이 가능한 수납 솔루션입니다. 원하는 색상과 크기를 선택해보세요. 수납장 문 안쪽에 중요한 자료, 편지, 신문 등을 정리해 둘 수 있습니다.',
			size: '13cm x 38cm',
			color1: 'white',
			color2: 'black',
		},

		{
			title: '우르스훌트',
			price: '￦ 29,900',
			titlesub: 'LED수납장 조명',
			info: '수납장 내부를 환하게 비춰주고 안락한 분위기까지 연출해주는 제품입니다. 침실 옷장 내부에 설치하거나 거실이나 주방, 현관 수납장에 사용해보세요. 무선으로 손쉽게 조명의 밝기를 조절할 수 있습니다. 집중조명으로 좁은 공간에서 사용하면 좋습니다. LED등은 백열등보다 에너지 소비량이 최대 85%가 낮고 수명은 20배나 깁니다. ANSLUTA/안슬루타 전자식변압기와 함께 사용하세요.',
			size: '7cm x 9cm',
			color1: 'white',
			color2: 'black',
		},

		{
			title: '스토르하가',
			price: '￦ 59,900',
			titlesub: '밝기조절 실외용',
			info: '과거의 등유 램프를 떠올리게 하는 디자인의 조명이에요. 밝기조절이 가능하고 활용도가 높죠. 실내외 겸용이며 코드를 사용하거나 충전지로 작동할 수 있어요. 발코니나 파티오에 사용하시면 좋아요. 방수제품으로 야외에서 사용할 수 있습니다. 전구의 수명은 약 25,000시간입니다. 스탠드를 매일 3시간씩 켜는 경우 약 20년에 해당됩니다.',
			size: '15cm x 35cm',
			color1: 'darkgrey',
			color2: 'white',
		},
	];

	$('.list_content a').click(function (e) {
		e.preventDefault();
		var txt = '';
		var ind = $(this).index('.list_content a'); // 0 1 2 3
		$('.modal_box').fadeIn('fast');
		$('.popup').fadeIn('slow');
		$('.popup img').attr('src', './images/content2/pd' + (ind + 1) + '.jpg');
		$('html, body').css('overflow', 'hidden');
		txt += '<p class="pdname">' + memo[ind].title + '</p>';
		txt += '<p class="pdsummary">' + memo[ind].titlesub + '</p>';
		txt += '<p class="pdprice">' + memo[ind].price + '</p>';
		txt += '<p class="pdcolortitle">색상</p>';
		txt +=
			'<div class="pdcolor color1" style="background-color:' +
			memo[ind].color1 +
			'"></div>';
		txt +=
			'<div class="pdcolor color2" style="background-color:' +
			memo[ind].color2 +
			'"></div>';
		txt += '<p class="pdsizetitle">규격</p>';
		txt += '<p class="pdsize">' + memo[ind].size + '</p>';
		txt += '<p class="pdinfo">' + memo[ind].info + '</p>';

		$('.popup .txt').html(txt);
	});

	$('.close_btn, .modal_box').click(function (e) {
		e.preventDefault();
		$('.modal_box').hide();
		$('.popup').hide();
		$('html, body').css('overflow', 'auto');
	});
});
