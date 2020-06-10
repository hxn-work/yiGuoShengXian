<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';
// {$sid[$j]}

if(isset($_POST['sid'])){
    $sid=$_POST['sid'];
    $arr = array();
    for ($j =0;$j<sizeof($sid);$j++){
        $result = $conn->query("SELECT * from product_list where id = '$sid[$j]}'");
        $arr[$j]=$result->fetch_assoc();
    }
    echo json_encode($arr);
}