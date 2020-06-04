<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';

//获取列表页数据数据
$res = $conn->query('SELECT * from product_list');
$resarr = array();
for($i=0;$i<$res->num_rows;$i++){
    $resarr[$i]=$res->fetch_assoc();
}

echo json_encode($resarr);