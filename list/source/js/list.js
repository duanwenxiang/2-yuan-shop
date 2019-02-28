$(document).ready(function(){
    // 产品分类ajax的获取
    var list2 = $.ajax({
        type: "get",
        url: "../index/tab.json"
    })
    list2.done(function(json){
        for(var attr in json){
            $(".list2-class1").append(`<li>${json[attr].key1[0]}</li>`)
            var tabIndex = "tab1" 
            var TabLi = "";
            for(var j = 0;j < json[tabIndex].key2.length;j ++){
                TabLi += `<li>${json[tabIndex].key2[j]}</li>`
            }
            $(".list2-class2").html(TabLi);
            $(".list2-class1>li").click(function(){
                $(this).addClass("list2-com")
                    .siblings()
                    .removeClass("list2-com");
                var tabIndex = "tab" + ($(this).index()+1);
                var list2 = "";
                for(var j = 0;j < json[tabIndex].key2.length;j ++){
                    list2 += `<li>${json[tabIndex].key2[j]}</li>`
                }
                $(".list2-class2").html(list2);
            })
        }
    })
    var goods = $.ajax({
        type : "get",
        url : "list.json"
    })
    goods.done(function(json){
        for(var attr in json){
            console.log(json[attr].length)
            var goodsC = "";
            for(var i = 0;i < json[attr].length;i ++){
                goodsC += `<ul>
                        <img src="dist/img/${json[attr][i].src}" alt="">
                        <li><input type="checkbox">${json[attr][i].name}</li>
                        <li>批发价：<b>￥${json[attr][i].price}</b><a href="javascript:;">加入购物车</a></li>
                        </ul>`
            }
            $(".list-c").html(goodsC);
        }
    })
})
// bug点击失效
// function list2xiaolei(obj){
//     $(obj).on("click",function(){
//         $(this).addClass("list2-com")
//         .siblings()
//         .removeClass("list2-com");
//         alert(1);
//     })
// }

