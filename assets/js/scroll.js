    $(document).ready(function(){

        $("body").on("click","[data-scroll]", function (event) {
            event.preventDefault();
            var id  = $(this).attr('data-scroll'),
                nav = $('.header').height(),
                top = $(id).offset().top - nav;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    })




