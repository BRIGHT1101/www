const cameraDesc = [
	{
		pname: 'EOS R6',
		title: '결정적인 순간을 놓치지 않는 *최대 약 20fps의 고속 연속 촬영',
		desc: 'EOS R6는 CMOS 센서의 고속 이미지 데이터 판독 능력과 DIGIC X 프로세서의 고속 이미지 처리 능력으로 최대 약 20fps의 연속 촬영이 가능합니다. AF/AE 추적과 함께 기계 셔터 (전자식 선막 동조 셔터) 설정 사용 시 최대 약 12fps의 속도로 고속 연속 촬영이 가능하며, 높은 정밀도를 자랑하는 듀얼 픽셀 CMOS AF II 시스템을 통해 결정적인 순간을 안정적으로 포착할 수 있습니다.',
		tip: '렌즈의 종류에 의해서 촬영 속도가 변화될 수 있습니다.',
	},
	{
		pname: 'EOS R5',
		title: '압도를 넘어선 해상력 *세계 최초 8K 30P 촬영',
		desc: '빨라진 CMOS 센서의 판독 속도와 DIGIC X 처리 성능으로 카메라에서의 언크롭 8K 동영상 촬영이 가능합니다. 이는 풀프레임 미러리스 카메라로서는 최초로, 사용자는 AF 기능을 사용하여 정교한 동영상을 촬영할 수 있습니다. 이는 APS-C(Super 35mm)와 유사한 이미지 서클로 고품질 결과를 제공합니다.',
		tip: '2022년 현재 발매 중인 렌즈교환식 디지털 카메라 중에서',
	},
	{
		pname: 'EOS RP',
		title: '*약 440g의 초경량 풀프레임 미러리스 EOS RP',
		desc: '캐논은 첫 번째 풀프레임 미러리스 카메라 EOS R에 이어 작고 가벼운 35mm 풀프레임 미러리스 EOS RP를 새롭게 선보입니다. 약 2,620만 화소의 35mm 풀프레임 CMOS 센서와 최신 영상 엔진을 탑재한 EOS RP는 EOS R 시스템만의 54mm 대구경, 20mm의 짧은 백 포커스와 새로운 RF렌즈군을 기반으로 뛰어난 광학 성능 및 고화질, AF 성능 기능 EOS만의 편의성 등을 결집한 카메라입니다.',
		tip: '배터리, 메모리카드, 바디캡을 제외한 카메라 본체 기준',
	},
	{
		pname: 'EOS Ra',
		title: '시야율 100% 압도적으로 뛰어난 *EVF',
		desc: '고해상도 디스플레이로 화면 떨림 없이 안정적이고 높은 아이포인트로 더욱 쉽고 편하게 볼 수 있는 전자식 뷰파인더 (EVF)를 탑재하였습니다. 상세 데이터 표시로 사용자가 뷰파인더를 보면서도 쉽게 설정을 조정하고 촬영할 수 있도록 하였으며 EOS 카메라 최초로 EVF와 카메라 후면의 LCD 모니터의 색조를 개별적으로 조정하는 기능을 추가했습니다.',
		tip: 'Electronic View Finder (전자식 뷰 파인더)',
	},
	{
		pname: 'EOS R',
		title: '캐논의 첫 번째 *풀프레임 미러리스',
		desc: '캐논은 풀프레임 DSLR의 아성을 넘어 첫 번째 풀프레임 미러리스를 선보입니다. EOS R은 약 3,030만 화소의 35mm 풀프레임 CMOS 센서와 최신형 영상 엔진을 탑재, 54mm의 대구경과 20mm의 짧은 플랜지 초점 거리와 새로운 RF 렌즈군을 기반으로 더욱 향상된 광학 성능과 강력해진 이미지 퀄리티, 강력해진 AF 성능 및 다양한 기능과 EOS만의 편의성이 결집된 카메라입니다.',
		tip: ' 풀프레임 센서를 채택한 렌즈교환식 카메라 ',
	},
];

$(document).ready(function () {
	$('body').scrollspy({ target: '.navbar' });
	$('.carousel').carousel({
		interval: 5000,
		pause: false,
	});
	$('#myTab a:first').tab('show');
	$('.gal_popover').popover({
		trigger: 'click hover',
		placement: 'top',
		html: true,
	});
	$('.eos_tooltip').tooltip();
	$('.dropdown-menu>li').click(function (e) {
		e.preventDefault();
		let indexnum = $(this).index();
		$('.eos_desc>img').attr('src', 'images/e' + indexnum + '.png');
		$('.dropdown_current').text(cameraDesc[indexnum].pname);
		$('.eos_text').html(
			'<p class="eos_tooltip" data-toggle="tooltip" title="' +
				cameraDesc[indexnum].tip +
				'">' +
				cameraDesc[indexnum].title +
				'</p><p>' +
				cameraDesc[indexnum].desc +
				'</p>'
		);
		$('.eos_tooltip').tooltip();
	});
	$('.topMove').hide();
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if (scroll > 500) {
			$('.topMove').fadeIn('slow');
		} else {
			$('.topMove').fadeOut('slow');
		}
	});
	$('.topMove').click(function (e) {
		e.preventDefault();
		$('html,body').scrollTop(0);
	});
});
