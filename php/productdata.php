<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
require './conn.php';

//创建对象接收数据
class Result{

}
$result = new Result();
//获取第一块的内容
$res = $conn->query('SELECT * from sy_list1');
$resarr = array();
for($i=0;$i<$res->num_rows;$i++){
    $resarr[$i]=$res->fetch_assoc();
}
//获取第二块的内容
$res2 = $conn->query('SELECT * from sy_list2');
$resarr2 = array();
for($i=0;$i<$res2->num_rows;$i++){
    $resarr2[$i]=$res2->fetch_assoc();
}
//获取第三块的内容
$res3 = $conn->query('SELECT * from sy_list3');
$resarr3 = array();
for($i=0;$i<$res3->num_rows;$i++){
    $resarr3[$i]=$res3->fetch_assoc();
}
//获取第四块的内容
$res4 = $conn->query('SELECT * from sy_list4');
$resarr4 = array();
for($i=0;$i<$res4->num_rows;$i++){
    $resarr4[$i]=$res4->fetch_assoc();
}
//获取第五块的内容
$res5 = $conn->query('SELECT * from sy_list5');
$resarr5 = array();
for($i=0;$i<$res5->num_rows;$i++){
    $resarr5[$i]=$res5->fetch_assoc();
}
//获取第六块的内容
$res6 = $conn->query('SELECT * from sy_list6');
$resarr6 = array();
for($i=0;$i<$res6->num_rows;$i++){
    $resarr6[$i]=$res6->fetch_assoc();
}
//获取第七块的内容
$res7 = $conn->query('SELECT * from sy_list7');
$resarr7 = array();
for($i=0;$i<$res7->num_rows;$i++){
    $resarr7[$i]=$res7->fetch_assoc();
}
//获取第八块的内容
$res8 = $conn->query('SELECT * from sy_list8');
$resarr8 = array();
for($i=0;$i<$res8->num_rows;$i++){
    $resarr8[$i]=$res8->fetch_assoc();
}
$result->data1=$resarr;
$result->data2=$resarr2;
$result->data3=$resarr3;
$result->data4=$resarr4;
$result->data5=$resarr5;
$result->data6=$resarr6;
$result->data7=$resarr7;
$result->data8=$resarr8;

echo json_encode($result);
