<?php
session_start();

header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。

$yzm = $_SESSION['regsession_code'];
if(isset($_POST['yzm_val'])){
    if($_POST['yzm_val']==$yzm){
        echo 1;
    }else{
        echo 0;
    }
}