<?php
    include "DBHelper.php";

	$username = $_POST["username"];
	$password = $_POST["password"];

    $sql = "select * from user where username = '$username' and password = '$password';";
    $array = query($sql);
    if(count($array) > 0){
        echo '{"state": true}';
        session_start();
        $_SESSION["username"] = $username;//session_id
    } else{
        echo '{"state": false, "message": "login fail!"}';       
    }
?>