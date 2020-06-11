! function($) {
    //加载头部和尾部
    $('#header').load('./header.html', function() {
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
        $(window).on('scroll', function() {
            let $top = $(window).scrollTop();
            const $header = $('#header_fiex');
            // console.log($header);
            if ($top >= 120) {
                $header.stop(true).animate({
                    top: 0
                });
            } else {
                $header.stop(true).animate({
                    top: -46
                });
            }
        });
    });
    $('#footer').load('./footer.html');
    // 获取商品ID
    const $sid = location.search.slice(1).split('=')[1];
    // 加载内容
    $.get('https://www.bearchild.cn:8443/php/selectById.php', { tsid: $sid }, function(data) {
            // console.log(JSON.parse(data));
            let $data = JSON.parse(data);
            let $urlstr = $data.urls;
            let $urlarr = $urlstr.split(',');
            // console.log($urlarr);
            // 加载缩略图
            let $sltstr = '';
            let $phprice = '';
            let $xiangqin = '';
            let $timestr = '';
            $.each($urlarr, function(index, val) {
                $sltstr += `<li><img src="${val}" alt="" class="slt"></li>`;
            });
            // 设定移动端优惠
            if ($data.phprice) {
                $phprice = `<span><i>移动专享</i>¥&nbsp;${$data.phprice}</span>`;
            } else {
                $phprice = '<i class="ydzx">更多商品优惠，尽在易果生鲜APP</i>';
            }
            //设定时间
            // console.log(new Date().getDate());
            // console.log(new Date().getMonth() + 1);
            $timestr = `${(new Date().getMonth() + 1)}月${(new Date().getDate()+2)}日`;

            // 设置分类名
            $('.fenlei .flm').html($data.pname);
            // 设置两个大图url
            $('.left .xt').attr('src', $data.url);
            $('.left .dt').attr('src', $data.url);
            // 设置小图列表
            $('.left ul').html($sltstr);
            // 设置商品名
            $('.right .up_title').html($data.pname);
            // 设置商品描述
            $('.right .up_miaoshu').html($data.pmiaosu);
            // 设置pc端商品价格
            $('.pc_jiage span').html($data.pcprice);
            //设置移动端价格
            $('.ph_jiage').html($phprice);
            // 设置规格里的价格及规格
            $('.guige .ggp').html($data.pcprice);
            $('.guige .gg').html($data.guige + '/盒');
            // 设置预计送达时间
            $('.yjtime .yj').html($timestr);
            // 设置商品编号
            $('.pid').html('<span>商品编号：</span>' + $data.id);

            //  加载-设置结束
            // ------------------------------------
            // 切换小图
            const $slt_list = $('.left ul');
            const $pic_warp = $('.left .pic');
            const $xt = $('.left .xt');
            const $dt = $('.left .dt');
            const $xf = $('.left .xf');
            const $df = $('.left .df');
            $slt_list.on('mouseover', 'li', function() {
                let $imglj = $(this).find('img').attr('src');
                $xt.attr('src', $imglj);
                $dt.attr('src', $imglj);
                $slt_list.find('li').removeClass('slt_active');
                $(this).addClass('slt_active');

            })

            // 放大镜效果   开始
            // 获取鼠标位置
            // $sbx=
            $pic_warp.hover(function() {

                $df.show();
                $xf.show();
                $xf.css({
                    width: $xt.width() * $df.width() / $dt.width(),
                    height: $xt.height() * $df.height() / $dt.height(),
                });
                $(this).on('mousemove', function(e) {
                    // 获取鼠标位置
                    let $sbx = e.pageX;
                    let $sby = e.pageY;
                    // console.log($sbx, $sby);
                    // 获取xf位置
                    let $xf_top = $sby - $pic_warp.offset().top - $xf.outerHeight() / 2;

                    let $xf_left = $sbx - $pic_warp.offset().left - $xf.outerWidth() / 2;

                    $xf_top = $xf_top < 0 ? 0 : $xf_top > ($pic_warp.outerHeight() - $xf.outerHeight()) ? $pic_warp.outerHeight() - $xf.outerHeight() : $xf_top;
                    $xf_left = $xf_left < 0 ? 0 : $xf_left > ($pic_warp.outerWidth() - $xf.outerWidth()) ? $pic_warp.outerWidth() - $xf.outerWidth() : $xf_left;
                    // console.log($xf_top, $xf_left);
                    // 计算比例
                    let $bl = ($dt.innerWidth()) / $xt.innerWidth();

                    // 小图移动
                    $xf.css({
                        top: $xf_top,
                        left: $xf_left,
                    });
                    // 大图移动
                    $dt.css({
                        top: -$xf_top * $bl,
                        left: -$xf_left * $bl,
                    })
                })

            }, function() {
                $df.hide();
                $xf.hide();
            })
        })
        // 放大镜效果   结束
        // --------------------------------------
        // 数量加减     开始
    const $num_input = $('.jrgwc input');
    const $num_jia = $('.jrgwc .jia');
    const $num_jian = $('.jrgwc .jian');
    const $jrgwc = $('.jrgwc .gwc');
    let $num = 1;
    // 改变-号的状态函数
    function $changJian() {
        if ($num_input.val() > 1) {
            $num_jian.removeProp('disabled');
        } else if ($num_input.val() <= 1) {
            // console.log(1)
            $num_jian.attr('disabled', 'disabled');
        }
    }
    // input改变事件
    $num_input.on('change   ', function() {
            $num = parseInt($num_input.val());
            if ($num < 1) {
                $num = 1;
                alert("商品数量不能小于1");
            }
            $num_input.val($num);
            $changJian();
        })
        // +号事件
    $num_jia.on('click', function() {
        $num = parseInt($num_input.val());
        $num += 1;
        $num_input.val($num);
        $changJian();
    });
    // -号事件  
    $num_jian.on('click', function() {
        $num = parseInt($num_input.val());
        $num -= 1;
        $num_input.val($num);
        $changJian();
    });
    // 数量加减     结束
    // ---------------------------------
    // 加入购物车
    let $proid = [];
    let $pronum = [];
    $jrgwc.on('click', function() {
        $num = parseInt($num_input.val());
        // alert($sid)
        // 已存在购物车时走这里
        if ($.cookie('proid')) {
            // console.log(1);
            // 获取已存在的购物车
            $proid = $.cookie('proid').split(',');
            $pronum = $.cookie('pronum').split(',');
            // 当添加的商品已存在现有的购物车里时
            if ($.inArray($sid, $proid) !== -1) {
                // console.log(2);
                // 找到商品所在的索引，改变商品数量重新添加
                $pronum[$.inArray($sid, $proid)] = parseInt($pronum[$.inArray($sid, $proid)]) + $num;
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                // 存储完将input的值恢复为1，并禁用-按钮
                $num_input.val(1);
                $changJian();
            }
            // 当添加的购物车没存在现有的购物车时 
            else if ($.inArray($sid, $proid) === -1) {
                // console.log(3);
                // 直接添加商品和数量
                $proid.push($sid);
                $pronum.push($num);
                $.cookie('proid', $proid, { expires: 7, path: '/' });
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                // 存储完将input的值恢复为1，并禁用-按钮
                $num_input.val(1);
                $changJian();
            }
        } else {
            // console.log(4);
            // 第一次添加购物车时走这里
            $proid.push($sid);
            $pronum.push($num);
            $.cookie('proid', $proid, { expires: 7, path: '/' });
            $.cookie('pronum', $pronum, { expires: 7, path: '/' });
            // 存储完将input的值恢复为1，并禁用-按钮
            $num_input.val(1);
            $changJian();
        }
    });
    //加入购物车结束


}(jQuery);