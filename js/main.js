$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.mobile_btn ').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.gnb .sub').removeAttr('style')
    })











    $('.mainslide').slick({

        infinite: true,
        cssEase: 'linear',
        fade: true,
        autoplay: 1000,
    }

    )


    $('.maincontent .product_tap li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.mainproduct .product_tap li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.left_box .grap').eq(idx).addClass('on').siblings().removeClass('on');

    })
})