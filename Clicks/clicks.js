/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
