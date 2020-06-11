! function($) {
    $('#footer').load('./footerlr.html');
    // 登录注册  开始
    const $yhm = $('#yhm');
    const $login = $('#login');
    const $register = $('#register');
    const $tuichu = $('#tuichu');
    let $uname = localStorage.getItem('uname');
    if ($uname == null) {
        $login.css('display', 'inline-block');
        $yhm.css('display', 'none');
        $register.css('display', 'inline-block');
        $tuichu.css('display', 'none');
    } else {
        $login.css('display', 'none');
        $yhm.html($uname).css('display', 'inline-block');
        $register.css('display', 'none');
        $tuichu.css('display', 'inline-block');
    }
    $tuichu.on('click', function() {
        localStorage.removeItem('uname');
        $login.css('display', 'inline-block');
        $yhm.css('display', 'none');
        $register.css('display', 'inline-block');
        $tuichu.css('display', 'none');
    })

    // 登录注册  结束


    const $zj = $('#down_option p s');
    const $cart_ul = $('.cart_product');
    if (localStorage.getItem('proid')) {

        // 加载购物车商品信息    开始
        let $proid = localStorage.getItem('proid').split(',');
        let $pronum = localStorage.getItem('pronum').split(',').map(item => +item);
        // console.log($proid);
        // console.log($pronum);
        $.post("http://10.31.162.15/www/yiguoshengxian/php/cart.php", { sid: $proid }, function(data) {
            // console.log(data);
            $.each(data, function(index, val) {
                let $pro_num = $pronum[index];
                console.log(val.id);
                let $moban = $('.cart_product .moban:hidden').clone(true, true);
                $moban.find('.product_img').find('img').attr('src', val.url);
                $moban.find('.product_info').find('.nr').html(val.pname);
                $moban.find('.product_price').html('¥' + val.pcprice);
                $moban.find('.product_num').find('.pronum').val($pro_num);
                $moban.find('.product_heji').find('span').html(($pro_num * parseFloat(val.pcprice)).toFixed(2));
                $moban.find('.product_guige').html(val.guige + '/盒');
                $moban.css('display', 'block');
                $moban.attr('pro_index', val.id);
                // 根据当前商品的数量决定-符号的状态
                // if ($pro_num > 1) {
                //     $moban.find('.product_jian').removeProp('disabled');
                // }
                // 添加克隆元素
                $cart_ul.append($moban);
                $price_sum(($pro_num * parseFloat(val.pcprice)).toFixed(2));
            })
        }, "json");
        // 加载购物车商品信息    结束
        // ------------------------------------
        // ++  --事件       开始
        $cart_ul.on('click', 'button', function() {
            // alert(1);
            // alert($(this).prop('class'));

            // 获取商品id
            let $pro_id = $(this).parents('.moban').attr('pro_index');

            // 获取当前合计及商品数量
            let $ele_hj = $(this).parent('.product_num').siblings('.product_heji').find('span');
            let $temp_hj = parseFloat($ele_hj.html());
            let $temp_num = parseInt($(this).siblings('.pronum').val());

            if ($(this).prop('class') === "product_jia") {
                // alert($temp_hj);
                // alert($temp_num);
                alert($pro_id);
                $(this).siblings('.pronum').val($temp_num + 1);



            } else if ($(this).prop('class') === "product_jian") {
                alert($temp_hj);

            }
            // 改变-符号状态函数
            // function $changJian() {
            //     // console.log(123);
            //     let $zhi = $cart_ul.find('.pronum').val();
            //     let $num_jian = $cart_ul.find('.product_jian');
            //     if ($zhi > 1) {
            //         $num_jian.removeProp('disabled');
            //     } else if ($zhi <= 1) {
            //         // console.log(1)
            //         $num_jian.attr('disabled', 'disabled');
            //     }
            // }
        });

    }
    // 计算总价的方法
    function $price_sum(num) {
        let $temp_zj = parseFloat($zj.html().toString().slice(1));
        // console.log($temp_zj);
        $temp_zj = ($temp_zj + parseFloat(num)).toFixed(2);
        // console.log($temp_zj);
        $zj.html('¥' + $temp_zj);
    }


}(jQuery);