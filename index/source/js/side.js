$(".cide").mouseenter(function () { 
    $(".serve").show();
    $(this).hide();
    return false;
})
$(".serve").mouseleave(function () { 
    $(".cide").show();
    $(this).hide();
    return false;
})