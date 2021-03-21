window.onload = () => {

    // search open
    document.getElementById('search-btn').onclick = () => {
        document.getElementById('search-inp').focus();
    }
    document.getElementById('burger-checkbox').onchange = e => {
        document.getElementById('menu-list').classList.toggle("active");
        document.getElementById('header-logo').classList.toggle("active");
    }
    $('.news-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.news__btn-prev'),
        nextArrow: $('.news__btn-next')
    });
    $('.videos-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.videos__btn-prev'),
        nextArrow: $('.videos__btn-next')
    });
    $('.partners-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.partners__btn-prev'),
        nextArrow: $('.partners__btn-next')
    });
    $('.info-toggle').on('click', (e) => {
        const partClass = $(e.target).attr('toggle');
        $('.info-toggle').removeClass("active");
        $(e.target).addClass("active");
        $(".info-part").removeClass("active");
        $(`.${partClass}`).addClass("active");
    });
    $('.section-link').on('click', (e)=> {
        e.preventDefault();
        $('.section-link-item').removeClass('active');
        $(e.target.parentNode).addClass('active');
        $('.section-title').removeClass('active');
        $(`${$(e.target).attr('href')} .section-title`).addClass('active');
    });
    $('.section-more').on('click', (e)=> {
        $(e.target).toggleClass('active');
        const hide = $(e.target).prev('.section-hide-desc');
        hide.toggleClass('active');
    });
    $('.info-block__item').on('click', (e)=> {
        $('.info-block__item').removeClass('active');
        $(e.target).addClass('active');
        $('.info-block__content').removeClass('active');
        $(`.${$(e.target).attr('target')}`).addClass('active');
    });
}