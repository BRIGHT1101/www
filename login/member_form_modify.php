<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head> 
<meta charset="utf-8">
<title>내 정보</title>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
<link href="../common/css/common.css" rel="stylesheet">
<link href="./css/modify.css" rel="stylesheet">
</head>
<?
    include "../lib/dbconn.php";
    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);
    $row = mysql_fetch_array($result);
    mysql_close();
?>
<body>
    <header>
        <h1><a class="logo" href="../index.html"><img src="../common/images/navlogo.png" alt="한샘로고"></a></h1>
    </header>
    <article id="content">
        <h2>내 정보 수정</h2>
        <form  name="member_form" method="post" action="modify.php"> 
            <div>
                <label for="id">아이디</label>
                <div class="inner inid">
                    <div id="id" class="passed"><?= $row[id] ?></div> 
                </div>
            </div>
            <div>
                <label for="pass">변경할 비밀번호</label>
                <div class="inner inpass">
                    <input type="password" name="pass" id="pass" required>
                    <span id="passtext"></span>
                </div>
            </div>
            <div>
                <label for="pass_confirm">비밀번호 재확인</label>
                <div class="inner inpasscon">
                    <input type="password" name="pass_confirm" id="pass_confirm" required>
                    <span id="passcontext"></span>
                </div>
            </div>
            <div class="name">
                <label for="name">이름</label>
                <div class="inner inname">
                    <input type="text" class="passed" name="name" id="name" required value="<?= $row[name] ?>">
                    <span id="nametext"></span>
                </div>
            </div>
            <div class="nick">
                <label for="nick">닉네임</label>
                <div class="inner innick">
                    <input type="text" class="passed" name="nick" id="nick" value="<?= $row[nick] ?>" required>
                    <span id="loadtext2"></span>
                </div>
            </div>
            <div class="tel">
                <label for="hp">휴대전화</label>
                <div class="tel_inner">
                    <div class="inner inhp">
                        <input type="text" maxlength="11" placeholder=" ' - ' 없이 입력"  class="passed" name="hp" id="hp" required value="<?= $row[hp] ?>">
                        <span id="teltext"></span>
                    </div>
                </div>
            </div>
            <div class="mail">
                <label for="email">이메일</label>
                <div class="inner inmail">
                    <input type="email" class="passed" name="email" id="email" required placeholder="admin@hanssem.com" value="<?= $row[email] ?>">
                    <span id="mailtext"></span>
                </div>
            </div>
            <div class="button">
                <a href="#" class="reg" id="reg">수정하기</a>
                <a href="../index.html">취소</a>
            </div>
        </form>
	</article>
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/modify_form.js"></script>
    <script src="./js/modify_valid.js"></script>
</body>
</html>
