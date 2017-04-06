var scaledNav = false;

$(function() {

    $(document).scroll(function() {
        if ($(document).scrollTop() > 100 && !scaledNav) {
            $(".nav").animate({
                padding: 10,
                "font-size": "25px"
            }, 500, function() {
              scaledNav = true;
            });
        }
    });
});
