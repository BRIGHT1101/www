$(document).ready(function() {
  var screenSize, screenHeight;
  var current="wide";

  function screen_size(){
      
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이
      
      // if( screenSize > 768 && current==false){
      //     $("#videoBG").show();
      //     $("#videoBG").attr('src','./images/aaa.mp4');
      //     $("#imgBG").hide();
      //     current=true;
      //   }

      if(screenSize > 1280 && !(current=="wide")) {
        $(".new_con").append($('.new1'));
        $(".new_con").append($('.desc1'));
        $(".new_con").append($('.new2'));
        $(".new_con").append($('.desc2'));
        $(".new_con").append($('.new3'));
        $(".new_con").append($('.desc3'));
        $(".we3").attr('src','images/we3.jpg');
        $(".we1").attr('src','images/we1.jpg');
        $(".we2").attr('src','images/we2.jpg');
        current="wide";
      }

      if(screenSize>640 && screenSize <= 1280 && !(current=="tablet")){
          $(".new_con").append($('.new_desc'));
          $(".we3").attr('src','images/we4.jpg');
          $(".we1").attr('src','images/we1_re.jpg');
          $(".we2").attr('src','images/we2_re.jpg');
          current="tablet";
      }

      if(screenSize <=640 && !(current=="mobile")) {
        $(".new_con").append($('.new1'));
        $(".new_con").append($('.desc1'));
        $(".new_con").append($('.new2'));
        $(".new_con").append($('.desc2'));
        $(".new_con").append($('.new3'));
        $(".new_con").append($('.desc3'));
        current="mobile";
      }


      if(screenSize <= 768) {
        $('.gender').css('left','0');
        $('.gender_hidden').hide();
      } else {
        $('.gender').css('left','-50%');
        $('.gender>div').show();
      }
      
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  });  
  

  $('.men').toggle(function(e){
    let size = $(window).width();
    e.preventDefault();
    if (size>768) {
      $('.gender').animate({'left':0});
    } else {
      $('.m').fadeIn(200);
      $('.women').hide();
    }
    $(this).css({'filter':'grayscale(80%)'})
  }, function(e) {
    let size = $(window).width();
    e.preventDefault();
    if (size>768) {
      $('.gender').animate({'left':'-50%'});
    }else {
      $('.m').hide();
      $('.women').show();
    }
    $(this).css({'filter':''})
  });

  $('.women').toggle(function(e){
    let size = $(window).width();
    e.preventDefault();
    if (size>768) {
      $('.gender').animate({'left':'-100%'});
    }else {
      $('.w').fadeIn(200);
      $('.men').hide();
    }
    $(this).css({'filter':'grayscale(80%)'})
  }, function(e) {
    let size = $(window).width();
    e.preventDefault();
    if (size>768) {
      $('.gender').animate({'left':'-50%'});
    }else {
      $('.w').hide();
      $('.men').show();
    }
    $(this).css({'filter':''})
  });
  
  
});