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
	<meta name="viewport" content="width=device-width">
	<title>로그인</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="./css/login.css">
	<script src="../js/prefixfree.min.js"></script>
	<script>
        // <![CDATA[
        try {
            window.addEventListener('load', function () {
                setTimeout(scrollTo, 0, 0, 1);
            }, false);
        } catch (e) {}
        // ]]>
    </script>
</head>
<body>
	<div class="wrap">
		<div>
			<header>
				<h1><a class="logo" href="../index.html"><img src="../../common/images/navlogo.png" alt="한샘로고"></a></h1>
			</header>
			<article id="content">
				<h2>로그인</h2>
				<form name="member_form" method="post" action="login.php">
					<div>
						<label for="id">아이디</label>
						<input type="text" id="id" name="id">
					</div>
					<div>
						<label for="pass">비밀번호</label>
						<input type="password" id="pass" name="pass">
					</div>
					<button type="submit">로그인</button>
				</form>
				<ul class="lastlist">
					<li><a href="pw_find.php">비밀번호 찾기</a></li>
					<li><a href="id_find.php">아이디 찾기</a></li>
					<li><a href="../member/member_check.html">회원가입</a></li>
				</ul>
			</article>
		</div>
	</div>
</body>
</html>
