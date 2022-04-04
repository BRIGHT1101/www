<?
   function latest_article( $loop, $char_limit) // 리스트 개수, 제목글제한수
  {
		include "dbconn.php";
		$sql = "select * from news order by num desc limit $loop";
		$result = mysql_query($sql, $connect);
		while ($row = mysql_fetch_array($result))	{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');
			$subject = $row[subject];
			if ($len_subject > $char_limit)	{
        $subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}
			$regist_day = substr($row[regist_day], 0, 10);
      if($row[file_copied_0]) {
        $imgsrc='./newsboard/data/'.$row[file_copied_0];
      } else {
        $imgsrc= './newsboard/data/deafult.jpg ';
      }

			echo "
										<li>
                        <div>
                            <a href='./newsboard/view.php?&num=$num&table=news#content'>
                                <img src='$imgsrc' alt='보도자료 이미지'>
                            </a>
                        </div>
                        <div>
                            <a href='./newsboard/view.php?&num=$num&table=news#content'>$subject</a>
														<span>$regist_day</span>
                        </div>
                    </li>
		";


		}
		mysql_close();
  }
?>