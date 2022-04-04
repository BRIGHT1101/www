<? session_start(); ?>
<meta charset="utf-8">
<?
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);

	if(!$userid) {
		echo("
		<script>
			window.alert('로그인 후 이용해 주세요.')
			history.go(-1)
		</script>
		");
		exit;
	}

	if(!$subject) {
		echo("
			<script>
				window.alert('제목을 입력하세요.')
				history.go(-1)
			</script>
		");
		exit;
	}

	if(!$content) {
		echo("
			<script>
				window.alert('내용을 입력하세요.')
				history.go(-1)
			</script>
		");
		exit;
	}

	$regist_day = date("Y-m-d (H:i)");  
	include "../lib/dbconn.php"; 

	if ($mode=="modify") { // modify mode
    $subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
		if ($html_ok=="y") {
			$is_html = "y";
		} else {
			$is_html = "";
		}
		$sql = "update greet set subject='$subject', content='$content', is_html='$is_html' where num=$num";
	} else  {// write new article
		if ($html_ok=="y") {
			$is_html = "y";
		}	else	{
			$is_html = "";
		}
		$subject = htmlspecialchars($subject);
		$content = htmlspecialchars($content);
		$subject = str_replace("'", "&#039;", $subject);
		$content = str_replace("'", "&#039;", $content);
		$sql = "insert into greet (id, name, nick, subject, content, regist_day, hit, is_html) ";
		$sql .= "values('$userid', '$username', '$usernick', '$subject', '$content', '$regist_day', 0, '$is_html')";
	}

	mysql_query($sql, $connect); 
	mysql_close(); 
	echo "
		<script>
			location.href = 'list.php?page=$page&scale=$scale#content';
		</script>
	";
?>

  
