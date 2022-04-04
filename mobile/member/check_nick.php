<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>닉네임을 입력하세요.</span>");
      echo ("
         <script>
            $('.innick').css('border-color','#d2081e');
            $('#nick').removeClass();
            $('#nick').addClass('error');
         </script>
      ");
   } else {
      include "../../lib/dbconn.php";
      $sql = "select * from member where nick='$nick' ";
      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);
      if ($num_record) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>중복된 닉네임입니다.</span>";
         echo ("
            <script>
               $('.innick').css('border-color','#d2081e');
               $('#nick').removeClass();
               $('#nick').addClass('error');
            </script>
         ");
      } else {
         echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한 닉네임입니다.</span>";
         echo ("
            <script>
               $('.innick').css('border-color','#03c75a');
               $('#nick').removeClass();
               $('#nick').addClass('passed');
            </script>
         ");
         include "./checking.php";
      }
      mysql_close();
   }
?>

