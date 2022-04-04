$(document).ready(function () {
	var memo = [
		{
			title: '리사토르프',
			price: '￦ 7,900',
			titlesub: '바구니',
			info: '실온에 두는 과일과 야채를 보관할 때 사용하기 좋은 제품입니다. 메시 그물망으로 제작되어 공기가 잘 순환되기 때문에, 신선함은 더 오래 유지됩니다. 현관이나 침실, 홈오피스에서도 활용할 수 있는 다재다능한 제품이랍니다. 사용이 편한 바구니로 과일과 채소 등을 넣어놓으면 쉽게 내용물을 확인할 수 있고 장식 효과까지 있습니다. 장을 볼 때나 텃밭에서 직접 키운 채소를 담아올 때도 사용할 수 있어요.',
			size: '25x26x18 cm',
			color1: 'orange',
			color2: 'olive',
		},

		{
			title: '니우트닝',
			price: '￦ 7,900',
			titlesub: '꽃병+디퓨져스틱 6종',
			info: '따뜻한 밀크티와 베르가모트 향이 어우러진 강렬한 향입니다. 장식 향스틱을 꽃병에 꽂아 두면 현관, 욕실, 침실 등의 공간이 편안하고 쾌적한 분위기로 가득 찹니다. 향스틱은 건조한 제품이므로 액체 아로마 오일과 달리 엎지르는 사고가 발생하지 않습니다.',
			size: '8cm x 8cm',
			color1: 'grey',
			color2: 'lightblue',
		},

		{
			title: '트롬마',
			price: '￦ 3,000',
			titlesub: '벽시계',
			info: '시계의 깔끔하게 맞닿은 앞뒷면 디자인이 보다 부드러운 분위기를 선사합니다. 무소음 쿼츠 무브먼트를 사용하여 째깍 소리가 나지 않습니다. 건전지는 별도 판매입니다. LR6 AA 1.5V 1개가 필요합니다. 이 제품에는 CE 마크가 있습니다.',
			size: '25cm',
			color1: 'white',
			color2: 'grey',
		},

		{
			title: '피스크보',
			price: '￦ 1,900',
			titlesub: '액자',
			info: '가장 좋아하는 그림으로 꾸며보세요. 이 액자는 곡선형으로, 어린이 방에 대한 테스트 및 승인을 거쳤으며 다양한 크기로 제공됩니다. 플라스틱 소재의 전면 보호를 적용해 안전하며 모티브를 제대로 보여줍니다. 벽에 걸 수도 있고 바닥에 세울 수도 있으며 공간에 맞게 방향을 바꿀 수 있습니다. 플라스틱 소재의 전면 보호필름을 사용하여 안전합니다. 벽의 재질에 따라 다른 나사를 사용해야 하며, 칼브럭이 필요할 수도 있습니다.',
			size: '13cm x 18cm',
			color1: 'white',
			color2: 'lightgrey',
		},

		{
			title: '로테라',
			price: '￦ 3,900',
			titlesub: '미니양초랜턴',
			info: '랜턴은 홈 데코를 더 멋지게 만들어주고, 바깥이 어두워지면 은은한 빛으로 아늑한 분위기를 만들어줍니다. 따뜻해진 집에서 손님은 환영받는 기분을 느끼게 되고, 매 순간에 로맨틱한 느낌을 더할 수 있어요. 파티나 모임을 열 때 걸어두면 분위기가 더욱 살아납니다. 실내외 어디에서나 사용할 수 있습니다. 미니양초 1개만 사용할 수 있습니다.',
			size: '21cm',
			color1: 'white',
			color2: 'black',
		},

		{
			title: '드뢰니엔스',
			price: '￦ 9,900',
			titlesub: '서류함',
			info: '중요한 서류와 고지서를 자꾸 잃어버리나요? 모든 종이류를 깔끔하게 정돈할 수 있는 편리한 서류함을 소개합니다. 여러 개를 겹쳐 쌓거나 단독으로 사용하세요. 각종 고지서와 종이류를 모아두기 편리한 2단 서류함입니다. 부드러운 플라스틱 받침이 있어서 쉽게 밀리지 않고 바닥에 흠집도 생기지 않습니다. 여러 단으로 겹치거나 단을 분리하여 사용할 수 있습니다.',
			size: '24cm x 34cm',
			color1: 'beige',
			color2: 'white',
		},

		{
			title: '벨라르타드',
			price: '￦ 5,900',
			titlesub: '데코용새',
			info: '테이블 장식으로도 사용할 수 있습니다. 소나무 원목, 틴트 투명래커로 만들어졌습니다. 젖은 천으로 닦아주세요. 이 제품에는 목재처럼 재생 가능한 소재를 사용해서 화석 연료나 유한 소재의 사용을 피했어요.',
			size: '25cm x 26cm',
			color1: 'white',
			color2: 'beige',
		},

		{
			title: '페이카',
			price: '￦ 5,000 / 3개',
			titlesub: '실내외겸용 다육식물',
			info: '식물 키우기의 달인이 아니어도 FEJKA/페이카 인조식물이라면 걱정 없습니다. 죽은 잎을 정리하거나 물을 줄 필요가 없어요. 누가 봐도 감쪽같이 살아 있는 식물처럼 보이죠. 살아 있는 것처럼 보이는 인조식물로 오랫동안 싱싱함을 유지하죠. 진짜 식물은 아니지만 언제든지 자연의 아름다움을 느낄 수 있습니다. 실내, 실외에서 모두 사용하기 적합합니다.',
			size: '6cm',
			color1: 'grey',
			color2: 'white',
		},
	];

	$('.list_content a').click(function (e) {
		e.preventDefault();
		var txt = '';
		var ind = $(this).index('.list_content a'); // 0 1 2 3
		$('.modal_box').fadeIn('fast');
		$('.popup').fadeIn('slow');
		$('.popup img').attr('src', './images/content4/pd' + (ind + 1) + '.jpg');
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

	$('.product_main li:eq(0) a').css('opacity', '1').css('font-weight', '500');
	const pdind = [
		{
			title: '유칼립투스',
			desc: '유칼립투스는 이국적이면서 실내공기정화의 대표적인 식물입니다. 햇빛이 어느정도 들어오는 밝은 곳에 두면 잎의   색깔이 더 선명하고 아름답습니다. 물을 좋아하는 식물이므로 겉흙이 마를때 흠뻑 주시면 됩니다.',
		},
		{
			title: '스위트피',
			desc: '스위트피는 하늘하늘한 꽃잎과 영롱한 색감이 매력적입니다. 꽃잎에 여러색이 그라데이션되어 햇빛에 비춰지면 더욱 예쁜 색감을 냅니다. 다른 꽃들과의 조합도 대체적으로 좋아 카페, 회사, 홈 인테리어나 촬영 소품으로 사용하시면 좋습니다.',
		},
		{
			title: '아스파라거스',
			desc: '아스파라거스는 강인한 생명력을 가지고 있으며 건조에도 강해 약간은 무심한 듯, 식물키우기 초보자들도 손쉽게 키울 수 있습니다. 전체적으로 내츄럴한 수형이 멋스러워 어느 공간이던지 감성 플랜테리어를 할 수 있습니다.',
		},
	];

	$('.product_main li a').click(function (e) {
		e.preventDefault();
		$('.best_selected').hide();
		$('.product_main li a').css('opacity', '').css('font-weight', '');
		$(this).css('opacity', '1').css('font-weight', '500');
		let txt = '';
		let ind = $(this).index('.product_main li a');
		let num = ind + 1;
		txt +=
			'<img src="images/content4/product' +
			num +
			'_1.jpg" class="bg1" alt="제품상세이미지"><img src="images/content4/product' +
			num +
			'_2.jpg" class="bg2" alt="제품상세이미지"><dl>';
		txt += '<dt>' + pdind[ind].title + '</dt>';
		txt += '<dd>' + pdind[ind].desc + '</dd></dl>';
		$('.best_selected').html(txt);
		$('.best_selected').show();
	});

	$('.guide li:eq(0) a').css('opacity', '1');
	const guidearr = [
		{
			title: '나만의 무드보드 만들기',
			desc: '메모판을 활용해서 계절에 맞게 장식을 바꾸거나 그때그때 떠오르는 아이디어로 장식할 수 있습니다. 꾸준하게 사랑받는 스쿠루프 벽부착등과 같은 분위기 있는 조명을 더하면 인더스트리얼 감각을 더할 수 있어요.',
		},
		{
			title: '액자를 다양하게 조합하기',
			desc: '다양한 스타일의 액자를 과감하게 사용하여 재미 있고 개성 넘치는 모습으로 꾸며보세요. 벽에 책상이나 서랍을 붙여서 더 많은 아이템을 진열하면 아트 월이 넓어지고 갤러리 벽을 방의 포인트 공간으로 만들 수 있어요.',
		},
		{
			title: '버려진 공간 활용하기',
			desc: '집 안에서 밋밋한 벽면을 찾아보세요. 창가 옆 코너는 자연광이 잘 들어와서 가장 좋아요. 벽에 액자선반을 걸고 좋아하는 그림을 액자에 넣어 진열해보세요. 뉴트럴 톤의 커튼과 매치하면 아트 월이 생기 넘치는 공간으로 변할 거예요.',
		},
		{
			title: 'DIY 아트 디자인',
			desc: '엄청난 실력의 예술가가 아니어도 나만의 작품을 그릴 수 있습니다. 좋아하는 컬러를 골라서 추상적인 모양을 다양하게 그려보세요. 완성한 예술작품을 마스킹 테이프로 벽에 붙이면 벽을 손상시키지 않고도 나중에 다른 작품으로 바꿀 수 있어요.',
		},
		{
			title: '수납장을 활용한 디스플레이',
			desc: '스마트한 페그보드를 사용하면 정리정돈과 벽 꾸미기를 동시에 할 수 있어 일석이조예요. 간단하게 떼어내거나 교체할 수 있어 활용도가 높은 후크, 선반, 보관용기와 같은 다양한 액세서리를 추가해보세요.',
		},
		{
			title: '바로 벽에 걸 수 있는 작품',
			desc: '마음에 드는 일러스트가 그려진 프린트 세트를 골라보세요. 이번엔 여행 컨셉으로 꾸며보았어요. 다양한 그림으로 나만의 벽 콜라주를 만들고 그 아래에 클래식한 유리 수납장을 설치하여 테마에 맞는 아끼는 장식품과 기념품을 진열해보세요.',
		},
	];

	$('.guide li a').click(function (e) {
		e.preventDefault();
		$('.guide>div').hide();
		$('.guide li a').css('opacity', '');
		$(this).css('opacity', '1');
		let guidetxt = '';
		let guideind = $(this).index('.guide li a');
		let guidenum = guideind + 1;
		guidetxt +=
			'<img src="images/content4/guide' +
			guidenum +
			'_1.jpg" alt="가이드상세이미지"><dl>';
		guidetxt +=
			'<dt><span>' + guidenum + '</span>' + guidearr[guideind].title + '</dt>';
		guidetxt += '<dd>' + guidearr[guideind].desc + '</dd></dl>';
		$('.guide>div').html(guidetxt);
		$('.guide>div').show();
	});

	$('.close_btn, .modal_box').click(function (e) {
		e.preventDefault();
		$('.modal_box').hide();
		$('.popup').hide();
		$('html, body').css('overflow', 'auto');
	});
});
