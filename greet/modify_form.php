<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
	include "../lib/dbconn.php";
	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);
	$row = mysql_fetch_array($result);       	
	$item_subject = $row[subject];
	$item_content = $row[content];
	$is_html = $row[is_html];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<script src="../common/js/prefixfree.min.js"></script>
</head>
<body>
<? include "../common/sub_header.html" ?>
<div class="visual">
		<img src="../sub6/common/images/visual.jpg" alt="visual">
		<div>
			<div>
				<h3>고객지원</h3>
				<span>Customer Center</span>
			</div>
		</div>
	</div>
	<div class="sub_menu">
		<ul>
			<li class="current"><a href="list.php">공지사항</a></li>
			<li><a href="../sub6/sub6_2.html">오시는 길</a></li>
			<li><a href="../sub6/sub6_3.html">고객상담</a></li>
		</ul>
	</div>
	<article id="content">
		<div class="title_area">
			<div class="line_map">
				<i class="fas fa-home"><span class="hidden">HOME</span></i>&gt; 고객지원 &gt; <strong>공지사항</strong>
			</div>
		</div>
		<div class="content_area write">
			<h2>공지사항 글 수정</h2>
			<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>"> 
				<input class="write_title "type="text" name="subject" value="<?=$item_subject?>">
				<div class="content_outer">
					<textarea name="content"><?=$item_content?></textarea>
				</div>
				<div class="bottom_button">
					<button type="submit"><i class="fas fa-pencil-alt"></i>등록</button>
					<a class="list_btn" href="list.php?page=<?=$page?>#content"><i class="fas fa-clipboard-list"></i>목록</a>
						<div class="checkbox_outer">
							<? if ($is_html=='y') { ?>
							<input type="checkbox" name="html_ok" value="y" class="html_check" id="html_check" checked>
							<? } else { ?>
							<input type="checkbox" name="html_ok" value="y" class="html_check" id="html_check">
							<? } ?>
							<label for="html_check">HTML</label>
						</div>
				</div>
			</form>
		</div>
	</article>
<? include "../common/sub_footer.html" ?>
</body>
</html>