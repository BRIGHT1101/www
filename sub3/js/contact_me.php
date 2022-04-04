<?php
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   empty($_POST['education'])	||
   empty($_POST['edudate'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$education = strip_tags(htmlspecialchars($_POST['education']));
$edudate = strip_tags(htmlspecialchars($_POST['edudate']));
$to = 'bright1101@naver.com'; 
$email_subject = "한샘교육신청자 :  $name";
$email_body = "교육 신청이 도착했습니다.\n\n"."세부사항:\n\n이름: $name\n\n신청교육: $education\n\n희망일: $edudate\n\nEmail: $email_address\n\n연락처: $phone\n\n문의사항:\n$message";
$headers = "From: admin@hanssem.com\n"; 
$headers .= "신청자 이메일 주소 : $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
