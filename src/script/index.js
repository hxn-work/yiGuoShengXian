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
        $(window).on('scroll', function $dingbu() {
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

    //动态渲染中间的商品列表  ----开始
    let $fimastr = '<ul>'
    let $f2mastr = '<ul>'
    let $f3mastr = '<ul>'
    let $f4mastr = '<ul>'
    let $f5mastr = '<ul>'
    let $f6mastr = '<ul>'
    let $f7mastr = '<ul>'
    let $f8mastr = '<ul>'
    $.get('http://10.31.162.15/www/yiguoshengxian/php/productdata.php', function(data) {
        let $data = JSON.parse(data);
        //f1楼层内容
        let $f1m = $data.data1;
        $.each($f1m, function(index, val) {
            // console.log(val.url)
            $fimastr += `<li class= "c${index}" ><img class="lazyload"  data-original="${val.url}"></li>`
        })
        $fimastr += '</ul>'
        $('.f1main').html($fimastr);
        //f2楼层内容
        let $f2m = $data.data2;
        $.each($f2m, function(index, val) {
            // console.log(val.url)
            $f2mastr += `<li class= "c${index}" ><img class="lazyload"  data-original="${val.url}"></li>`
        })
        $f2mastr += '</ul>'
        $('.f2main').html($f2mastr);
        //f3楼层内容
        let $f3m = $data.data3;
        $.each($f3m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f3mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 7) {
                $f3mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f3mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f3mastr += `<div><img  src="${val.purl}"></div>`
            } else if (index === 5) {
                $f3mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f3mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f3mastr += '</li></ul>'
        $('.f3main').html($f3mastr);
        //f4楼层内容
        let $f4m = $data.data4;
        $.each($f4m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f4mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 7) {
                $f4mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f4mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f4mastr += `<div><img  src="${val.purl}"></div>`
            } else if (index === 5) {
                $f4mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f4mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f4mastr += '</li></ul>'
        $('.f4main').html($f4mastr);
        //f5楼层内容
        let $f5m = $data.data5;
        // console.log($f5m)
        $.each($f5m, function(index, val) {
            // console.log(val.purl)
            if (index === 5) {
                $f5mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 5) {
                $f5mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f5mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index === 3) {
                $f5mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f5mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f5mastr += '</li></ul>'
        $('.f5main').html($f5mastr);

        //f6楼层内容
        let $f6m = $data.data6;
        $.each($f6m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f6mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 7) {
                $f6mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f6mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f6mastr += `<div><img  src="${val.purl}"></div>`
            } else if (index === 5) {
                $f6mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f6mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f6mastr += '</li></ul>'
        $('.f6main').html($f6mastr);
        //f7楼层内容
        let $f7m = $data.data7;
        // console.log($f7m)
        $.each($f7m, function(index, val) {
            // console.log(val.purl)
            if (index === 5) {
                $f7mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 5) {
                $f7mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f7mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index === 3) {
                $f7mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f7mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f7mastr += '</li></ul>'
        $('.f7main').html($f7mastr);
        //f8楼层内容
        let $f8m = $data.data8;
        $.each($f8m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f8mastr += `<li class= "c${index}" ><img  src="${val.purl}">`
            } else if (index > 7) {
                $f8mastr += `<img  src="${val.purl}">`
            } else if (index === 2) {
                $f8mastr += `<li class= "c${index}" ><div><img  src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f8mastr += `<div><img  src="${val.purl}"></div>`
            } else if (index === 5) {
                $f8mastr += `<div><img  src="${val.purl}"><div></li>`
            } else {
                $f8mastr += `<li class= "c${index}" ><img  src="${val.purl}"></li>`
            }

        })
        $f8mastr += '</li></ul>'
        $('.f8main').html($f8mastr);
        //懒加载
        $(function() {
            $("img.lazyload").lazyload({ effect: "fadeIn" });
        });
    })

    //动态渲染中间的商品列表  ----结束
    // 轮播图开始
    const $btn_left = $('.btn_lr #left');
    const $btn_right = $('.btn_lr #right');
    const $banners = $('#banner_img li');
    const $banner = $('#banner_img');
    const $yds = $('.yuandian li');
    let $ban_index = 0;
    let $ban_timer = null;
    // 自动轮播
    $ban_timer = setInterval(function() {
        $ban_index++;
        if ($ban_index === $banners.length) {
            $ban_index = 0;
        }
        $ban_qh($ban_index);
    }, 5000);
    // 左侧按钮事件
    $btn_left.on('click', function() {
        // alert($banners.length);
        $ban_index--;
        if ($ban_index < 0) {
            $ban_index = $banners.length - 1;
        }

        $ban_qh($ban_index);
        // alert($ban_index);
    });
    // 轮播切换方法
    function $ban_qh($ban_index) {
        $.each($banners, function(index, val) {
            $banners.eq(index).css('opacity', 0);
            // $banners.eq(index).removeProp('class');
            $yds.eq(index).removeProp('class');
        });
        $banners.eq($ban_index).css('opacity', 1);
        // $banners.eq($ban_index).prop('class', 'donghua');
        $yds.eq($ban_index).prop('class', 'active');
    }
    // 右侧按钮事件
    $btn_right.on('click', function() {
        $ban_index++;
        if ($ban_index === $banners.length) {
            $ban_index = 0;
        }

        $ban_qh($ban_index);
    });
    // 小圆点事件
    $yds.hover(function() {
        clearInterval($ban_timer);
        $ban_qh($(this).index());
    }, function() {
        $ban_timer = setInterval(function() {
            $ban_index++;
            if ($ban_index === $banners.length) {
                $ban_index = 0;
            }
            $ban_qh($ban_index);
        }, 5000);
    });
    // 移入事件
    $banner.hover(function() {
        clearInterval($ban_timer);
    }, function() {
        $ban_timer = setInterval(function() {
            $ban_index++;
            if ($ban_index === $banners.length) {
                $ban_index = 0;
            }
            $ban_qh($ban_index);
        }, 5000);
    });


    // 轮播图结束

    // ---------------------------
    // 楼梯效果开始

    const $louti = $('#louti');
    const $li_list = $('#louti li');
    const $louceng = $('.louceng')
    let $loucengtop;

    //添加滚轮事件
    function $gunlun() {
        let $top = $(window).scrollTop();
        // 楼梯的显示与隐藏
        $top >= 520 ? $louti.show() : $louti.hide();
        $(window).on('scroll', function() {
            $top = $(window).scrollTop();
            // 楼梯的显示与隐藏
            $top >= 520 ? $louti.show() : $louti.hide();
            // 遍历楼层，获取各楼层距离顶部位置
            $louceng.each(function(index, val) {
                $loucengtop = $(val).offset().top + $(val).height() / 2;
                if ($loucengtop > $top) {
                    $li_list.removeClass('li_show');
                    $li_list.eq(index).addClass('li_show');
                    return false;
                }
            });

        });
    }
    $gunlun();

    // 添加点击事件跳转指定位置
    $li_list.not('li:last-of-type').on('click', function() {
        $(this).addClass('li_show').siblings('li').removeClass('li_show');
        $loucengtop = $louceng.eq($(this).index()).offset().top - 100;
        $('html,body').animate({
            scrollTop: $loucengtop
        });
    })

    //回到顶部
    $li_list.siblings('li:last-of-type').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })


}(jQuery);