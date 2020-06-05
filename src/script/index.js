! function($) {
    //加载头部和尾部
    $('#header').load('./header.html');
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
            $fimastr += `<li class= "c${index}" ><img src="${val.url}"></li>`
        })
        $fimastr += '</ul>'
        $('.f1main').html($fimastr);
        //f2楼层内容
        let $f2m = $data.data2;
        $.each($f2m, function(index, val) {
            // console.log(val.url)
            $f2mastr += `<li class= "c${index}" ><img src="${val.url}"></li>`
        })
        $f2mastr += '</ul>'
        $('.f2main').html($f2mastr);
        //f3楼层内容
        let $f3m = $data.data3;
        $.each($f3m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f3mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 7) {
                $f3mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f3mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f3mastr += `<div><img src="${val.purl}"></div>`
            } else if (index === 5) {
                $f3mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f3mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
            }

        })
        $f3mastr += '</li></ul>'
        $('.f3main').html($f3mastr);
        //f4楼层内容
        let $f4m = $data.data4;
        $.each($f4m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f4mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 7) {
                $f4mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f4mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f4mastr += `<div><img src="${val.purl}"></div>`
            } else if (index === 5) {
                $f4mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f4mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
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
                $f5mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 5) {
                $f5mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f5mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index === 3) {
                $f5mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f5mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
            }

        })
        $f5mastr += '</li></ul>'
        $('.f5main').html($f5mastr);

        //f6楼层内容
        let $f6m = $data.data6;
        $.each($f6m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f6mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 7) {
                $f6mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f6mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f6mastr += `<div><img src="${val.purl}"></div>`
            } else if (index === 5) {
                $f6mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f6mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
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
                $f7mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 5) {
                $f7mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f7mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index === 3) {
                $f7mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f7mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
            }

        })
        $f7mastr += '</li></ul>'
        $('.f7main').html($f7mastr);
        //f8楼层内容
        let $f8m = $data.data8;
        $.each($f8m, function(index, val) {
            // console.log(val.purl)
            if (index === 7) {
                $f8mastr += `<li class= "c${index}" ><img src="${val.purl}">`
            } else if (index > 7) {
                $f8mastr += `<img src="${val.purl}">`
            } else if (index === 2) {
                $f8mastr += `<li class= "c${index}" ><div><img src="${val.purl}"></div>`
            } else if (index > 2 && index < 5) {
                $f8mastr += `<div><img src="${val.purl}"></div>`
            } else if (index === 5) {
                $f8mastr += `<div><img src="${val.purl}"><div></li>`
            } else {
                $f8mastr += `<li class= "c${index}" ><img src="${val.purl}"></li>`
            }

        })
        $f8mastr += '</li></ul>'
        $('.f8main').html($f8mastr);
    })

    //动态渲染中间的商品列表  ----结束


}(jQuery);