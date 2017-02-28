/**
 * Created by luxianying on 2017/2/28.
 */
$(function () {
    var headtitle = localStorage.getItem('header');
    var headtext = localStorage.getItem('text');
    $(".message>h3").html(headtitle);
    $(".message>p").html(headtext);
    splitImg()
    $('.regenerate').click(function () {
        window.location.href='../../../index.html';
    })
})