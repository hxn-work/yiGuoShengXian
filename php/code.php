<?php
header('charset=utf8');
header('Access-Control-Allow-Origin:*');  //允许跨域的网址，*所有的网址。
header('Access-Control-Allow-Method:POST,GET'); //允许跨域的请求方式。
session_start();
$code=array("width"=>60,"height"=>38,	"len"=>4,			 
	"char"=>3,"imx"=>8,"imy"=>10,"cookie"=>"regsession_code",
	"value"=>""
);

if($code["char"]==1){
$char=array(0,1,2,3,4,5,6,7,8,9);
}elseif($code["char"]==2){
$char=array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
}elseif($code["char"]==3){
	$char=array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
}
for($i=0;$i<$code["len"];$i++){
	$code["value"].=$char[rand(0,count($char)-1)];
}

$_SESSION['regsession_code']=$code["value"];  //验证码的值 

setcookie("real_name", $code["value"], time()+180,'/');


//生成图片
@header("Content-Type:image/png");

$im=imagecreate($code["width"],$code["height"]);
$back=imagecolorallocate($im,0xff,0xff,0xff);	//背景色
$pix=imagecolorallocate($im,225,210,220);	//模糊点颜色
$font=imagecolorallocate($im,23,162,231);	//字体色
for($i=0;$i<1000;$i++){
	imagesetpixel($im,rand(0,$code["width"]),rand(0,$code["height"]),$pix);
}
 
imagestring($im,5,$code["imx"],$code["imy"],$code["value"],$font);
imagerectangle($im,0,0,$code["width"]-1,$code["height"]-1,$font);
imagepng($im);
imagedestroy($im);

// $yzm = $_SESSION['regsession_code'];
// if(isset($_POST['yzm_val'])){
//     if($_POST['yzm_val']==$yzm){
//         echo 1;
//     }else{
//         echo 0;
//     }
// }
