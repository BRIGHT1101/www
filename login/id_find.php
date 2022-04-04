<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아이디 찾기</title>
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/login.css">
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {
        $(".find").click(function() {    
            var name = $('#name').val();
            var hp = $('#hp').val(); 
            $.ajax({
                type: "POST",
                url: "find.php", 
                data: "name="+ name+ "&hp="+hp, 
                cache: false, 
                success: function(data) {
                    $("#loadtext").html(data); 
                }
            });
            $("#loadtext").addClass('loadtexton'); 
        }); 
    });
</script>
</head>
<body>
<div class="wrap">
    <div>
    <header>
		<h1><a class="logo" href="../index.html"><img src="./images/logo.png" alt="한샘로고"></a></h1>
		</header>
	<article id="content">
        <ul class="find_list">
            <li><a href="id_find.php" class="selected">아이디 찾기</a></li>
            <li><a href="pw_find.php"">비밀번호 찾기</a></li>
        </ul>
        <form name="find" method="post" action="find.php">
            <div>
                <label for="name">이름</label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="name">휴대전화</label>
                <input type="text" id="hp" name="hp" placeholder="' - ' 없이 입력" maxlength="11">
            </div>
            <span id="loadtext"></span>
            <button class="find" type="button">아이디 찾기</button>
        </form>
        <ul class="lastlist findform">
            <li><a href="login_form.php">로그인</a></li>
            <li><a href="../member/member_check.html">회원가입</a></li>
        </ul>
    </article>
</div>
</div> 
</body>
</html>