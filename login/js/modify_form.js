$(document).ready(function () {
  $('.reg').css({'pointer-events':'none','opacity' : .3});
  function blocking() {
      $('.reg').css({'pointer-events':'none','opacity' : .3});
  }            
  //nick 중복검사		 
  $("#nick").keyup(function () { 
      blocking()
      var nick = $('#nick').val();
      $.ajax({
          type: "POST",
          url: "../member/check_nick.php",
          data: { nick : nick },
          cache: false,
          success: function (data) {
              $("#loadtext2").html(data);
          }
      });
  });

  $("#pass").keyup(function () { 
      blocking()
      var pass = $('#pass').val();

      $.ajax({
          type: "POST",
          url: "../member/check_pass.php",
          data: "pass=" + pass,
          cache: false,
          success: function (data) {
              $("#passtext").html(data);
          }
      });
  });

  $("#pass_confirm").keyup(function () {
      blocking()
      var passcon = $('#pass_confirm').val();
      var pass = $('#pass').val();
      $.ajax({
          type: "POST",
          url: "../member/check_repass.php",
          data: {pass : pass, passcon: passcon},
          cache: false,
          success: function (data) {
              $("#passcontext").html(data);
          }
      });
  });

  $("#name").keyup(function () { 
      blocking()
      var name = $('#name').val();
      $.ajax({
          type: "POST",
          url: "../member/check_name.php",
          data: {name :name},
          cache: false,
          success: function (data) {
              $("#nametext").html(data);
          }
      });
  });

  $("#hp").keyup(function () { 
      blocking()
      var tel = $('#hp').val();
      $.ajax({
          type: "POST",
          url: "../member/check_tel.php",
          data: {tel :tel},
          cache: false,
          success: function (data) {
              $("#teltext").html(data);
          }
      });
  });

  $("#email").keyup(function () { 
      blocking()
      
      var mail = $('#email').val();
      $.ajax({
          type: "POST",
          url: "../member/check_mail.php",
          data: {mail : mail},
          cache: false,
          success: function (data) {
              $("#mailtext").html(data);
          }
      });
  });

});