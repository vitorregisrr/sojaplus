(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    // Home scroll down
    $('#home__scrolldown').click(function () {
        $('html, body').animate({
            scrollTop: $("#cursos-carousel").offset().top
        }, 600);
    });

    //Imprensa 
    $('.imprensa__buttons button').click(function () {
        const target = $(this).data('target');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('.imprensa__section.show').fadeOut();
        $('.imprensa__section.show').removeClass('show');

        if (target === '*') {
            $('.imprensa__section').fadeIn();
            $('.imprensa__section').addClass('show');
            $('.imprensa__section').addClass('all');

        } else {
            $(target).addClass('show');
            $(target).removeClass('all');
            $(target).fadeIn();
        }
    })


    //scroll top
    var scrollTopBtn = $('.scroll-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // Dropdown hover
    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 100 : 0);
    }

    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown', function(e){
            e.stopPropagation();
        })
        .on('click', '.dropdown-menu a', toggleDropdown);

    

    window.dispatchEvent(new Event('resize'));

})();