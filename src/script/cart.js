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
    const $up_qx = $('#up_qx');
    const $down_qx = $('.down_quanxuan');

    // 获取总价格
    let $down_zj = 0;

    if ($.cookie('proid')) {

        // 加载购物车商品信息    开始
        let $proid = $.cookie('proid').split(',');
        let $pronum = $.cookie('pronum').split(',').map(item => +item);
        // console.log($proid);
        // console.log($pronum);
        $.post("https://www.bearchild.cn:8443/php/cart.php", { sid: $proid }, function(data) {
            // console.log(data);
            $.each(data, function(index, val) {
                let $pro_num = $pronum[index];
                // console.log(val.id);
                let $moban = $('.cart_product .moban:hidden').clone(true, true);
                $moban.find('.product_img').find('img').attr('src', val.url);
                $moban.find('.product_info').find('.nr').html(val.pname);
                $moban.find('.product_price').find('span').html(val.pcprice);
                $moban.find('.product_num').find('.pronum').val($pro_num);
                $moban.find('.product_heji').find('span').html((($pro_num * (parseFloat(val.pcprice) * 100)) / 100).toFixed(2));
                $moban.find('.product_guige').html(val.guige + '/盒');
                $moban.css('display', 'block');
                $moban.attr('pro_index', val.id);
                // 根据当前商品的数量决定-符号的状态
                // if ($pro_num > 1) {
                //     $moban.find('.product_jian').removeProp('disabled');
                // }
                // 添加克隆元素
                $cart_ul.append($moban);
                // 计算总价
                $price_sum(parseFloat(($pro_num * (parseFloat(val.pcprice) * 100)) / 100));
            })
        }, "json");
        // 加载购物车商品信息    结束
        // ------------------------------------
        // ++  --事件       开始
        $cart_ul.on('click', 'button', function() {
            // alert(1);
            // alert($(this).prop('class'));
            // 获取当前所在列的多选框状态
            // console.log($(this).parents('.moban').find('.xuanze').prop('checked'));
            let $dxk_flag = $(this).parents('.moban').find('.xuanze').prop('checked');
            // 获取商品id
            let $pro_id = $(this).parents('.moban').attr('pro_index');

            // 获取当前合计及商品数量
            let $ele_hj = $(this).parent('.product_num').siblings('.product_heji').find('span');
            let $temp_hj = parseFloat($ele_hj.html());
            let $pro_danjia_val = $(this).parent('.product_num').siblings('.product_price').find('span').html();
            let $pro_danjia = parseFloat($pro_danjia_val);
            // console.log($pro_danjia);
            let $temp_num = parseInt($(this).siblings('.pronum').val());

            // 点击+事件
            if ($(this).prop('class') === "product_jia") {
                $(this).siblings('.pronum').val($temp_num + 1);
                // 改变后的合计
                let $cha_hj = (parseFloat(($temp_hj * 100 + $pro_danjia * 100) / 100)).toFixed(2);
                $(this).parent('.product_num').siblings('.product_heji').find('span').html($cha_hj);
                // 改变总价格
                if ($dxk_flag) {
                    let $temp_xhj = parseFloat($ele_hj.html());
                    $price_sum(parseFloat(($temp_xhj * 100 - $temp_hj * 100) / 100));
                }
                // 修改cookie
                let $ind = $.inArray($pro_id, $proid);
                $pronum[$ind] = $pronum[$ind] + 1;
                $.cookie('proid', $proid, { expires: 7, path: '/' });
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });

            }
            // 点击——事件
            else if ($(this).prop('class') === "product_jian") {
                if ($temp_num > 1) {
                    $(this).siblings('.pronum').val($temp_num - 1);
                    let $cha_hj = (parseFloat(($temp_hj * 100 - $pro_danjia * 100) / 100)).toFixed(2);
                    $(this).parent('.product_num').siblings('.product_heji').find('span').html($cha_hj);
                    // 改变总价格
                    if ($dxk_flag) {
                        let $temp_xhj = parseFloat($ele_hj.html());
                        $price_sum(parseFloat(($temp_xhj * 100 - $temp_hj * 100) / 100));
                    }
                    // 改变cookie的数量
                    let $ind = $.inArray($pro_id, $proid);
                    $pronum[$ind] = $pronum[$ind] - 1;
                    $.cookie('proid', $proid, { expires: 7, path: '/' });
                    $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                }
                if ($temp_num === 1) {
                    if (window.confirm('你确定要删除该商品吗？')) {
                        $(this).siblings('.pronum').val($temp_num - 1);
                        let $cha_hj = (parseFloat(($temp_hj * 100 - $pro_danjia * 100) / 100)).toFixed(2);
                        $(this).parent('.product_num').siblings('.product_heji').find('span').html($cha_hj);
                        // 改变总价格
                        if ($dxk_flag) {
                            let $temp_xhj = parseFloat($ele_hj.html());
                            $price_sum(parseFloat(($temp_xhj * 100 - $temp_hj * 100) / 100));
                        }
                        // 改变cookie的数量
                        let $ind = $.inArray($pro_id, $proid);
                        $pronum.splice($ind, 1);
                        $proid.splice($ind, 1);
                        $.cookie('proid', $proid, { expires: 7, path: '/' });
                        $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                        // 移除元素
                        $(this).parent('.product_num').parent('.moban').remove();
                    }
                }

            }
        });
        // ++  --事件       结束
        // ------------------------------------
        // input框输入事件     开始
        $cart_ul.on('change', '.pronum', function() {
            // 获取当前所在列的多选框状态
            let $dxk_flag = $(this).parents('.moban').find('.xuanze').prop('checked');
            // 获取商品id
            let $pro_id = $(this).parents('.moban').attr('pro_index');
            // 获取当前合计元素
            let $ele_hj = $(this).parent('.product_num').siblings('.product_heji').find('span');
            let $temp_hj = parseFloat($ele_hj.html());
            // 商品单价
            let $pro_danjia_val = $(this).parent('.product_num').siblings('.product_price').find('span').html();
            let $pro_danjia = parseFloat($pro_danjia_val);
            // 商品数量
            let $temp_num = parseInt($(this).val());
            // console.log($temp_num);
            // 验证输入的是否是数字
            let $reg_num = /\d+/;
            if ($reg_num.test($temp_num)) {
                // 输入的是数字
                // 大于等于1的情况
                if ($temp_num >= 1) {
                    // 改变总价格
                    if ($dxk_flag) {
                        $price_sum(parseFloat(($pro_danjia * $temp_num * 100 - $temp_hj * 100) / 100));
                    }
                    // 改变合计值
                    $ele_hj.html((($pro_danjia * $temp_num * 100) / 100).toFixed(2));
                    // 改变cookie的数量
                    let $ind = $.inArray($pro_id, $proid);
                    $pronum[$ind] = $(this).val();
                    $.cookie('proid', $proid, { expires: 7, path: '/' });
                    $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                }
                // 小于1的情况
                else {
                    if (window.confirm('你确定要删除该商品吗？')) {
                        // 改变总价格
                        if ($dxk_flag) {
                            $price_sum(-$temp_hj);
                        }
                        // 改变cookie的数量
                        let $ind = $.inArray($pro_id, $proid);
                        $pronum.splice($ind, 1);
                        $proid.splice($ind, 1);
                        $.cookie('proid', $proid, { expires: 7, path: '/' });
                        $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                        // 移除元素
                        $(this).parent('.product_num').parent('.moban').remove();
                    }
                }
            } else {
                alert('你输入的是非法数字');
                $(this).val(1);
                // 改变总价格
                if ($dxk_flag) {
                    $price_sum(parseFloat(($pro_danjia * 100 - $temp_hj * 100) / 100));
                }
                // 改变合计值
                $ele_hj.html($pro_danjia.toFixed(2));
                // 改变cookie的数量
                let $ind = $.inArray($pro_id, $proid);
                $pronum[$ind] = 1;
                $.cookie('proid', $proid, { expires: 7, path: '/' });
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });
            }
        });
        // input框输入事件     结束
        // ------------------------------------
        // 删除事件    开始
        $cart_ul.on('click', '.del', function() {
            // 获取当前所在列的多选框状态
            let $dxk_flag = $(this).parents('.moban').find('.xuanze').prop('checked');
            // 获取商品id
            let $pro_id = $(this).parents('.moban').attr('pro_index');
            // 获取当前合计元素
            let $ele_hj = $(this).parents('.product_option').siblings('.product_heji').find('span');
            let $temp_hj = parseFloat($ele_hj.html());
            if (window.confirm('你确定要删除该商品吗？')) {
                // 改变总价格
                if ($dxk_flag) {
                    $price_sum(-$temp_hj);
                }
                // 改变cookie的数量
                let $ind = $.inArray($pro_id, $proid);
                $pronum.splice($ind, 1);
                $proid.splice($ind, 1);
                $.cookie('proid', $proid, { expires: 7, path: '/' });
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                // 移除元素
                $(this).parents('.moban').remove();
            }

        });
        // 删除事件    结束
        // ------------------------------------
        // 多选框点击事件     开始
        $cart_ul.on('click', '.xuanze', function() {
            let $xz_flag = true;
            let $li_list = $cart_ul.find('.xuanze:visible');
            // 获取当前所在列的多选框状态
            let $dxk_flag = $(this).prop('checked');
            // 商品单价
            let $pro_danjia_val = $(this).parent('.product_check').siblings('.product_price').find('span').html();
            let $pro_danjia = parseFloat($pro_danjia_val);
            // 商品数量
            let $temp_num = parseInt($(this).parent('.product_check').siblings('.product_num').find('.pronum').val());
            if ($dxk_flag) {
                // 改变总价格
                $price_sum((($temp_num * $pro_danjia * 100) / 100).toFixed(2));
            } else {
                // 改变总价格
                $price_sum(-(($temp_num * $pro_danjia * 100) / 100).toFixed(2));
            }

            // ------------
            $.each($li_list, function(ind, val) {
                // console.log($(this).prop('checked'));
                if ($(this).prop('checked') === false) {
                    $xz_flag = false;
                }
            });
            if ($xz_flag) {
                $up_qx.prop('checked', 'checked');
                $down_qx.prop('checked', 'checked');
            } else {
                $up_qx.removeProp('checked', 'checked');
                $down_qx.removeProp('checked', 'checked');

            }
        });
        // 多选框点击事件     结束
        // ------------------------------------
        // 全选事件       开始
        $up_qx.on('click', function() {
            let $li_list = $cart_ul.find('.xuanze:visible');
            // 改变总价格
            if ($up_qx.prop('checked')) {
                let $li_list = $cart_ul.find('.xuanze:visible');
                $.each($li_list, function(ind, val) {
                    if ($(this).prop('checked') === false) {
                        let $wx_val = parseFloat($(this).parents('.moban').find('.product_heji span').html());
                        // console.log($wx_val);
                        // 改变总价
                        $price_sum($wx_val);
                    }
                });
            } else {
                $('#down_zj').html('¥' + 0);
            }
            // 改变商品的选中状态
            $.each($li_list, function(index, val) {
                // console.log($(this).prop('checked'))
                $(this).prop('checked', $up_qx.prop('checked'));
            });
            // 改变下面的全选状态
            $down_qx.prop('checked', $up_qx.prop('checked'));
        });
        // 下全选点击事件
        $down_qx.on('click', function() {
            let $li_list = $cart_ul.find('.xuanze:visible');
            // 改变总价格
            if ($down_qx.prop('checked')) {
                let $li_list = $cart_ul.find('.xuanze:visible');
                $.each($li_list, function(ind, val) {
                    if ($(this).prop('checked') === false) {
                        let $wx_val = parseFloat($(this).parents('.moban').find('.product_heji span').html());
                        // console.log($wx_val);
                        // 改变总价
                        $price_sum($wx_val);
                    }
                });
            } else {
                $('#down_zj').html('¥' + 0);
            }
            // 改变商品的选中状态
            $.each($li_list, function(index, val) {
                // console.log($(this).prop('checked'))
                $(this).prop('checked', $down_qx.prop('checked'));
            });
            // 改变上面面的全选状态
            $up_qx.prop('checked', $down_qx.prop('checked'));

        });


        // 全选事件       结束
        // --------------------------
        // 删除选中商品事件        开始
        $('#down_del').on('click', function() {
            // 获取全选框状态
            if ($down_qx.prop('checked')) {
                if (window.confirm('你确定要删除所选商品？')) {
                    $cart_ul.remove();
                    $('#down_zj').html('¥' + 0);
                    // 改变cookie
                    $.cookie('proid', $proid, { expires: 0, path: '/' });
                    $.cookie('pronum', $pronum, { expires: 0, path: '/' });
                }
            } else {
                let $li_list = $cart_ul.find('.xuanze:visible');
                $.each($li_list, function(ind, val) {
                    if ($(this).prop('checked')) {
                        $(this).parents('.moban').remove();
                        $('#down_zj').html('¥' + 0);
                        // 改变cookie的数量
                        let $pro_id = $(this).parents('.moban').attr('pro_index');
                        let $ind = $.inArray($pro_id, $proid);
                        $pronum.splice($ind, 1);
                        $proid.splice($ind, 1);
                        $.cookie('proid', $proid, { expires: 7, path: '/' });
                        $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                    }
                });
            }

        });
        // 删除选中商品事件        结束
        // -----------------------------------
        // 清空购物车事件         开始
        $('#qingkong').on('click', function() {
            if (window.confirm('你确定要清空购物车？')) {
                $cart_ul.remove();
                $('#down_zj').html('¥' + 0);
                // 改变cookie
                $.cookie('proid', $proid, { expires: 0, path: '/' });
                $.cookie('pronum', $pronum, { expires: 0, path: '/' });
            }
        });
        // 清空购物车事件         结束



    }
    // 计算总价的方法
    function $price_sum(num) {
        let $temp_zj = parseFloat($zj.html().toString().slice(1));
        // console.log($temp_zj);
        $temp_zj = (parseFloat(($temp_zj * 100 + parseFloat(num) * 100) / 100)).toFixed(2);
        // console.log($temp_zj);
        $zj.html('¥' + $temp_zj);
        // 获取总价格
        $down_zj = $temp_zj;
    }


}(jQuery);