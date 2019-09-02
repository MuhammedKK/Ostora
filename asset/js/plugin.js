$(document).ready(function () {


    // Trigger Nicescroll

    $('html').niceScroll()
    // Center Header Content
    $('.header-content').css('padding-top', ($(window).height() - $('.header-content').height()) / 2);
    $(window).resize(function () {
        $('.header-content').css('padding-top', ($(window).height() - $('.header-content').height()) / 2);
    });



    $('.simples-of-work img').on('click', function() {
        $('body').css('background-color', '#f00');
        console.log('Test');
    });


});