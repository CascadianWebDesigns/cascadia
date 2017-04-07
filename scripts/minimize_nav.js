var scaledNav = false;

$(function() {
    $(document).scroll(function() {
        if ($(document).scrollTop() > 500 && !scaledNav) {
            $(".nav").animate({
                "font-size": "25px",
                opacity: 1
            }, 500, function() {
              scaledNav = true;
            });
        }
    });
});
