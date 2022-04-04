<? 
	session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>회원가입</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/member_form.css">
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
</head>
<body>
<header>
        <h1><a class="logo" href="../index.html"><img src="../common/images/navlogo.png" alt="한샘로고"></a></h1>
    </header>
    <article id="content">
        <div>
            <h2><span>Step 2</span>정보 입력</h2>
            <form name="member_form" method="post" action="insert.php">
            <div>
                <label for="id">아이디</label>
                <div class="inner inid">
                    <input type="text" name="id" id="id" required>
                    <span id="loadtext" ></span>
                </div>
            </div>
            <div>
                <label for="pass">비밀번호</label>
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
                    <input type="text" name="name" id="name" required>
                    <span id="nametext"></span>
                </div>
            </div>
            <div class="nick">
                <label for="nick">닉네임</label>
                <div class="inner innick">
                    <input type="text" name="nick" id="nick" required>
                    <span id="loadtext2"></span>
                </div>
            </div>
            <div class="tel">
                <label for="hp">휴대전화</label>
                <div class="tel_inner">
                    <div class="inner inhp">
                        <input type="text" maxlength="11" placeholder=" ' - ' 없이 입력"  name="hp" id="hp" required>
                        <span id="teltext"></span>
                    </div>
                </div>
            </div>
            <div class="mail">
                <label for="email">이메일</label>
                <div class="inner inmail">
                    <input type="email" name="email" id="email" required placeholder="admin@hanssem.com">
                    <span id="mailtext"></span>
                </div>
            </div>
            <div class="button">
                <a href="#" class="reg" id="reg">가입하기</a>
                <a href="../index.html">취소</a>
            </div>
            </form>
        </div>
    </article>
    <script src="./js/member_form.js"></script>
    <script src="./js/check_valid.js"></script>
</body>
</html>
