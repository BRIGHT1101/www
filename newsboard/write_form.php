<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
	include "../lib/dbconn.php";
	if ($mode=="modify") 	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);
		$row = mysql_fetch_array($result);       
		$item_subject = $row[subject];
		$item_content = $row[content];
		$html_check = $row[is_html];
		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];
		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
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
		function check_input() {
			if (!document.board_form.subject.value) {
				alert("제목을 입력하세요!");
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value) {
				alert("내용을 입력하세요!");
				document.board_form.content.focus();
				return;
			}
			document.board_form.submit();
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
		<div class="content_area write">
			<h2>보도자료 글쓰기</h2>
			<?if($mode=="modify") { ?>
			<form name="board_form" method="post"
				action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&show=<?=$show?>&scale=<?=$scale?>&table=<?=$table?>#content"
				enctype="multipart/form-data">
				<?	}	else	{ ?>
				<form name="board_form" method="post"
					action="insert.php?table=<?=$table?>&show=<?=$show?>&scale=<?=$scale?>#content" enctype="multipart/form-data">
					<?	} ?>
					<input class="write_title " type="text" name="subject" placeholder="제목을 입력해 주세요." value="<?=$item_subject?>">
					<div class="content_outer">
						<textarea name="content" placeholder="내용을 입력하세요."><?=$item_content?></textarea>
					</div>
					<div class="upload_outer">
						<div class="upload">
							<div class="upload_inner">
								<? 	if ($mode=="modify" && $item_file_0)	{ ?>
								<input class="upload-name file1val" value="<?=$item_file_0?>" placeholder="첨부파일">
								<input type="checkbox" id="check1" name="del_file[]" value="0">
								<label for="check1">삭제</label>
								<?	} else { ?>
								<input class="upload-name  file1val" value="이미지 첨부 1" placeholder="첨부파일">
								<?	}	?>
							</div>
							<label for="file1"><i class="fas fa-file-upload"></i> 파일찾기</label>
							<input class="uploadfile" id="file1" type="file" name="upfile[]">
						</div>
						<div class="upload">
							<div class="upload_inner">
								<? 	if ($mode=="modify" && $item_file_1)	{ ?>
								<input class="upload-name file2val" value="<?=$item_file_1?>" placeholder="첨부파일">
								<input type="checkbox" id="check2" name="del_file[]" value="1">
								<label for="check2">삭제</label>
								<?	} else { ?>
								<input class="upload-name  file2val" value="이미지 첨부 2" placeholder="첨부파일">
								<?	}	?>
							</div>
							<label for="file2"><i class="fas fa-file-upload"></i> 파일찾기</label>
							<input class="uploadfile" id="file2" type="file" name="upfile[]">
						</div>
						<div class="upload">
							<div class="upload_inner">
								<? 	if ($mode=="modify" && $item_file_2)	{ ?>
								<input class="upload-name file3val" value="<?=$item_file_2?>" placeholder="첨부파일">
								<input type="checkbox" id="check3" name="del_file[]" value="2">
								<label for="check3">삭제</label>
								<?	} else { ?>
								<input class="upload-name file3val" value="이미지 첨부 3" placeholder="첨부파일">
								<?	}	?>
							</div>
							<label for="file3"><i class="fas fa-file-upload"></i> 파일찾기</label>
							<input class="uploadfile" id="file3" type="file" name="upfile[]">
						</div>
					</div>
					<div class="bottom_button">
						<button type="button" onclick="check_input()"><i class="fas fa-pencil-alt"></i>등록</button>
						<a class="list_btn" href="list.php?page=<?=$page?>&show=<?=$show?>&scale=<?=$scale?>#content"><i
								class="fas fa-clipboard-list"></i>목록</a>
						<div class="checkbox_outer">
							<? if ($html_check=='y') { ?>
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
	<script>
		$(function () {
			$("#file1").on('change', function () {
				if (window.FileReader) {
					var filename1 = $(this)[0].files[0].name;
				} else {
					var filename1 = $(this).val().split('/').pop().split('\\').pop();
				}
				$(".file1val").val(filename1);
			});
			$("#file2").on('change', function () {
				if (window.FileReader) {
					var filename2 = $(this)[0].files[0].name;
				} else {
					var filename2 = $(this).val().split('/').pop().split('\\').pop();
				}
				$(".file2val").val(filename2);
			});
			$("#file3").on('change', function () {
				if (window.FileReader) {
					var filename3 = $(this)[0].files[0].name;
				} else {
					var filename3 = $(this).val().split('/').pop().split('\\').pop();
				}
				$(".file3val").val(filename3);
			});
		});
	</script>
</body>

</html>