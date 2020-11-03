$(document).ready(function () {
    $('.menu_bar').click(function () {
        $('nav.menu').slideToggle();
    });
    $(window).resize(function () {
        if (eval($('body').width()) > 750) {
            $('nav.menu').show();
        }else{
            $('nav.menu').hide();
        }
    });
});