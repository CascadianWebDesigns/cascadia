var scaledNav = false;

$(function() {

    $(document).scroll(function() {
        if ($(document).scrollTop() > 100 && !scaledNav) {
            $(".nav").animate({
                "font-size": "25px"
            }, 500, function() {
              scaledNav = true;
            });
        }
    });
});
