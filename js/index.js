$(function(){


    $(window).scroll(function () {
        console.log($(document).scrollTop())
        var y = $(document).scrollTop();

        if (y >= 0) {
            $(".jumbotron").fadeOut("slow");
        }
    });


    var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
});