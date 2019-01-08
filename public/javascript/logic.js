$(document).ready(function() {

  


    // $(window).scroll(function() {
    //     var y = $(window).scrollTop();

    //     if (y > 2) {
    //        $("#nav").addClass("nav-background");
    //     } else {
    //         $("#nav").removeClass("nav-background");
    //     }
    // })



    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav").offset().top
        }, 800);
    });

    $("#services").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-1").offset().top
        }, 800);
    });

    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-2").offset().top
        }, 800);
    });

    $("#partners").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-3").offset().top
        }, 800);
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-4").offset().top
        }, 800);
    });
    
})


