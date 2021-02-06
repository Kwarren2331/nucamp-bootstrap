$(function () {

    // speed of the carousel in milliseconds
    $(".carousel").carousel({ interval: 500 });

    // when the play or pause button is clicked
    $("#carouselButton").click(function () {

        // find the <i> tag inside of carouselButton element
        // does it have the class "fa-pause"
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {

            // stop the carousel
            $(".carousel").carousel("pause");

            // find the <i> tag inside of the carouselButton element
            // remove the class "fa-pause"
            $("#carouselButton").children("i").removeClass("fa-pause");

            // find the <i> tag inside of the carouselButton element
            // add the class "fa-play"
            $("#carouselButton").children("i").addClass("fa-play");


        } else {

            // starts the carousel
            $(".carousel").carousel("cycle");


            // find the <i> tag inside of the carouselButton element
            // removes the class "fa-play"
            $("#carouselButton").children("i").removeClass("fa-play");


            // find the <i> tag inside of the carouselButton element
            // add the class "fa-pause"
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

 $("#reserveButton").click(function() {
    $("#reserveModal").modal("show");
 });
 $("#loginButton").click(function() {
     $("#loginModal").modal("show");
});    
});
