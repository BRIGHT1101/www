<? session_start(); ?>
<meta charset="UTF-8">
<?
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION); 
    if(!$id) {  
        echo("<div class='wran'>아이디를 입력하세요</div>");
        exit;
    }
    if(!$name) { 
        echo("<div class='wran'>이름을 입력하세요</div>");
        exit;
    }
    if(!$hp) {
        echo("<div class='wran'>휴대전화를 입력하세요</div>");
        exit;
    }
    include "../lib/dbconn.php";
    $sql = "select * from member where id='$id'";
    $result = mysql_query($sql, $connect);
    $num_match = mysql_num_rows($result); 
    if(!$num_match) {
        echo("<div class='wran'>등록되지 않은 아이디 입니다</div>");
    } else  {
        $row = mysql_fetch_array($result); 
        $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
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
            function generateRandomPassword($length=8, $strength=0) {
                $vowels = 'aeuy';
                $consonants = 'bdghjmnpqrstvz'; 
                if ($strength & 1) {
                    $consonants .= 'BDGHJLMNPQRSTVWXZ';  
                }
                $password = '';
                $alt = time() % 2;
                for ($i = 0; $i < $length; $i++) {
                    if ($alt == 1) {
                        $password .= $consonants[(rand() % strlen($consonants))];
                        $alt = 0;
                    } else {
                        $password .= $vowels[(rand() % strlen($vowels))];
                        $alt = 1;
                    }
                }
                return $password;
            }
        $ranpass = generateRandomPassword(8,1); 
        echo " 
        <div class='suc'><span>$username</span>님의 임시 비밀번호가 발급되었습니다.
            <div>로그인 후 비밀번호를 변경해주세요.</div>
        </div>
        <div class='tem'>임시 비밀번호 : <span>$ranpass</span></div>";
        $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        }
    }          
?>
