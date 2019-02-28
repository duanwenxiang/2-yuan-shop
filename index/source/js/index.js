// 轮播图
function slide(xb,lbt,slides) {
    var i = 1;
    var timer = setInterval(function () {
        if (i > 2) {
            i = 0;
        };
        $(xb).eq(i).css("background", "red").siblings().css("background", "#626262");
        $(lbt).eq(i)
            .css({
                "display": "block"
            })
            .siblings()
            .css({
                "display": "none"
            })
            ++i;
    }, 3000)
    $(slides).mouseenter(function () {
        clearInterval(timer);
        return false;
    });
    $(slides).mouseleave(function () {
        timer = setInterval(function () {
            if (i > 2) {
                i = 0;
            };
            $(xb).eq(i).css("background", "red").siblings().css("background", "#626262");
            $(lbt).eq(i)
                .css({
                    "display": "block"
                })
                .siblings()
                .css({
                    "display": "none"
                })
                ++i;
        }, 3000)
        return false;
    });
    $(xb).mouseenter(function () {
        clearInterval(timer);
        $(lbt).eq($(this).index()).show().siblings().hide();
        $(this).css("background", "red").siblings().css("background", "#626262");
        return false;
    })
}
// Tab选显卡
$(document).ready(function () {
    var Tab = $.ajax({
        type: "post",
        url: "index/tab.json",
    });
    Tab.done(function (json) {
        for(var attr in json){
            // 显示的导航栏
            $(".tab").append(`<li>${json[attr].key1[0]}</li>`)
            // 导航移动事件
            $(".tab>li").mouseenter(function(){
                $(".tab-box").css("display","block");
                $(this).css({"background":"#ffffff","color":"black"});
                var tabIndex = "tab" + $(this).index();
                var TabLi = "";
                for(var j = 0;j < json[tabIndex].key2.length;j ++){
                    TabLi += `<li>${json[tabIndex].key2[j]}</li>`
                }
                $(".tab-box").html(TabLi);
                return false;
            })
            $(".tab>li").mouseleave(function(){
                $(".tab-box").css("display","none");
                $(this).css({"background":"#c81622","color":"#c3c9d7"});
                return false;
            })
            $(".tab-box").hover(function(){
                $(this).show();
            },function(){
                $(this).hide();
            })
        }
    })
    // 获取到商品的json
    var Goods = $.ajax({
        type:"get",
        url:"common/goods.json"
    })
    Goods.done(function(json){
        for(var attr in json){
            var goods = "";
            for(var i = 0;i < json[attr].length;i ++){
                goods += `<ul>
                        <img src="index/dist/img/${json[attr][i].src}" alt="">
                        <li>${json[attr][i].name}</li>
                        <li>促销价：<b>￥${json[attr][i].price}</b></li>
                        </ul>`
            }
            $(".hot-slides").html(goods);
        }
    })
    // hot行动起来
    setInterval(function(){
        if($(".hot-slides").position().left == -860){
            $(".hot-slides").animate({left:0},3000);           
        }else{
            $(".hot-slides").animate({left:-860},3000);           
        }
    },6000)
    // 获取商品主体
    var GoodsC = $.ajax({
        type:"post",
        url:"common/goodsC.json"
    })
    GoodsC.done(function(json){
        for(var attr in json){
            var goodsC = "";
            for(var i = 0;i < json[attr].length;i ++){
                goodsC += `<ul>
                        <img src="index/dist/img/${json[attr][i].src}" alt="">
                        <li>${json[attr][i].name}</li>
                        <li><b>￥${json[attr][i].price}</b><span>加入购物车</span></li>
                         </ul>`
            }
            $(".goods-c").html(goodsC);
        }
    })
})
// 现场图移动
function domeYD(obj,obj2){
    // 现场图
    var dome = "";
    for(var d = 1;d <= 12;d ++){
        dome += `<img src="index/dist/img/wall_s${d}.jpg" alt="">`
    }
    $(".dome>div").html(dome);
    var timer = setInterval(autoPlay,10);
    var index = 0;
    function autoPlay(){
        index --;
        if(index == -2400){
            $(".dome>div").append(dome);
        }else if(index == -3600){
            $(".dome>div").empty();
            $(".dome>div").append(dome);
            index = 0;
        }
        $(obj).css("left",index);
    }
    $(obj2).mouseenter(function(){
        clearInterval(timer);
    })
    $(obj2).mouseleave(function(){
        timer = setInterval(autoPlay,10);
    })
}