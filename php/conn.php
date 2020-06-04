<?php
header('content-type:text/html;charset=utf8');

define('LOCALHOST','47.97.24.36');
define('NAME','root');
define('PASSWORD', 'hxn123456');
define('DBNAME','ygsx');

$conn = @new mysqli(LOCALHOST,NAME,PASSWORD,DBNAME);
if($conn->connect_error){
    die('数据库连接失败'.$conn->connect_error);
}
$conn->query('SET NAMES UTF8');
// $conn->query("INSERT registry values(null,'user','123123','123123',NOW())");

