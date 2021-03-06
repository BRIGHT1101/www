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
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<script src="../common/js/prefixfree.min.js"></script>
	<?
	include "../lib/dbconn.php";
	
  if (!$scale) $scale=10;	
  if ($mode=="search") {
		if(!$search) {
			echo("
				<script>
					window.alert('검색할 단어를 입력해 주세요.');
					history.go(-1);
				</script>
			");
			exit;
		}
		$sql = "select * from greet where $find like '%$search%' order by num desc";
	} else	{
		$sql = "select * from greet order by num desc";
	}
	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result); 
	if ($total_record % $scale == 0) {
		$total_page = floor($total_record/$scale);      
	} else {
		$total_page = floor($total_record/$scale) + 1; 
	}
	if (!$page)	$page = 1;  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
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
			<h2>공지사항</h2>
			<p>한샘의 주요 이슈 및 공지사항을 알려드립니다</p>
		</div>
		<div class="content_area">
			<div class="list_header">
				<div>TOTAL<span> <?= $total_record ?></span></div>
				<select name="scale" onchange="location.href='list.php?scale='+this.value+'#content'">
				<?if ($scale == 5) { ?>
					<option value='5' selected>5개씩</option>
					<option value='10'>10개씩</option>
					<option value='20'>20개씩</option>
					<option value='50'>50개씩</option>
				<? } ?>
				<? if ($scale == 10) { ?>
					<option value='5' >5개씩</option>
					<option value='10' selected>10개씩</option>
					<option value='20'>20개씩</option>
					<option value='50'>50개씩</option>
				<? } ?>
				<? if ($scale == 20) { ?>
					<option value='5' >5개씩</option>
					<option value='10'>10개씩</option>
					<option value='20' selected>20개씩</option>
					<option value='50'>50개씩</option>
				<? } ?>
				<? if ($scale == 50) { ?>
					<option value='5' >5개씩</option>
					<option value='10'>10개씩</option>
					<option value='20'>20개씩</option>
					<option value='50' selected>50개씩</option>
				<? } ?>
				</select>
			</div>
			<div >
				<ul class="list list_title">
					<li>No</li>
					<li>제목</li>
					<li>작성자</li>
					<li>작성일</li>
					<li>조회수</li>
				</ul>
			</div>
			<div id="list_content">
			<?		
				for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)  {
      		mysql_data_seek($result, $i);  // 가져올 레코드로 위치(포인터) 이동  
      		$row = mysql_fetch_array($result);      // 하나의 레코드 가져오기
					$item_num = $row[num];
					$item_id = $row[id];
					$item_name = $row[name];
					$item_nick = $row[nick];
					$item_hit = $row[hit];
					$item_date = $row[regist_day];
					$item_date = substr($item_date, 0, 10);  
					$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
			?>
				<ul class="list list_item">
					<li><?= $number ?></li>
					<li><a href="view.php?num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>#content"><?= $item_subject ?></a></li>
					<li><?= $item_nick ?></li>
					<li><?= $item_date ?></li>
					<li><?= $item_hit ?></li>
				</ul>
				<? $number--; } ?>
				<div class="page_button">
					<div class="page_num"> <i class="fas fa-angle-left"><span class="hidden">이전</span></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<?   // 게시판 목록 하단에 페이지 링크 번호 출력
							for ($i=1; $i<=$total_page; $i++) {
								if ($page == $i) {  // 현재 페이지 번호 링크 안함
									echo "<span> $i </span>";
								} else { 
									if($mode=="search") {
										echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search#content'> $i </a>"; 
									} else {
										echo "<a href='list.php?page=$i&scale=$scale#content'> $i </a>";
									}
								}      
							}
						?>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<i class="fas fa-angle-right"><span class="hidden">다음</span></i>
					</div>
					<div class="button">
						<a class="list_btn" href="list.php?page=<?=$page?>&scale=<?=$scale?>#content"><i class="fas fa-clipboard-list"></i>목록</a>
						<? if($userid) { ?>
						<a class="write_btn" href="write_form.php?scale=<?=$scale?>#content"><i class="fas fa-pencil-alt"></i>글쓰기</a>
						<? } ?>
					</div>
				</div> 
			</div> 
			<form name="board_form" method="post" action="list.php?mode=search&scale=<?=$scale ?>#content">
					<div class="list_inner">
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>작성자</option>
							</select>
						<input type="text" name="search">
						<button type="submit">검색</button>
					</div>
			</form>
		</div>
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
