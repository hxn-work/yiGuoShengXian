! function($) {
    $('#footer').load('./footerlr.html');
    const $tj = $('.tj input');
    const $login_ts = $('.login_ts');
    $tj.on('click', function() {
        // console.log(123);
        let $uname = $('#username').val();
        let $upwd = hex_sha1($('#userpassword').val());
        // console.log($upwd);
        $.post("http://10.31.162.15/www/yiguoshengxian/php/login.php", {
            uname: $uname,
            upwd: $upwd
        }, function(data) {
            // console.log(data);
            if (data != 'null') {
                let $data = JSON.parse(data);
                localStorage.setItem('uname', $data.uname);
                location.href = "./index.html";
                // console.log($data)
            } else {
                // alert("用户名或密码错误！")
                $login_ts.html('用户名或密码错误').css('display', 'block');
            }
        });
    }, );

}(jQuery);