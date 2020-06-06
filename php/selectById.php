<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';
//获取列表页数据数据

if(isset($_GET['tsid'])){
    $sid = $_GET['tsid'];

    $result = $conn->query("select * from product_list where id = $sid");
    echo json_encode($result->fetch_assoc());
}
