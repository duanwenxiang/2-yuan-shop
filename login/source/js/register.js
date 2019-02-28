// 注册页面的验证功能
var uname,upwd,qpwd,consignee,site,qq,phone = null;
$("#uname").blur(function(){
    var tes = /^[a-z]{1}[a-z0-9]{5}$/;
    if(tes.test($(this).val())){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("正确");
        if(($.cookie("uname") == $(this).val())){
            $(this).next().css("color","red");
            $(this).next().next().css("color","red");
            $(this).next().next().html("用户名已存在！");
            uname = false;
        }else{
            uname = true;
        }
    }else if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        uname = false;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("格式错误，请输入以“英文字母开头”的6位数（不认识大写!）");
        uname = false;
    }
})
$("#upwd").blur(function(){
    var tes = /^[0-9]{6}$/;
    if(tes.test($(this).val())){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("正确");
        upwd = true;
    }else if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        upwd = false;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("格式错误，请输入6位数字");
        upwd = false;
    }
})
$("#qpwd").blur(function(){
    if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        qpwd = false;
    }else if($(this).val() == $("#upwd").val()){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("密码一致");
        qpwd = true;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("密码不一致");
        qpwd = false;
    }
})
$("#consignee,#site").blur(function(){
    var tes = /[\u4e00-\u9fa5]/;
    if(tes.test($(this).val())){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("正确");
        consignee = true,site = true;
    }else if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        consignee = false,site = false;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("格式错误，请输入中文");
        consignee = false,site = false;
    }
})
$("#qq").blur(function(){
    var tes = /[1-9]([0-9]{5,11})/;
    if(tes.test($(this).val())){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("正确");
        qq = true;
    }else if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        qq = false;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("格式错误，请输入正确的QQ");
        qq = false;
    }
})
$("#phone").blur(function(){
    var tes = /0?(13|14|15|17|18|19)[0-9]{9}/;
    if(tes.test($(this).val())){
        $(this).next().css("color","green");
        $(this).next().next().css("color","green");
        $(this).next().next().html("正确");
        phone = true;
    }else if($(this).val() == ""){
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("不能为空");
        phone = false;
    }else{
        $(this).next().css("color","red");
        $(this).next().next().css("color","red");
        $(this).next().next().html("格式错误，请输入正确的手机号");
        phone = false;
    }
})
// 提交
$("form").submit(function(){
    if(uname && upwd && qpwd && consignee && site && qq && phone){
        $.cookie("uname",$("#uname").val(),{path:'/'});
        $.cookie("upwd",$("#upwd").val(),{path:'/'});
        return true;
    }else{
        $("#s1").html("请补全页面信息！");
        return false;
    }
})