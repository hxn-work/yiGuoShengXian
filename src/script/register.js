! function($) {
    $('#footer').load('./footerlr.html');
    const $form = $('.left form');
    const $tyyzm = $('#txyzm');
    const $txyzm_ts = $('#txyzm_ts');
    const $uname = $('#uname');
    const $uname_ts = $('#uname_ts');
    const $uphone = $('#uphone');
    const $uphone_ts = $('#uphone_ts');
    const $upwd = $('#upwd');
    const $upwd_ts = $('#upwd_ts');
    const $urepwd = $('#urepwd');
    const $urepwd_ts = $('#urepwd_ts');
    const $email = $('#email');
    const $email_ts = $('#email_ts');
    const $yty = $('#yty');
    const $yty_ts = $('#yty_ts');
    const $tijiao = $('#tj');
    let $tx_flag = true;
    let $name_flag = true;
    let $pass_flag = true;
    let $repass_flag = true;
    let $phone_flag = true;
    let $email_flag = true;

    // 已同意按钮事件
    $yty.on('click', function() {
        // console.log($yty.prop('checked'));
        if ($yty.prop('checked') === true) {
            $tijiao.css('background-color', '#008842');
            $yty_ts.html('');
        } else {
            $tijiao.css('background-color', 'grey');
            $yty_ts.html('<i></i>请接受服务协议！');
            $yty_ts.prop('class', 'err');
        }
    });
    // 验证用户名
    $uname.on('blur', function() {
        if ($uname.val() === '') {
            $name_flag = false;
            $uname_ts.html('<i></i>用户名不能为空！');
            $uname_ts.prop('class', 'err');
        } else {
            let $unameval = $uname.val().replace(/[\u4e00-\u9fA5]/g, 'ab').length;
            if ($unameval > 14) {
                $name_flag = false;
                $uname_ts.html('<i></i>用户名长度不符合规定！');
                $uname_ts.prop('class', 'warning');
            } else {
                $.get('https://www.bearchild.cn:8443/php/register.php', { 'uname': $uname.val() }, function(data) {
                    // console.log(data == false);
                    if (data == false) {
                        $name_flag = false;
                        $uname_ts.html('<i></i>用户名已存在！');
                        $uname_ts.prop('class', 'err');
                    } else {
                        $name_flag = true;
                        $uname_ts.html('<i></i>');
                        $uname_ts.prop('class', 'ok');
                    }
                })

            }
        }
    });
    // 验证手机号
    $uphone.on('blur', function() {
        if ($uphone.val() === '') {
            $phone_flag = false;
            $uphone_ts.html('<i></i>手机号不能为空！');
            $uphone_ts.prop('class', 'err');
        } else {
            let $uphoneval = /^1[345678]\d{9}$/.test($uphone.val());
            if (!$uphoneval) {
                $phone_flag = false;
                $uphone_ts.html('<i></i>请输入正确的手机号！');
                $uphone_ts.prop('class', 'warning');
            } else {
                $phone_flag = true;
                $uphone_ts.html('<i></i>');
                $uphone_ts.prop('class', 'ok');
            }
        }
    });
    // 验证密码
    let $pwd_z1 = /\d+/;
    let $pwd_z2 = /[A-Z]+/;
    let $pwd_z3 = /[\W\_]+/;
    let $pwd_z4 = /[a-z]+/;
    $upwd.on('input', function() {
        let $upwd_val = $upwd.val();
        if ($upwd_val.length >= 8 && $upwd_val.length <= 14) {
            let $pwd_count = 0;
            if ($pwd_z1.test($upwd_val)) {
                $pwd_count++;
            }
            if ($pwd_z2.test($upwd_val)) {
                $pwd_count++;
            }
            if ($pwd_z3.test($upwd_val)) {
                $pwd_count++;
            }
            if ($pwd_z4.test($upwd_val)) {
                $pwd_count++;
            }
            switch ($pwd_count) {
                case 1:
                    $upwd_ts.html('<i></i>弱');
                    $upwd_ts.prop('class', 'err');
                    $pass_flag = false;
                    break;
                case 2:
                case 3:
                    $upwd_ts.html('<i></i>中').css('color', 'gold');
                    $upwd_ts.prop('class', 'warning');
                    $pass_flag = true;
                    break;
                case 4:
                    $upwd_ts.html('<i></i>强').css('color', '#007f4d');
                    $upwd_ts.prop('class', 'ok');
                    $pass_flag = true;
                    break;
            }
        } else {
            $upwd_ts.html('<i></i>密码长度有误');
            $upwd_ts.prop('class', 'warning');
            $pass_flag = false;
        }

    });
    $upwd.on('blur', function() {
        let $upwd_val = $upwd.val();
        if ($upwd_val === '') {
            $upwd_ts.html('<i></i>密码不能为空');
            $upwd_ts.prop('class', 'err');
            $pass_flag = false;
        }
    });
    // 确认密码验证
    $urepwd.on('blur', function() {
        let $urepwd_val = $urepwd.val();
        let $upwd_val = $upwd.val();
        if ($urepwd_val === '') {
            // $urepwd_ts.html('<i></i>密码不能为空');
            // $urepwd_ts.prop('class', 'err');
            $repass_flag = false;
        } else if ($urepwd_val !== $upwd_val) {
            $urepwd_ts.html('<i></i>两次密码不一致');
            $urepwd_ts.prop('class', 'warning');
            $repass_flag = false;
        } else {
            $urepwd_ts.html('<i></i>');
            $urepwd_ts.prop('class', 'ok');
            $repass_flag = true;
        }
    });
    // 邮箱验证
    $email.on('blur', function() {
        let $email_val = $email.val();
        let $email_reg = /^(\w+[\+\_\.]*\w+)\@(\w+[\_\.]*\w+)\.(\w+[\_\.]*\w+)$/;
        if ($email_reg.test($email_val)) {
            $email_ts.html('<i></i>');
            $email_ts.prop('class', 'ok');
            $email_flag = true;
        } else {
            $email_ts.html('<i></i>邮箱格式不支持');
            $email_ts.prop('class', 'err');
            $email_flag = false;
        }
    });
    // 验证-验证码
    $('#txyzm').on('blur', function() {
        let $yzm_val = $('#txyzm').val();
        $.post('https://www.bearchild.cn:8443/php/yan.php', { 'yzm_val': $yzm_val },
            function(data) {
                if (data == 1) {
                    $tx_flag = true;
                    $('#txyzm_ts').html('<i></i>').css('margin-left', '10px');
                    $('#txyzm_ts').prop('class', 'ok');
                } else {
                    $tx_flag = false;
                    $('#txyzm_ts').html('<i></i>验证码错误').css('margin-left', '10px');
                    $('#txyzm_ts').prop('class', 'err');
                }

            })
    });


    // 判断条件是否符合提交
    $form.on('submit', function() {

        if ($('#txyzm').val() === '') {
            $tx_flag = false;
            $('#txyzm_ts').html('<i></i>验证码错误').css('margin-left', '10px');
            $('#txyzm_ts').prop('class', 'err');
        }
        if ($uname.val() === '') {
            $name_flag = false;
            $uname_ts.html('<i></i>用户名不能为空');
            $uname_ts.prop('class', 'err');
        }
        if ($uphone.val() === '') {
            $phone_flag = false;
            $uphone_ts.html('<i></i>手机号不能为空');
            $uphone_ts.prop('class', 'err');
        }
        if ($upwd.val() === '') {
            $pass_flag = false;
            $upwd_ts.html('<i></i>密码不能为空');
            $upwd_ts.prop('class', 'err');
        }
        if ($urepwd.val() === '') {
            $repass_flag = false;
            $urepwd_ts.html('<i></i>密码不能为空');
            $urepwd_ts.prop('class', 'err');
        }
        if ($email.val() === '') {
            $email_flag = false;
            $email_ts.html('<i></i>邮箱不能为空');
            $email_ts.prop('class', 'err');
        }
        // console.log($yty.prop('checked'));
        if ($yty.prop('checked') === false) {
            $yty_ts.html('<i></i>请接受服务协议');
            $yty_ts.prop('class', 'err');
        }
        if ($name_flag && $phone_flag && $pass_flag && $repass_flag && $email_flag && $tx_flag) {
            // return true;
            return $yty.prop('checked');
        }
        return false;
    });


}(jQuery);