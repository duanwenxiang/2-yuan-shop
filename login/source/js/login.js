// 提交
$("form").submit(function(){
    if($.cookie("uname") == $("#uname").val() && $.cookie("upwd") == $("#upwd").val()){
        return true;
    }else{
        $("#s1").html("账号或密码不正确！");
        return false;
    }
})