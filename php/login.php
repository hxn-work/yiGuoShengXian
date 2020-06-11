<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';
// 验证用户是否存在
if(isset($_POST['uname'])){
    $uname = $_POST['uname'];
    $upwd = ($_POST['upwd']);
    // echo $uname.$upwd;

    $result = $conn->query("select * from register where uname='$uname' and upassword='$upwd'");
    echo json_encode($result->fetch_assoc());
    // if(json_encode($result->fetch_assoc())){
    //     echo json_encode($result->fetch_assoc());
        // echo $uname;
        
    // }else{
    //     echo 'false';
    // }
}
