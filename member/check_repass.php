<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$passcon) {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>비밀번호를 입력하세요.</span>");
      echo ("
      <script>
      $('.inpasscon').css('border-color','#d2081e');
      $('#pass_confirm').removeClass();
      $('#pass_confirm').addClass('error');
      </script>
      ");
   } else {
      if ($pass == $passcon) {
         echo "<span style='color:#03c75a'><i class='fas fa-check'></i>비밀번호가 일치합니다.</span>";
         echo ("
         <script>$('.inpasscon').css('border-color','#03c75a');
         $('#pass_confirm').removeClass();
         $('#pass_confirm').addClass('passed');
         </script>");
         include "./checking.php";
      } else  {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>비밀번호가 일치하지 않습니다.</span>";
         echo ("
         <script>
         $('.inpasscon').css('border-color','#d2081e');
         $('#pass_confirm').removeClass();
         $('#pass_confirm').addClass('error');
         </script>
         ");
      }
      mysql_close();
   }
?>

