<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';
// {$sid[$j]}
// 验证用户名是否存在
if(isset($_GET['uname'])){
    $uname = $_GET['uname'];
    $result = $conn->query("select * from register where uname = '$uname'");
    if($result->fetch_assoc()){
        echo false;
        // echo json_encode($result->fetch_assoc());

    }else{
        echo true;
    }
}

// 注册
if(isset($_POST['submit'])){
    $uname = $_POST['uname'];
    $upwd = sha1($_POST['upwd']);
    $uphone =($_POST['uphone']);
    $email = $_POST['email'];
    $conn->query("INSERT into register values(null,'$uname','$upwd','$uphone','$email',NOW())");
    header('location:http://10.31.162.15/www/yiguoshengxian/dist/login.html');
}