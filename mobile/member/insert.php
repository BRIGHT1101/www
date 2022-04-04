<meta charset="utf-8">
<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    $regist_day = date("Y-m-d (H:i)");  
    $ip = $REMOTE_ADDR;
    include "../lib/dbconn.php"; 
    $sql = "select * from member where id='$id'";
    $result = mysql_query($sql, $connect);
    $exist_id = mysql_num_rows($result);
    $sql = "insert into member(id, pass, name, nick, hp, email, regist_day, level) ";
    $sql .= "values('$id', password('$pass'), '$name', '$nick', '$hp', '$email', '$regist_day', 9)";
    mysql_query($sql, $connect);  
    mysql_close(); 
    echo "
        <script>
        location.href = './welcome.html?nick=$nick';
        </script>
    ";
?>
