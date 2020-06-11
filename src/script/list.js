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
    // 动态加载商品列表     开始
    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;
    let upordown = 0;

    $.get('https://www.bearchild.cn:8443/php/listdata.php', function(data) {
        let $prostr = '';
        let $data = JSON.parse(data);
        // console.log($data);
        $.each($data, function(index, val) {
            $prostr += `<li>
            <a href="./detail.html?pid=${val.id}"><img class="lazyload" data-original="${val.url}" alt=""></a>
            <div>
                <p>${val.pmiaosu}</p>
                <button index="${val.id}">加入购物车</button>
            </div>

            <p class="miaoshu"><a href="./detail.html?pid=${val.id}">${val.pname}</a></p>
            <span class="pcprice">¥${val.pcprice}</span>
        </li>`
        });
        $('#productlist ul').html($prostr);
        // 懒加载
        $(function() {
            $("img.lazyload").lazyload({ effect: "fadeIn" });
        });
        // 将数据存储到数组中，以便排序
        $('#productlist li').each(function(index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });

    // 动态加载商品列表     结束
    // 排序      开始
    // 默认排序
    $('#moren').on('click', function() {
        $('#jiage i').removeProp('class');
        $.each(array_default, function(index, val) {
            $('#productlist ul').append(val);
        });
        return;
    });
    // 依据价格排序
    $('#jiage').on('click', function() {
        // 依据价格生序排序
        if (upordown == 0) {
            $('#jiage i').prop('class', 'activeup');
            for (let i = 0; i < array.length - 1; i++) {
                for (let j = 0; j < array.length - i - 1; j++) {
                    prev = parseFloat(array[j].find('.pcprice').html().substring(1));
                    next = parseFloat(array[j + 1].find('.pcprice').html().substring(1));
                    if (prev > next) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            $.each(array, function(index, val) {
                // console.log(val);
                $('#productlist ul').append(val);
            });
            upordown = 1;
            return;
        }
        // 依据价格降序排序
        if (upordown == 1) {
            $('#jiage i').prop('class', 'activedown');
            for (let i = 0; i < array.length - 1; i++) {
                for (let j = 0; j < array.length - i - 1; j++) {
                    prev = parseFloat(array[j].find('.pcprice').html().substring(1));
                    next = parseFloat(array[j + 1].find('.pcprice').html().substring(1));
                    if (prev < next) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            $.each(array, function(index, val) {
                // console.log(val);
                $('#productlist ul').append(val);
            });
            upordown = 0;
            return;
        }
    });
    // 排序结束
    // 分页开始
    $('.page').pagination({
        pageCount: 2,
        jump: true,
        coping: true,
        prevContent: '上一页',
        nextContent: '下一页',
        homePage: '首页',
        endPage: '尾页',
        callback: function(api) {
            // console.log(api.getCurrent());
            $.ajax({
                url: 'https://www.bearchild.cn:8443/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function(data) {
                let $prostr = '';
                let $data = data;
                // console.log($data);
                $.each($data, function(index, val) {
                    $prostr += `<li>
            <a href="./detail.html?pid=${val.id}"><img class="lazyload" data-original="${val.url}" alt=""></a>
            <div>
                <p>${val.pmiaosu}</p>
                <button index="${val.id}">加入购物车</button>
            </div>

            <p class="miaoshu"><a href="./detail.html?pid=${val.id}">${val.pname}</a></p>
            <span class="pcprice">¥${val.pcprice}</span>
        </li>`
                });
                $('#productlist ul').html($prostr);
                $(function() {
                    $("img.lazyload").lazyload({ effect: "fadeIn" });
                });
                // 将原先的数据清空
                array_default = [];
                array = [];
                prev = null;
                next = null;
                // 将数据存储到数组中，以便排序
                $('#productlist li').each(function(index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });

            })
        }
    });

    // ---------------------------------
    // 加入购物车
    let $proid = [];
    let $pronum = [];
    $('#productlist ul').on('click', 'button', function() {
        let $num = 1;
        let $sid = $(this).attr('index');
        // console.log($sid);
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
                alert('该商品已经加入购物车！');
            }
            // 当添加的购物车没存在现有的购物车时 
            else if ($.inArray($sid, $proid) === -1) {
                // console.log(3);
                // 直接添加商品和数量
                $proid.push($sid);
                $pronum.push($num);
                $.cookie('proid', $proid, { expires: 7, path: '/' });
                $.cookie('pronum', $pronum, { expires: 7, path: '/' });
                alert('该商品已经加入购物车！');
            }
        } else {
            // console.log(4);
            // 第一次添加购物车时走这里
            $proid.push($sid);
            $pronum.push($num);
            $.cookie('proid', $proid, { expires: 7, path: '/' });
            $.cookie('pronum', $pronum, { expires: 7, path: '/' });
            alert('该商品已经加入购物车！');
        }
    });
    //加入购物车结束
    // --------------------------------

}(jQuery);