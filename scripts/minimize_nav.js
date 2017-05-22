var nav_visible = false;
var animation_speed = 250;
var fancy_animation_speed = 500;
var nav_opacity = 1;

$(function() {
  checkScroll();
    $(document).scroll(function() {
        checkScroll();
    });
});

function checkScroll(){
  if ($(document).scrollTop() > 200) {
      if (!nav_visible) {
          showNav();
          hideElement(".title");
      }
  } else if (nav_visible) {
      hideNav();
      showElement(".title");
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

    $(".main_title").animate({
        "opacity": '0'
    }, animation_speed * 3);


    $(".nav").css("display", "block");
}

function hideNav() {
    nav_visible = false;
    $(".nav").animate({
        "font-size": "28px",
        opacity: 0
    }, animation_speed * 3);

    $(".main_title").animate({
        "opacity": '1'
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
