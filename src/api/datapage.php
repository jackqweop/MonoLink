<?php  
	include 'connect.php';

	$id = isset($_GET['id'])?$_GET['id']:1;
	$conn->set_charset('utf8');
	$sql = "select * from ztuan where id='$id'";
	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($rows,JSON_UNESCAPED_UNICODE);

?>