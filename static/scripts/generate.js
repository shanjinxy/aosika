/**
 * Created by luxianying on 2017/2/28.
 */

$(function () {

    // ga 发送事件
    // 下载事件
    $(".download").click(function (e) {
        e.preventDefault();
        ga('send', 'event', {
            eventCategory: 'A股票奥斯卡下载',
            eventAction: 'click',
            eventLabel: 'A股票奥斯卡'
        });
        setTimeout(function () {
            window.location.href = "http://bao.wallstreetcn.com/static/app.html?from=yuanbao";
        }, 500)
    })

    // 重新生成按钮
    $(".regenerate").click(function (e) {
        ga('send', 'event', {
            eventCategory: 'A股票奥斯卡之重新生成',
            eventAction: 'click',
            eventLabel: 'A股票奥斯卡'
        });
        setTimeout(function () {
            window.location.href='../../../index.html';
        },300)
    })

    // 获取活动标题和内容
    var headtitle = localStorage.getItem('header');
    var headtext = localStorage.getItem('text');
    if( headtext==" " || headtext =="" ){
        alert('请从活动页开始！');
        window.location.href='index.html';
    }
    $(".message>h3").html(headtitle);
    $(".message>p").html(headtext);
    splitImg()

})