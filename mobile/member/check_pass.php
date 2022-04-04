<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$pass)  {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>비밀번호를 입력하세요.</span>");
      echo ("
         <script>
            $('.inpass').css('border-color','#d2081e');
            $('#pass').removeClass();
            $('#pass').addClass('error');
         </script>
      ");
   } else  {
      if (strlen($pass)<8) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>비밀번호는 8자 이상이어야합니다.</span>";
         echo ("
            <script>
               $('.inpass').css('border-color','#d2081e');
               $('#pass').removeClass();
               $('#pass').addClass('error');
            </script>
            ");
      } else {
         echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한 비밀번호입니다.</span>";
         echo ("
            <script>
               $('.inpass').css('border-color','#03c75a');
               $('#pass').removeClass();
               $('#pass').addClass('passed');
            </script>
      ");
      include "./checking.php";
      }
      mysql_close();
   }
?>

