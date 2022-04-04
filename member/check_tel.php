<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$tel)  {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>번호를 입력하세요.</span>");
      echo ("
      <script>
      $('.inhp').css('border-color','#d2081e');
      $('#hp').removeClass();
      $('#hp').addClass('error');
      </script>");
   } else  {
      include "../lib/dbconn.php";
      $sql = "select * from member where hp='$tel' ";
      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);
      if (!preg_match("/^01[0-9]{8,9}$/", $tel)) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>올바른 형식의 번호가 아닙니다.</span>";
         echo ("
         <script>
         $('.inhp').css('border-color','#d2081e');
         $('#hp').removeClass();
         $('#hp').addClass('error');
         </script>
         ");
      } else if ($num_record) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>중복된 번호입니다.</span>";
         echo ("
         <script>
         $('.inhp').css('border-color','#d2081e');
         $('#hp').removeClass();
         $('#hp').addClass('error');
         </script>
         ");
         } else {
         echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한 번호입니다.</span>";
         echo ("
         <script>
         $('.inhp').css('border-color','#03c75a');
         $('#hp').removeClass();
         $('#hp').addClass('passed');
         </script>
         ");
         include "./checking.php";
      }
      mysql_close();
   }
?>

