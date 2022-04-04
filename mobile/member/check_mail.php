<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
      echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한  이메일입니다.</span>";
      echo ("<script>$('.inmail').css('border-color','#03c75a');
                  $('#email').removeClass();
                  $('#email').addClass('passed');</script>");
      include "./checking.php";
   } else {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>올바르지 않은 메일 형식입니다.</span>");
      echo ("<script>$('.inmail').css('border-color','#d2081e');
                  $('#email').removeClass();
                  $('#email').addClass('error');
                  </script>");
      mysql_close();
   }
?>

