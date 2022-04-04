$(document).ready(function(){
  $('.sports_list li').click(function(){
    let index = $(this).index();
    let listOffset = $('.sports_desc li:eq('+index+')').offset().top;
    $('html,body').animate({'scrollTop':listOffset-100}, 700);
  });

  $('.media_list li').click(function(){
    $('.modal').css('display','flex');
    if($(this).index() == 0) {
      $('.modal iframe').attr('src','https://www.youtube.com/embed/EbZg9hPb9Wc');
    } else if ($(this).index() == 1) {
      $('.modal iframe').attr('src','https://www.youtube.com/embed/F5LbBqnWwV0' );
    } else {
      $('.modal iframe').attr('src','https://www.youtube.com/embed/j6oK7i8imu8');
    }
    $('#headerArea').css('filter','blur(3px)');
    $('.visual').css('filter','blur(3px)');
    $('#content').css('filter','blur(3px)');
    $('#footerArea').css('filter','blur(3px)');
    $('body').css('overflow','hidden');
  })

  $('.close').click(function(){
    $('.modal').hide();
    $('.modal iframe').attr('src','');
    $('#headerArea').css('filter','');
    $('.visual').css('filter','');
    $('#content').css('filter','');
    $('#footerArea').css('filter','');
    $('body').css('overflow','');
  })
})