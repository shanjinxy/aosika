

$(function () {

    // ga 发送事件


    // select 盒子的change事件
    $(".selectBox").change(function () {
        // var selectIndex = ($(this).index())
        var selectIndex = $(".selectBox").val();
        $(".radioBox").eq(selectIndex).addClass("isVisible").siblings(".radioBox").removeClass("isVisible");
    })

    //radio 点击事件

    $('input[name="opt0box"]').click(function () {
        var cT = $('input[name="opt0box"]').filter(':checked').val();
        var selecttext= $(".selectBox").find("option:selected").text();
        console.log(selecttext);
        console.log(cT);
    })

    // 绑定radio点击事件2
    $('input[name="opt1box"]').click(function () {
        var cT = $('input[name="opt1box"]').filter(':checked').val();
        var selecttext= $(".selectBox").find("option:selected").text();
        console.log(selecttext);
        console.log(cT);
    })
    // 绑定radio点击事件3
    $('input[name="opt2box"]').click(function () {
        var cT = $('input[name="opt2box"]').filter(':checked').val();
        var selecttext= $(".selectBox").find("option:selected").text();
        console.log(selecttext);
        console.log(cT);
    })

    $('.userText').bind('input propertychange', function() {
        var text = $(this).val()
        $(this).siblings('input[name="opt0box"]').val(text);
        console.log(text);
    });

    function check_info(){
        var selecttext= $(".selectBox").find("option:selected").text();
        var textSubmit = $('input[type=radio]').filter(':checked').val();

        if(!textSubmit ){
            alert("请输入相关项！");
            return false;
        }
        console.log(selecttext);
        console.log(textSubmit);
        localStorage.setItem('header',selecttext);
        localStorage.setItem('text',textSubmit);
        window.location.href="static/views/generate.html";
    }
    //跳转生成图片
    $(".generateButton").click(function () {
        console.log('我被点击')
        check_info();

    })
;
})