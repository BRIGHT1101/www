<?
	session_start();
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
	include "../lib/dbconn.php";
	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);
  $row = mysql_fetch_array($result);
	$item_num  = $row[num];
	$item_id   = $row[id];
	$item_name  = $row[name];
  $item_nick  = $row[nick];
	$item_hit     = $row[hit];
	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];
	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];
  $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html = $row[is_html];
	if ($is_html!=="y")	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	for ($i=0; $i<3; $i++)	{
		if ($image_copied[$i]) {
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			$image_width[$i] = $imageinfo[0];  
			$image_height[$i] = $imageinfo[1]; 
			$image_type[$i]  = $imageinfo[2]; 
      if ($image_width[$i] > 785)	$image_width[$i] = 785;
		}	else	{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}
	$new_hit = $item_hit + 1;
	$sql = "update $table set hit=$new_hit where num=$num";  
	mysql_query($sql, $connect);
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
	<script>
		function del(href) {
			if (confirm("삭제하시겠습니까?")) {
				document.location.href = href;
			}
		}
	</script>
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
		</div>
		<div class="content_area">
			<div class="title"><?= $item_subject ?></div>
			<div class="title_desc">
				<div><?= $item_nick ?>｜<span><?= $item_date ?></span></div>
				<div><span>조회수 </span><?= $item_hit ?></div>
			</div>
			<div class="content_desc">
				<div class="content_imgs">
					<?
						for ($i=0; $i<3; $i++)	{
							if ($image_copied[$i])	{
								$img_name = $image_copied[$i];
								$img_name = "./data/".$img_name;
								$img_width = $image_width[$i];
								echo "<img src='$img_name' width='$img_width'>"."<br>";
							}
						}
					?>
				</div>
				<div class="conten_text">
					<?= $item_content ?>
				</div>
			</div>
			<div class="view_button">
				<a class="list_btn"
					href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&show=<?=$show?>#content"><i
						class="fas fa-clipboard-list"></i>목록</a>&nbsp;
				<?if($userid==$item_id || $userlevel==1 || $userid=="admin")	{	?>
				<a class="modi_btn"
					href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&show=<?=$show?>&scale=<?=$scale?>#content"><i
						class="fas fa-edit"></i>수정</a>&nbsp;
				<a class="del_btn"
					href="javascript:del('delete.php?table=<?=$table?>&show=<?=$show?>&scale=<?=$scale?>&num=<?=$num?>')"><i
						class="fas fa-trash-alt"></i>삭제</a>&nbsp;
				<?	}	?>
				<?	if($userid ) 	{	?>
				<a class="write_btn" href="write_form.php?table=<?=$table?>&show=<?=$show?>&scale=<?=$scale?>#content"><i
						class="fas fa-pencil-alt"></i>글쓰기</a>
				<?	}	?>
			</div>
		</div>
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
