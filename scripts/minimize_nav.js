var nav_visible = false;
var animation_speed = 250;
var fancy_animation_speed = 500;
var nav_opacity = 0.8;

$(function() {
    $(document).scroll(function() {
        if ($(document).scrollTop() > 200) {
            if (!nav_visible) {
                showNav();
                hideElement(".title");
            }
        } else if (nav_visible) {
            hideNav();
            showElement(".title");
        }


        showWhenInPos(".testPara", 400);
        showWhenInPos(".fadeContactUs", 830);
    });
});

function showWhenInPos(element, pos) {
    if (scrollTopRelative(element) > pos) {
        $(element).animate({
            opacity: 1
        }, fancy_animation_speed);
    }
}

function hideWhenInPos(element, pos) {
    if (scrollTopRelative(element) > pos) {
        $(element).animate({
            opacity: 0
        }, fancy_animation_speed);
    }
}

function hideWhenBetween(element, start, end) {
    if (scrollTopRelative(element) > start && scrollTopRelative(element) < end) {
        $(element).animate({
            opacity: 0
        }, fancy_animation_speed);
    } else {
        $(element).animate({
            opacity: 1
        }, fancy_animation_speed);
    }
}


function scrollTopRelative(element) {
    return -1 * ($(element).scrollTop() - $(document).scrollTop());
}

function showNav() {
    nav_visible = true;
    $(".nav").animate({
        "font-size": "25px",
        opacity: nav_opacity
    }, animation_speed);

    $(".nav").css("display", "block");
}

function hideNav() {
    nav_visible = false;
    $(".nav").animate({
        "font-size": "28px",
        opacity: 0
    }, animation_speed);

    $(".nav").css("display", "none");
}

function hideElement(element) {
    $(element).animate({
        opacity: 0
    }, animation_speed);
}

function showElement(element) {
    $(element).animate({
        opacity: 1
    }, animation_speed);
}
