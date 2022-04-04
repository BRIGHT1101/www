$(document).ready(function () {
	var memo = [
		{
			title: '슬라툼',
			price: '￦ 179,000',
			titlesub: '쿠션형 침대프레임',
			info: '부드러운 직조 패브릭으로 씌워져 있어 침실에 아늑한 느낌을 더해줍니다. 침대헤드는 늦은 밤 독서를 즐길 때 편안한 등받이가 되어줍니다. 더 좋은 점은 모든 것이 단일 패키지로 제공된다는 점입니다. 고정커버는 부드러운 직조 패브릭으로 제작되었으며 침대헤드와 풋보드의 정교한 스티칭 디테일로 마무리되었습니다. 패딩처리된 부드러운 침대헤드는 침대에서 책을 읽거나 TV를 볼 때 편안하게 기댈 수 있도록 제작되었습니다.',
			size: '125cm x 120cm',
			color1: 'black',
			color2: 'grey',
		},

		{
			title: '홀름순드',
			price: '￦ 899,000',
			titlesub: '코너소파베드',
			info: '빠르고 간편하게 소파를 넉넉한 크기의 침대로 바꿀 수 있어 거실이 곧바로 침실이 됩니다. 시트 밑 수납 공간에는 침구, 베개, 책을 넣어두고 간편하게 꺼내어 사용할 수 있습니다.긴의자 밑에 수납공간이 있습니다. 의자시트를 열고 고정시킬 수 있어서 쉽고 안전하게 물건을 꺼내고 넣을 수 있습니다. 등쿠션의 각도를 원하는 대로 조절할 수 있고, 시트의 깊이와 등받이를 나에게 맞게 맞출 수 있습니다.',
			size: '230cm x 151cm',
			color1: 'beige',
			color2: 'skyblue',
		},

		{
			title: '롱피엘',
			price: '￦ 139,000',
			titlesub: '사무용의자',
			info: '스티치로 포인트를 준 부드러운 곡선형 디자인의 제품으로 편하게 사용할 수 있고 보기에도 근사합니다. 각도와 높이를 조절할 수 있어 오랫동안 곁에 두고 사용할 수 있어요. 부드러운 곡선과 박음질 디테일이 특징인 사무용 의자로, 시트 아래에 숨겨진 편리한 기능 덕분에 디자인이 더욱 돋보입니다. 안전바퀴가 압력 감지 잠금 메커니즘을 갖추고 있어 일어나면 안전하게 고정되고, 앉으면 자동으로 잠금이 해체됩니다.',
			size: '68cm x 92cm',
			color1: 'lightpink',
			color2: 'lightgreen',
		},

		{
			title: '플랏사',
			price: '￦ 221,500',
			titlesub: '옷장+도어2',
			info: 'PLATSA/플랏사 시리즈는 까다로운 공간에서도 편리하게 사용할 수 있는 수납 솔루션을 제시합니다. 필요에 따라 높게 올릴 수도, 아담한 높이로 둘 수도 있죠. 경사진 천장 밑이나 벽 전체에 설치합니다. 필요에 따라 도어와 각종 내부구성품으로 마무리합니다. 본 콤비네이션은 프레임과 벽 사이에 남는 공간을 활용하기에 좋습니다. 다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도 안정적으로 세울 수 있습니다.',
			size: '110-127x57x181 cm',
			color1: 'white',
			color2: 'lightgrey',
		},

		{
			title: '아딜스',
			price: '￦ 35,000',
			titlesub: '테이블',
			info: '미니멀한 인테리어로 꾸민 집이나 튼튼하고 강인한 가구를 원하는 가족에게 안성맞춤인 테이블이에요. 주방이나 다이닝룸에 사용하기에 좋으며, 깔끔한 디자인으로 어느 곳에나 조화롭게 어우러집니다. 이 테이블은 철제 프레임 덕분에 매우 견고합니다. 표면은 멜라민 처리되어 얼룩이나 흠집이 잘 생기지 않으며 청소도 편해 아이가 있는 가족이 사용하기에 좋습니다.',
			size: '125cm x 120cm',
			color1: 'white',
			color2: 'grey',
		},

		{
			title: '릭스훌트',
			price: '￦ 34,900',
			titlesub: '수납장',
			info: '특허받은 네오프레임을 패널을 국내 소파 최초로 적용다양한 물건의 정리정돈, 수납, 보관에 필요한 모든 것이 마련되어 있습니다. 기존 콤비네이션을 선택할 수도 있고 추구하는 스타일과 가지고 있는 물건에 맞추어 원하는 콤비네이션을 구성할 수도 있습니다. 가능성은 무궁무진합니다. 자유로운 조합이 가능한 수납 솔루션입니다. 원하는 색상과 크기를 선택해보세요. 수납장 문 안쪽에 중요한 자료, 편지, 신문 등을 정리해 둘 수 있습니다.',
			size: '65cm x 30cm',
			color1: 'beige',
			color2: 'white',
		},

		{
			title: '베리그',
			price: '￦ 99,900',
			titlesub: '수납형 책진열대',
			info: '책과 장난감을 보관할 수 있는 두 개의 오픈 선반과 넉넉한 서랍이 있는 책진열대입니다. 작은 공간에 모든 물건을 넣을 수 있고 아이가 물건을 스스로 넣고 꺼낼 수 있는 높이여서 놀이와 청소가 모두 간편합니다. 수납공간이 있는 낮은 책진열대가 있으면 아이가 책과 장난감을 스스로 넣고 꺼낼 수 있어요. 책의 앞 페이지가 잘 보인다면 책 읽기를 좋아하는 많은 아이들이 좋아하는 책을 더 쉽고 빠르게 찾을 수 있을 거예요.',
			size: '80cm x 101cm',
			color1: 'white',
			color2: 'black',
		},

		{
			title: '레르베리',
			price: '￦ 10,000',
			titlesub: '선반유닛',
			info: '작고 컴팩트한 수납 솔루션을 찾고 있나요? 바로 여기 있습니다. 깔끔한 디자인 양식의 튼튼한 선반유닛으로 모든 크기의 물건을 보관할 수 있는 여러 개의 오픈 선반이 있어요. 아이가 기어올라가거나 매달렸을 때 가구가 넘어가지 못하도록 가구를 벽에 고정하는 데 필요한 구멍이 나 있습니다.    벽의 재질에 따라 다른 나사를 사용해야 하며, 칼브럭이 필요할 수도 있습니다. 별도구매입니다.',
			size: '60cm x 70cm',
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
		$('.popup img').attr('src', './images/content1/pd' + (ind + 1) + '.jpg');
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
