var nav_visible = false;
var animation_speed = 500;
var nav_opacity = 0.8;
$(function() {
    $(document).scroll(function() {
        if ($(document).scrollTop() > 500) {
            if (!nav_visible) {
                showNav();
            }
        } else {
            if (nav_visible) {
                hideNav();
            }
        }

    });
});

function showNav() {
    nav_visible = true;
    $(".nav").animate({
        "font-size": "25px",
        opacity: nav_opacity
    }, animation_speed);
}

function hideNav() {
    nav_visible = false;
    $(".nav").animate({
        "font-size": "25px",
        opacity: 0
    }, animation_speed);
}
