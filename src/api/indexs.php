<?php
	include 'connect.php';

		//首页显示数量
	 $page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
	//设置字符集
	$conn->set_charset('utf8');
	// SQL语句
	$sql = "select * from ztuan limit ".($page-1)*$qty .",".$qty;

	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	// // 格式化数据
    // $result = array(
    // 	'pageNo'=>$page,
    // 	'qty'=>$qty,
    // 	'total'=>$conn->query('select count(*) from ztuan')->fetch_row()[0],
    // 	'data'=>$rows,
    // );

	echo json_encode($rows,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();
?>