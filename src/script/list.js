! function($) {
    //加载头部和尾部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    let $prostr = '';
    $.get('http://10.31.162.15/www/yiguoshengxian/php/listdata.php', function(data) {
        let $data = JSON.parse(data);
        // console.log($data);
        $.each($data, function(index, val) {
            $prostr += `<li>
            <a href="./detail.html?pid=${val.id}"><img src="${val.url}" alt=""></a>
            <div>
                <p>${val.pmiaosu}</p>
                <button>加入购物车</button>
            </div>

            <p class="miaoshu"><a href="./detail.html?pid=${val.id}">${val.pname}</a></p>
            <span>¥${val.pcprice}</span>
        </li>`
        });
        $('#productlist ul').html($prostr);
    });
}(jQuery);