<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
	include "../lib/dbconn.php";
	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);
  $row = mysql_fetch_array($result);      
	$item_num = $row[num];
	$item_id = $row[id];
	$item_name = $row[name];
  $item_nick = $row[nick];
	$item_hit = $row[hit];
  $item_date = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html = $row[is_html];
	if ($is_html!="y") {
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	
	$new_hit = $item_hit + 1;
	$sql = "update greet set hit=$new_hit where num=$num";
	mysql_query($sql, $connect);
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
	<script>
    function del(href) {
      if(confirm("삭제하시겠습니까?")) {
        document.location.href = href;
      }
    }
	</script>
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
		<div class="content_area">
			<div class="title"><?= $item_subject ?></div>
			<div class="title_desc">
				<div><?= $item_nick ?>｜<span><?= $item_date ?></span></div>
				<div><span>조회수 </span><?= $item_hit ?></div>
			</div>
			<div class="content_desc"><?= $item_content ?></div>
			<div class="view_button">
				<a class="list_btn" href="list.php?page=<?=$page?>&scale=<?=$scale?>#content"><i class="fas fa-clipboard-list"></i>목록</a>&nbsp;
				<? if($userid==$item_id || $userlevel==1 || $userid=="admin") {	?>
				<a class="modi_btn" href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>#content"><i class="fas fa-edit"></i>수정</a>&nbsp;
				<a class="del_btn" href="javascript:del('delete.php?num=<?=$num?>&scale=<?=$scale?>#content')"><i class="fas fa-trash-alt"></i>삭제</a>&nbsp;
				<? } ?>
				<? if($userid ) {	?>
					<a class="write_btn" href="write_form.php?scale=<?=$scale?>#content"><i class="fas fa-pencil-alt"></i>글쓰기</a>
				<? } ?>
				</div>
			</div>
		</article>
		<? include "../common/sub_footer.html" ?>
	</body>
</html>