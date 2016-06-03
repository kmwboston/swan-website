$(function(){


    $(window).scroll(function () {
        console.log($(document).scrollTop())
        var y = $(document).scrollTop();

        if (y >= 0) {
            $(".jumbotron").fadeOut("slow");
        }
    });



});