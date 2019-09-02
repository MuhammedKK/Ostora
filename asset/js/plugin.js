$(document).ready(function () {


    // Trigger Nicescroll

    $('html').niceScroll({
        cursorwidth: "10px",
        cursorcolor: '#ff6348',
        cursorborder:'none'


    })
    // Center Header Content
    $('.header-content').css('padding-top', ($(window).height() - $('.header-content').height()) / 2);
    $(window).resize(function () {
        $('.header-content').css('padding-top', ($(window).height() - $('.header-content').height()) / 2);
    });
0
    // Go To Next Section

    $('button').click(function () {
        $('html, body').animate({
            scrollTop : $('.about-us').offset().top,
        }, 400);
    });

    // Animated Alert

    $('.contact-us a').click(function (e) {
        e.preventDefault();
        $('.popup-alert').fadeIn(500);
    });

    $('.popup-alert a').click(function (e) {
        e.preventDefault();
        $(this).parents('.popup-alert').fadeOut(500);
    });


});