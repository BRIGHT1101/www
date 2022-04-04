<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
	$table = "news";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>미디어센터 - 보도자료</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
		integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub5/common/css/sub5common.css">
	<link rel="stylesheet" href="./css/news.css">
	<script src="../common/js/prefixfree.min.js"></script>
	<?
	include "../lib/dbconn.php";
  if (!$scale) $scale=6;
  if ($mode=="search") {
		if(!$search){
			echo("
				<script>
					window.alert('검색할 단어를 입력해 주세요.');
					history.go(-1);
				</script>
			");
			exit;
		}
		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}	else	{
		$sql = "select * from $table order by num desc";
	}
	$result = mysql_query($sql, $connect);
	$total_record = mysql_num_rows($result);
	if ($total_record % $scale == 0) $total_page = floor($total_record/$scale);      
	else $total_page = floor($total_record/$scale) + 1; 
	if (!$page) $page = 1;   
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
</head>
<body>
	<? include "../common/sub_header.html" ?>
	<div class="visual">
		<img src="../sub5/common/images/visual.jpg" alt="visual">
		<div>
			<div>
				<h3>미디어센터</h3>
				<span>Media Center</span>
			</div>
		</div>
	</div>
	<div class="sub_menu">
		<ul>
			<li class="current"><a href="list.php">보도자료</a></li>
			<li><a href="../sub5/sub5_2.html">영상</a></li>
			<li><a href="../sub5/sub5_3.html">SNS</a></li>
		</ul>
	</div>
	<article id="content">
		<div class="title_area">
			<div class="line_map">
				<i class="fas fa-home"><span class="hidden">HOME</span></i>&gt; 미디어센터 &gt; <strong>보도자료</strong>
			</div>
			<h2>보도자료</h2>
			<p>한샘의 다양한 소식들을 확인해 보세요</p>
		</div>
		<div class="content_area">
			<div class="list_header">
				<div>TOTAL<span> <?= $total_record ?></span></div>
				<select name="scale" onchange="location.href='list.php?show=<?=$show?>&scale='+this.value+'#content'">
					<? if ($scale == 6) { ?>
					<option value='3'>3개씩</option>
					<option value='6' selected>6개씩</option>
					<option value='12'>12개씩</option>
					<option value='24'>24개씩</option>
					<? } ?>
					<? if ($scale == 3) { ?>
					<option value='3' selected>3개씩</option>
					<option value='6'>6개씩</option>
					<option value='12'>12개씩</option>
					<option value='24'>24개씩</option>
					<? } ?>
					<? if ($scale == 12) { ?>
					<option value='3'>3개씩</option>
					<option value='6'>6개씩</option>
					<option value='12' selected>12개씩</option>
					<option value='24'>24개씩</option>
					<? } ?>
					<? if ($scale == 24) { ?>
					<option value='3'>3개씩</option>
					<option value='6'>6개씩</option>
					<option value='12'>12개씩</option>
					<option value='24' selected>24개씩</option>
					<? } ?>
				</select>
				<ul class="list_or_thumb">
					<li class="showlist"><a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>#content"><i class="fas fa-list"></i><span class="hidden"> 리스트</span></a></li>
					<li class="thumb"><a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&show=thumbnail#content"><i class="fas fa-th-large"></i><span class="hidden">테이블</span></a></li>
				</ul>
			</div>
			<div id="list_content">
				<? for ($i=$start; $i<$start+$scale && $i < $total_record; $i++) {
				mysql_data_seek($result, $i);       
				$row = mysql_fetch_array($result);     
				$item_num = $row[num];
				$item_id  = $row[id];
				$item_name = $row[name];
				$item_nick = $row[nick];
				$item_date = $row[regist_day];
				$item_date = substr($item_date, 0, 10);  
				$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
				$item_content = $row[content];
				if($row[file_copied_0]) { 
					$item_img = './data/'.$row[file_copied_0];  
				} else {
					$item_img = './data/default.jpg'  ;
				}
				?>
				<div class="list list_item <?=$show?>">
					<a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>&show=<?=$show?>#content">
						<div class="newsimgpreview">
							<img src="<?=$item_img?>" alt="보도자료 이미지">
						</div>
						<div class="newspreview">
							<div>No <span><?= $number ?></span></div>
							<h3><span>
						<? 
						if (mb_strlen($item_subject,"utf-8") > 59) {
							$sliced = mb_substr($item_subject, 0, 59, "utf-8" ).'...';
							echo ( $sliced);
						} else {
							echo($item_subject);
						}
						?>
						</span></h3>
							<div><?= $item_nick ?> ｜<span><?= $item_date ?></span></div>
							<p>
								<? 
								if (mb_strlen($item_content,"utf-8") > 310) {
									$slicedc = mb_substr($item_content, 0, 310, "utf-8" ).'...';
									echo ( $slicedc);
								} else {
									echo($item_content);
								}
								?>
							</p>
						</div>
					</a>
				</div>
				<? $number--; } ?>
				<div class="page_button">
					<div class="page_num"> <i class="fas fa-angle-left"><span class="hidden">이전</span></i>&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;
						<?
						for ($i=1; $i<=$total_page; $i++)
						{
							if ($page == $i) {
								echo "<span> $i </span>";
							} else	{ 
								if($mode=="search"){
									echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search&show=$show#content'> $i </a>"; 
								} else {    
									echo "<a href='list.php?page=$i&scale=$scale&show=$show#content'> $i </a>";
								}
							} 
						}
						?>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="fas fa-angle-right"><span class="hidden">다음</span></i>
					</div>
					<div class="button">
						<a class="list_btn"
							href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&show=<?=$show?>#content"><i
								class="fas fa-clipboard-list"></i>목록</a>
						<? if($userid) { ?>
						<a class="write_btn" href="write_form.php?table=<?=$table?>&show=<?=$show?>&scale=<?=$scale?>#content"><i
								class="fas fa-pencil-alt"></i>글쓰기</a>
						<? } ?>
					</div>
				</div>
			</div> 
			<form name="board_form" method="post"
				action="list.php?table=<?=$table?>&mode=search&show=<?=$show?>&scale=<?=$scale?>#content">
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