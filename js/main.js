$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.mainslide').slick({
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        autoplay: 1000,
    }

    )
})