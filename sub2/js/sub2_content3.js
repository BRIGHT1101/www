$(document).ready(function () {
	var memo = [
		{
			title: '뉘셴',
			price: '￦ 50,000',
			titlesub: '세면대',
			info: '선반 달린 세면기하부장은 지저분해 보일 수 있는 수건과 위생용품 등을 감춰두기 좋습니다. 선반 달린 세면기하부장은 지저분해 보일 수 있는 수건과 위생용품 등을 감춰두기 좋습니다. 선반 공간이 넉넉할 뿐 아니라 수납장 뒤쪽에 배관 자리가 있어요. 손잡이, 경첩, 다리가 포함되어 있습니다.',
			size: '50cm x 83cm',
			color1: 'white',
			color2: 'beige',
		},

		{
			title: '롯순드',
			price: '￦ 99,900',
			titlesub: '거울',
			info: '안전필름이 부착되어 있어서 거울이 깨져도 다칠 위험이 적습니다. 안전필름이 부착되어 있어서 거울이 깨져도 다칠 위험이 적습니다. 벽의 재질에 따라 다른 나사를 사용해야 하며, 칼브럭이 필요할 수도 있습니다. 별도구매입니다. 양초용 선반으로 사용하지 마세요.',
			size: '80cm',
			color1: 'beige',
			color2: 'white',
		},

		{
			title: '베스켄',
			price: '￦ 7,000',
			titlesub: '코너선반유닛',
			info: '가장 작은 욕실에 알맞지만 선반에는 샴푸병부터 비누와 작은 소품에 이르는 모든 세면도구를 보관하기에 충분한 공간이 있습니다. 다른 도구 없이도 서로 끼우기만 하면 쉽고 빠르게 선반유닛을 완성할 수 있습니다. 높은 턱이 있어 샴푸, 컨디셔너, 스폰지등을 떨어뜨리지 않고 수납할 수 있습니다. 작은 욕실에서도 실용적으로 사용할 수 있습니다.',
			size: '33x33x71 cm',
			color1: 'white',
			color2: 'grey',
		},

		{
			title: '박스나',
			price: '￦ 3,900',
			titlesub: '정리함',
			info: '이 패브릭은 재생 폴리에스테르로 만들었어요. 쓰레기를 자원으로 활용하면 지속 가능한 미래로 한 걸음 더 나아갈 수 있어요. 신발, 수건 또는 추가 침구 등을 넣어 침대 아래에 둘 수납상자로 사용하면 실용적입니다. 빌트인 잠금기능으로 뚜껑을 제자리에 고정하고 내용물을 먼지로부터 보호합니다.',
			size: '20x26x10 cm',
			color1: 'grey',
			color2: 'white',
		},

		{
			title: '비에르센',
			price: '￦ 2,500',
			titlesub: '샤워커튼',
			info: '화이트 욕실 텍스타일을 사용하여 얻을 수 있는 깔끔하고 산뜻한 느낌과 견줄 만한 것은 없습니다. 전체 분위기가 화이트 색상인 경우에는 이 샤워커튼을 NÄRSEN/네르센 수건과 함께 사용하세요. 원하는 길이로 쉽게 자를 수 있습니다. 표면에 방수처리를 하여 물이 스며들지 않습니다. 샤워 커튼링, 샤워 커튼봉과 함께 사용하세요.',
			size: '180 x 200 cm',
			color1: 'white',
			color2: 'lightbrown',
		},

		{
			title: '토르키스',
			price: '￦ 19,900',
			titlesub: '빨래바구니',
			info: '칸이 두 개로 구분되어 있어 세탁물을 편리하게 분리할 수 있습니다. 폴리에스테르 소재를 사용하여 수분이나 냄새가 배지 않습니다. 납작하게 접어서 보관할 수 있습니다. 가볍고 접을 수 있는 구조여서 세탁기 있는 곳으로 운반하기도 쉽고 벽장 안에 넣어 두거나 후크에 걸어둘 수도 있습니다. 빨랫감을 최대 8kg까지 넣을 수 있습니다. 꽉 찰 때까지 안심하고 더 넣어도 되죠.',
			size: '35cm x 47cm',
			color1: 'beige',
			color2: 'white',
		},

		{
			title: '옐',
			price: '￦ 7,000',
			titlesub: '실내외건조대',
			info: '옷 관리에 반드시 공간이 많이 필요한 것은 아닙니다. 이 건조대만 해도 사용하지 않을 때는 납작하게 접어 둘 수 있어 공간을 많이 차지하지 않습니다. 또한 건조기를 사용할 때보다 옷감이 덜 상하고 환경에도 이롭습니다. 접어서 보관하세요. 실내외 어디에서나 사용할 수 있습니다.',
			size: '79cm x 82cm',
			color1: 'white',
			color2: 'grey',
		},

		{
			title: '릴레베트',
			price: '￦ 4,000',
			titlesub: '싱글스프레이핸드샤워',
			info: '전체 분사 기능이 있어 물이 넓고 고르게 분사되므로 편안한 느낌으로 샤워할 수 있습니다. 샤워헤드의 고무 노즐을 문질러 닦아 간편하게 세척하여 사용할 수 있습니다. 샤워기에 내장된 와셔는 유량을 적절하게 유지하면서 물과 에너지 사용량을 줄여줍니다. 풀 분사 기능이 제공됩니다. 핸드샤워기는 분당 6.8l의 물을 소비합니다. 샤워호스는 별도구매입니다. 압력 조절 및 유량 조절 장치가 포함되어 있습니다.',
			size: '8cm x 21cm',
			color1: 'white',
			color2: 'lightgrey',
		},
	];

	$('.list_content a').click(function (e) {
		e.preventDefault();
		var txt = '';
		var ind = $(this).index('.list_content a'); // 0 1 2 3
		$('.modal_box').fadeIn('fast');
		$('.popup').fadeIn('slow');
		$('.popup img').attr('src', './images/content3/pd' + (ind + 1) + '.jpg');
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
