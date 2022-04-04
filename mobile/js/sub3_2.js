$(function () {
	function intro() {
		let txt = '<div class="core">';
		txt += '<img src="images/sub3/content2/bg0.jpg" alt="직무소개이미지">';
		txt += '              <p><span>핵심역량</span></p>';
		txt += '                          <ul>';
		txt += '                              <li>';
		txt +=
			'                                  <img src="images/sub3/content2/core1.jpg" alt="목표의식">';
		txt += '                                  <dl>';
		txt += '                                      <dt>목표의식</dt>';
		txt +=
			'                                      <dd>탁월한 목표를 설정하고, 목표를 이루기 위해 계획하여 달성합니다.</dd>';
		txt += '                                  </dl>';
		txt += '                             </li>';
		txt += '                             <li>';
		txt +=
			'                                  <img src="images/sub3/content2/core3.jpg" alt="열정">';
		txt += '                                  <dl>';
		txt += '                                      <dt>열정</dt>';
		txt +=
			'                                      <dd>목표달성에 대한 열정과 비전을 갖고 열과 성을 다해 업무에 임합니다.</dd>';
		txt += '                                   </dl>';
		txt += '                              </li>';
		txt += '                              <li>';
		txt +=
			'                                 <img src="images/sub3/content2/core2.jpg" alt="전문성">';
		txt += '                                 <dl>';
		txt += '                                      <dt>전문성</dt>';
		txt +=
			'                                      <dd>전문적인 지식을 바탕으로 고객에게 최적의 제안을 합니다.</dd>';
		txt += '                                 </dl>';
		txt += '                              </li>';
		txt += '                          </ul>';
		txt += '          </div>';
		txt += '         <div class="jobarea">';
		txt += '          <p><span>업무영역</span></p>';
		txt += '            <ul>';
		txt += '                <li>';
		txt +=
			'                    <img src="images/sub3/content2/area1.jpg" alt="가구제안">';
		txt += '                     <dl>';
		txt += '                        <dt>가구제안</dt>';
		txt +=
			'                        <dd>한샘에서 유통하는 가구를 고객에게 추천, 제안을 해주는 역할을 합니다.</dd>';
		txt += '                     </dl>';
		txt += '                 </li>';
		txt += '                <li>';
		txt +=
			'                  <img src="images/sub3/content2/area2.jpg" alt="설계상담">';
		txt += '                    <dl>';
		txt += '                        <dt>설계상담</dt>';
		txt +=
			'                        <dd>수납가구 및 인테리어 패키지 상담을 2D부터 3D설계로 구현하여 공간을 제안합니다.</dd>';
		txt += '                   </dl>';
		txt += '                </li>';
		txt += '                 <li>';
		txt +=
			'                     <img src="images/sub3/content2/area3.jpg" alt="패키지제안">';
		txt += '                 <dl>';
		txt += '                         <dt>인테리어 패키지 제안</dt>';
		txt +=
			'                      <dd>단순한 가구 판매가 아닌 공간을 제안합니다. 수백 가지의 패키지가 준비되어 있습니다.</dd>';
		txt += '               </dl>';
		txt += '               </li>';
		txt += '                <li>';
		txt +=
			'                   <img src="images/sub3/content2/area4.jpg" alt="고객관리">';
		txt += '                    <dl>';
		txt += '                        <dt>고객관리</dt>';
		txt +=
			'                         <dd>상담 및 계약한 고객을 최고의 서비스로 응대하며 사후관리를 통해 고객 감동에 최선을 다합니다.</dd>';
		txt += '                      </dl>';
		txt += '                 </li>';
		txt += '               </ul>';
		txt += '          </div>';
		$('.introduction').html(txt);
	}

	function growing() {
		let text = '<div class="oneyear">';
		text += '<img src="images/sub3/content2/bg1.jpg" alt="육성과정배경사진">';
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
		text += '              <dt>전문가과정</dt>';
		text +=
			'               <dd>가구 아이템별 전문가 과정 수료 후 전문가 자격이 부여되고 매장관리자로 성장합니다</dd>';
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
			'               <img src="images/sub3/content2/program1.png" alt="입문교육">';
		text += '               <dl>';
		text += '                   <dt>신입IC 입문교육</dt>';
		text += '                   <dd>소속 대리점 배치 전</dd>';
		text += '                  <dd> 상품 / 영업프로세스 지식 교육</dd>';
		text += '                   <dd>3 WEEK</dd>';
		text += '               </dl>';
		text +=
			'               <a href="#a" class="register">신청하기<i class="fas fa-angle-right"></i></a>';
		text += '           </div>';
		text += '       </div>';
		text += '<div class="swiper-slide">';
		text += '       <div>';
		text +=
			'          <img src="images/sub3/content2/program2.png" alt="보수교육">';
		text += '            <dl>';
		text += '              <dt>신입IC 입문OJT</dt>';
		text += '               <dd>소속 대리점 배치 후</dd>';
		text += '             <dd>화법 / 설계 / 서비스 / 제품 심화 교육</dd>';
		text += '              <dd>2 MONTH</dd>';
		text += '            </dl>';
		text +=
			'                <a href="#a" class="register">신청하기<i class="fas fa-angle-right"></i></a>';
		text += '           </div>';
		text += '        </div>';
		text += '        <div class="swiper-slide">';
		text += '            <div>';
		text +=
			'               <img src="images/sub3/content2/program3.png" alt="전담사원교육">';
		text += '               <dl>';
		text += '                   <dt>전문가 과정</dt>';
		text += '                   <dd>소속 대리점 배치 후</dd>';
		text += '                   <dd>가구 아이템별 전문가 과정 수료</dd>';
		text += '                    <dd>8 MONTH</dd>';
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
