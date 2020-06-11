! function($) {
    $('#footer').load('./footerlr.html');
    const $tj = $('.tj input');
    const $login_ts = $('.login_ts');
    const $yan = $('#yan');
    const $yzm_ts = $('#yti');
    let $yzm_flag = false;
    $tj.on('click', function() {
        // console.log($yan.val());
        if ($yan.val() == '') {
            // $yzm_ts.html('');
            $yzm_ts.prop('class', 'err');
        } else if ($yzm_flag) {
            let $uname = $('#username').val();
            let $upwd = hex_sha1($('#userpassword').val());
            // console.log($upwd);
            $.post("https://www.bearchild.cn:8443/php/login.php", {
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
        }
    });
    $yan.on('blur', function() {
        let $yzm_val = $yan.val();
        $.post('https://www.bearchild.cn:8443/php/yan.php', { 'yzm_val': $yzm_val },
            function(data) {
                if (data == 1) {
                    $yzm_flag = true;
                    $yzm_ts.prop('class', 'ok');
                } else {
                    $yzm_ts.prop('class', 'err');
                }

            })
    });

}(jQuery);