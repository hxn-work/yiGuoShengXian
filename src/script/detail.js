! function($) {
    //加载头部和尾部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    // 获取商品ID
    const sid = location.search.slice(1).split('=')[1];
    // 加载内容
    $.get('https://bearchild.cn:8443/php/selectById.php', { tsid: sid }, function(data) {
        console.log(JSON.parse(data));
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

        // 加载开始
        $xiangqin = `        <p class="fenlei">
            <a href="./index.html">首页</a><span>></span>
            <a href="./index.html">精选肉类</a><span>></span>
            <a href="./list.html">蛋</a><span>></span>
            <span>${$data.pname}</span>
        </p>
        <!-- 左侧图片 -->
        <div class="left">
            <div class="pic">
                <img src="${$data.url}" alt="" class="xt">
                <div class="xf"></div>
            </div>
            <div class="df">
                <img src="${$data.url}" alt="" class="dt">
            </div>
            <ul>
                ${$sltstr}
            </ul>
        </div>
        <!-- 右侧描述 -->
        <div class="right">
            <!-- 上 -->
            <div class="right_up">
                <h2 class="up_title">${$data.pname}</h2>
                <p class="up_miaoshu">${$data.pmiaosu}</p>
                <div class="up_price">
                    <!-- pc端和移动端价格 -->
                    <div class="up_jiage">
                        <p class=pc_jiage><i>价格：</i>
                            <span>¥&nbsp;${$data.pcprice}</span>
                        </p>
                        <p class="ph_jiage">
                            ${$phprice}
                        </p>
                    </div>
                    <!-- 扫码购 -->
                    <div class="up_ma">
                        <i>手机下单购买</i>
                        <span>立即扫码</span>
                        <s><img src="./img/ma.png" alt=""></s>
                    </div>
                    <!-- 评论 -->
                    <div class="up_pinglun">
                        <p>总体满意度</p>
                        <p><span>5.0</span> 分</p>
                        <p>(评论数455)</p>
                    </div>

                </div>
                <!-- 分割 -->
                <div class="fenge"></div>
            </div>

            <!-- 下 -->
            <div class="right_down">
                <p class="cu"> <span>促</span> 该商品不与其他优惠券、现金券及抵用卡同享
                </p>
                <!-- 加入购物车 -->
                <div class="down_left">
                    <!-- 规格 -->
                    <div class="guige">
                        <span>规格：</span>
                        <div>
                            <p>${$data.pcprice}</p>
                            <p>${$data.guige}/盒</p>
                        </div>
                    </div>
                    <!-- 预计时间 -->
                    <p class="yjtime"><span>12:00</span> 后完成订单 预计后天 <span>${$timestr}</span> 送达</p>
                    <!-- 退货 -->
                    <p class="tuihuo">
                        <img src="http://static01.yiguo.com/www/images/icon1.png" alt=""> 不支持7天无理由退货
                    </p>
                    <!-- 加入购物车 -->
                    <div class="jrgwc">
                        <span>数量：</span>
                        <input type="text" id="number" value="1">
                        <button class="jia">+</button>
                        <button class="jian" disabled>-</button>
                        <a class="gwc">
                            <i></i> 加入购物车
                        </a>
                    </div>
                </div>
                <!-- 产地及发货信息 -->
                <div class="down_right">
                    <p><span>原产地：</span>广东中山</p>
                    <p><span>商品编号：</span>${$data.id}</p>
                    <p><span>品牌：</span>江中</p>
                    <p><span>发货地：</span>上海宝山</p>
                </div>
            </div>
        </div>`
            // 加载结束
        $('#detail').html($xiangqin);

    })
}(jQuery);