<?php  
	include 'connect.php';

	$username = $_GET["username"];
	$password = $_GET["password"];
	$sql = "select * from user where username='$username' and password='$password'";
	session_start();
		$_SESSION["username"] = $result[0]->email;	
	echo json_encode($rows,JSON_UNESCAPED_UNICODE);
?>