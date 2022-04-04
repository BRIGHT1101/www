$(function () {
	function intro() {
		let txt = '<img src="images/sub3/content1/bg0.jpg" alt="직무소개배경">';
		txt += '<div class="core">';
		txt += '<div>';
		txt += '      <p><span>핵심역량</span></p>';
		txt += '     <ul>';
		txt += '       <li>';
		txt += '            <dl>';
		txt += '                <dt>열정</dt>';
		txt +=
			'                <dd>목표달성에 대한 열정과 비전을 갖고 열과 성을 다해 업무에 임합니다.</dd>';
		txt += '             </dl>';
		txt += '         </li>';
		txt += '         <li>';
		txt += '            <dl>';
		txt += '               <dt>전문지식</dt>';
		txt +=
			'             <dd>제품에 대한 전문지식을 바탕으로 고객에게 최적의 제안을 합니다.</dd>';
		txt += '               </dl>';
		txt += '          </li>';
		txt += '          <li>';
		txt += '               <dl>';
		txt += '                 <dt>설계력</dt>';
		txt +=
			'                  <dd>46년간 축적된 한샘의 설계방식을 바탕으로 고객에게 최적의 플랜을 제안합니다.</dd>';
		txt += '           </dl>';
		txt += '          </li>';
		txt += '        <li>';
		txt += '               <dl>';
		txt += '               <dt>상담력</dt>';
		txt +=
			'                 <dd>고객과의 상담을 통해 고객의 니즈와 라이프스타일을 정확히 파악합니다.</dd>';
		txt += '              </dl>';
		txt += '             </li>';
		txt += '            <li>';
		txt += '                <dl>';
		txt += '                 <dt>예절</dt>';
		txt +=
			'               <dd>고객응대와 관리에 예의를 다하여 고객 만족 및 연고를 이끌어 냅니다.</dd>';
		txt += '             </dl>';
		txt += '          </li>';
		txt += '        </ul>';
		txt += '     </div>';
		txt += '  </div>';
		txt += '    <div class="jobarea">';
		txt += '      <p><span>업무영역</span></p>';
		txt += '       <ul>';
		txt += '          <li>';
		txt +=
			'           <img src="images/sub3/content1/jobarea1.png" alt="상담">';
		txt += '       <dl>';
		txt += '            <dt>상담</dt>';
		txt +=
			'             <dd>고객의 니즈와 라이프스타일에 맞는 시스템 키친&욕실을 추천해주는 역할을 합니다.</dd>';
		txt += '         </dl>';
		txt += '    </li>';
		txt += '     <li>';
		txt +=
			'        <img src="images/sub3/content1/jobarea2.png" alt="설계디자인">';
		txt += '        <dl>';
		txt += '           <dt>설계디자인</dt>';
		txt +=
			'              <dd>키친&바스에 대한 전문적인 설계 및 디자인 작업을 통해 새로운 공간을 제안합니다.</dd>';
		txt += '          </dl>';
		txt += '       </li>';
		txt += '       <li>';
		txt +=
			'          <img src="images/sub3/content1/jobarea3.png" alt="패키지">';
		txt += '           <dl>';
		txt += '               <dt>홈인테리어 패키지 제안</dt>';
		txt +=
			'               <dd>키친&바스를 넘어 수납, 건자재에 이르기까지 토탈 홈 인테리어를 제안/판매합니다.</dd>';
		txt += '           </dl>';
		txt += '        </li>';
		txt += '      <li>';
		txt +=
			'           <img src="images/sub3/content1/jobarea4.png" alt="고객관리">';
		txt += '           <dl>';
		txt += '             <dt>고객관리</dt>';
		txt +=
			'             <dd>상담 및 계약한 고객을 대상으로 최고의 서비스와 사후관리를 제공하여, 고객감동을 실현합니다.</dd>';
		txt += '         </dl>';
		txt += '       </li>';
		txt += '      </ul>';
		txt += '   </div>';
		txt += '</div>';
		$('.introduction').html(txt);
	}

	function growing() {
		let text = '<div class="oneyear">';
		text += '<img src="images/sub3/content1/bg1.jpg" alt="육성과정배경사진">';
		text += '<p><span>1년 육성 프로세스</span></p>';
		text += ' <ul>';
		text += '    <li>';
		text += '      <div>1</div>';
		text += '       <dl>';
		text += '           <dt>입문교육</dt>';
		text +=
			'          <dd>제품, 설계, 화법, 서비스 교육을 통해 고객에게 공간을 제안 할 수 있는 능력을 키웁니다.</dd>';
		text += '      </dl>';
		text += '   </li>';
		text += '   <li>';
		text += '       <div>2</div>';
		text += '      <dl>';
		text += '           <dt>소속 대리점배치</dt>';
		text +=
			'           <dd>입문교육 후 소속대리점에 배치되어 사수로부터 1:1 실무 교육을 받습니다.</dd>';
		text += '      </dl>';
		text += '   </li>';
		text += '   <li>';
		text += '       <div>3</div>';
		text += '        <dl>';
		text += '            <dt>입문OJT</dt>';
		text +=
			'           <dd>OJT 기간을 통해 서비스 역량을 익히며 목표를 수립하여 달성하는 훈련을 하게 됩니다.</dd>';
		text += '        </dl>';
		text += '   </li>';
		text += '     <li>';
		text += '         <div>4</div>';
		text += '        <dl>';
		text += '              <dt>전담사원 교육</dt>';
		text +=
			'               <dd>아이템별 전담사원이 되어 설계, 서비스에 대한 역량을 체득하고 영업활동을 합니다.</dd>';
		text += '         </dl>';
		text += '       </li>';
		text += '   </ul>';
		text += '</div>';
		text += '<div class="program">';
		text += '    <p><span>교육 프로그램</span></p>';
		text += '   <div class="swiper-container swiper">';
		text += '    <div class="swiper-wrapper">';
		text += '       <div class="swiper-slide">';
		text += '           <div>';
		text +=
			'               <img src="images/sub3/content1/educate1.png" alt="입문교육">';
		text += '               <dl>';
		text += '                   <dt>신입KD 입문교육</dt>';
		text += '                   <dd>소속 대리점 배치 전</dd>';
		text += '                  <dd> 상품 / 영업프로세스 지식 교육</dd>';
		text += '                   <dd>4 WEEK</dd>';
		text += '               </dl>';
		text +=
			'               <a href="#a" class="register">신청하기<i class="fas fa-angle-right"></i></a>';
		text += '           </div>';
		text += '       </div>';
		text += '<div class="swiper-slide">';
		text += '       <div>';
		text +=
			'          <img src="images/sub3/content1/educate2.png" alt="보수교육">';
		text += '            <dl>';
		text += '              <dt>OJT 및 보수교육</dt>';
		text += '               <dd>소속 대리점 배치 후</dd>';
		text += '             <dd>화법 / 설계 / 서비스 / 제품 심화 교육</dd>';
		text += '              <dd>3 MONTH</dd>';
		text += '            </dl>';
		text +=
			'                <a href="#a" class="register">신청하기<i class="fas fa-angle-right"></i></a>';
		text += '           </div>';
		text += '        </div>';
		text += '        <div class="swiper-slide">';
		text += '            <div>';
		text +=
			'               <img src="images/sub3/content1/educate3.png" alt="전담사원교육">';
		text += '               <dl>';
		text += '                   <dt>전담사원 교육</dt>';
		text += '                   <dd>소속 대리점 배치 후</dd>';
		text += '                   <dd>전담사원 심화교육 해외연수 프로그램</dd>';
		text += '                   <dd>6 MONTH</dd>';
		text += '                </dl>';
		text +=
			'                <a href="#a" class="register">신청하기<i class="fas fa-angle-right"></i></a>';
		text += '            </div>';
		text += '         </div>';
		text += '      </div>';
		text += '      <div class="swiper-pagination"></div>';
		text += '  </div>';
		text += '</div>';
		$('.introduction').html(text);
		var swiper = new Swiper('.swiper', {
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
		});
	}

	intro();

	$('.con_nav a:eq(0)').addClass('activated');
	$(document).on('click', '.con_nav a', function (e) {
		e.preventDefault();
		$('.con_nav a').removeClass();
		$(this).addClass('activated');
		let list = $(this).parents('li').index();
		if (list == 0) intro();
		else growing();
	});
});
