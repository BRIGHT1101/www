<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$id)  {
      echo("<span style='color:#d2081e'><i class='fas fa-times'></i>아이디를 입력하세요.</span>");
      echo ("<script>$('.inid').css('border-color','#d2081e');
                  $('#id').removeClass();
                  $('#id').addClass('error');</script>");
   } else  {
      include "../lib/dbconn.php";
      $sql = "select * from member where id='$id' ";
      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);
      if (strlen($id)<4) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>아이디는 4자 이상이어야합니다.</span>";
         echo ("<script>$('.inid').css('border-color','#d2081e');
                     $('#id').removeClass();
                     $('#id').addClass('error');</script>");
      }else if (!preg_match("/[xA1-xFE][xA1-xFE]/", $id)) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>아이디는 영문과 숫자만 가능합니다.</span>";
         echo ("<script>$('.inid').css('border-color','#d2081e');
                     $('#id').removeClass();
                     $('#id').addClass('error');</script>");
      } else if ($num_record) {
         echo "<span style='color:#d2081e'><i class='fas fa-times'></i>중복된 아이디입니다.</span>";
         echo ("<script>
                     $('.inid').css('border-color','#d2081e');
                     $('#id').removeClass();
                     $('#id').addClass('error');
                     </script>");
      } else {
         echo "<span style='color:#03c75a'><i class='fas fa-check'></i>사용가능한 아이디입니다.</span>";
         echo ("<script>
                     $('.inid').css('border-color','#03c75a');
                     $('#id').removeClass();
                     $('#id').addClass('passed');
                     </script>");
         include "./checking.php";
      }
      mysql_close();
   }
?>

