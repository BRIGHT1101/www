<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$name)  {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>이름을 입력하세요.</span>");
      echo ("
      <script>
         $('.inname').css('border-color','#d2081e');
         $('#name').removeClass();
         $('#name').addClass('error');
      </script>
      ");
   } else {
      echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한  이름입니다.</span>";
      echo ("
         <script>
            $('.inname').css('border-color','#03c75a');
            $('#name').removeClass();
            $('#name').addClass('passed');
         </script>
      ");
      include "./checking.php";
      mysql_close();
   }
?>

