$(document).ready(function() {
    $('.visual_text').fadeIn(1500);
    
  $(window).on('scroll',function(){
    let contentposition = $('#content').offset().top;
    let scroll = $(window).scrollTop();
    if (scroll>contentposition-100 && !$('.headerInner').hasClass('activated')) {
        $('#headerArea').css('background-color','rgba(255, 255, 255, 0.95)').css('box-shadow','0 0 5px 0 #ccc');
        $('.headerInner').css('padding-top','0');
        $('#gnb a').css('color','black');
        $('#headerArea h1').css('background-image','url(images/logo.png)');
        $('.headerInner>a img').attr('src','images/more.png');
    } else if ( !$('.headerInner').hasClass('activated')){
        $('#headerArea').css('background-color','transparent').css('box-shadow','none');
        $('.headerInner').css('padding-top','');
        $('#gnb a').css('color','');
        $('#headerArea h1').css('background-image','');
        $('.headerInner>a img').attr('src','images/more_white.png');
    }

    if (scroll>contentposition/2) {
        $('.visual_text').hide();
        $('.down').hide();
    } else {
        $('.visual_text').fadeIn('slow');
        $('.down').fadeIn('slow');
    }
    });

    $('.headerInner>a').toggle(function(e){
        e.preventDefault();
        $('.headerInner').addClass('activated');
        $('.headerInner>a img').attr('src','images/more.png');
        $('#headerArea h1').css('background-image','url(images/logo.png)');
        $('body').css({'overflow':'hidden'});
    }, function(e) {
        e.preventDefault();
        let scroll = $(window).scrollTop();
        $('.headerInner').removeClass('activated');
        if (scroll<=1) {
            $('.headerInner>a img').attr('src','images/more_white.png');
        $('#headerArea h1').css('background-image','');
        }
        $('body').css({'overflow':''});
    })

    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });


  $('.topMove').hide();
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        if(scroll>500) {
            $('.topMove').slideDown();
        }else{
            $('.topMove').slideUp();
        }
    });
    $('.topMove').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},800);
    });

});