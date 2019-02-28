// 放大镜的方法
function imgfdj(obj1,obj2,obj3,obj4){
    $(obj1).mouseenter(function(){
        $(obj2).show();       
        $(obj3).show();    
    })
    $(obj1).mouseleave(function(){
        $(obj2).hide();       
        $(obj3).hide();    
    })
    $(obj1).mousemove(function (e) {
        var x =  e.pageX - $(obj1).offset().left - ($(obj2).width()/2);
        var y =  e.pageY - $(obj1).offset().top - ($(obj2).height()/2);
        x = Math.min(Math.max(0,x),$(obj1).width()-$(obj2).width());
        y = Math.min(Math.max(0,y),$(obj1).height()-$(obj2).height());
        $(obj2).css({"left": x,"top": y});
        var Dx = x * $(obj4).width() / $(obj1).width();
        var Dy = y * $(obj4).height() / $(obj1).height();
        $(obj4).css({"left":-Dx,"top":-Dy})
    })
}
// 列表动态加载
$(document).ready(function(){
    var list = $.ajax({
        type:"post",
        url:"../index/tab.json"
    })
    list.done(function(json){
        for(var attr in json){
            $(".view-left").append(`<li>${json[attr].key1}</li>`)
        }
    })
})