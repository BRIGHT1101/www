<? session_start(); ?>
<meta charset="UTF-8">
<?
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION); 
   if(!$name) {  
      echo("<div class='wran'>이름을 입력하세요</div>");
      exit;
   }
   if(!$hp) {
      echo("<div class='wran'>연락처를 입력하세요</div>");
      exit;
   }
   include "../../lib/dbconn.php";
   $sql = "select * from member where name='$name'"; 
   $result = mysql_query($sql, $connect);
   $num_match = mysql_num_rows($result);
   if(!$num_match) {
      echo("<div class='wran'>등록되지 않은 이름 입니다</div>");
   } else { 
      $row = mysql_fetch_array($result);
      $sql ="select * from member where name='$name' and hp='$hp'";
      $result = mysql_query($sql, $connect);
      $num_match = mysql_num_rows($result); 
      if(!$num_match) {
         echo("<div class='wran'>등록된 정보가 없습니다</div>");
         exit;
      } else {
         $userid = $row[id];
         $username = $row[name];
         $userhp = $row[hp];
         $date = $row[regist_day];
         echo ("<div class='suc'><span>$username</span>님의 아이디 찾기가 완료되었습니다.</div>
                     <div class='tem'>아이디 : <span>$userid</span></div>");
      }
   }          
?>
