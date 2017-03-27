$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
// var linkTop = $('.footer__scrollTop');
// linkTop.click(function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
// });
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
if ($.fn.slick) {

//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
    $('.header__slider-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.header__slider .slick-prev'),
        nextArrow: $('.header__slider .slick-next'),
        appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });

    $('.city__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 558,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    $('.slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.slider-inner-objects').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 628,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    $('.stock').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.item-listSlider > div').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.index-products-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 746,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.statistics').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 698,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.header__advantages').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 952,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 602,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 462,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.objects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: "<button class='objects__arrow_prev objects__arrow'><span><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></span></button>",
        nextArrow: "<button class='objects__arrow_next objects__arrow'><span><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></span></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });


// $('.collapse').find('.collapse-toggle').click(function(e){
//     e.preventDefault();
//     var _this = $(this),
//         content = _this.next(),
//         parentContent = _this.closest('.collapse-toggle-content')[0]?_this.closest('.collapse-toggle-content'):_this.closest('.collapse'),
//         time = 300,
//         className = 'active';
//
//     if(content.hasClass('collapse-toggle-content')){
//         content.slideToggle(time);
//         _this.parent().toggleClass(className);
//
//         parentContent.find('.collapse-toggle-content').not(content).stop().slideUp(time);
//         parentContent.find('.collapse-toggle').not(_this).parent().removeClass(className);
//     }
// });


// var videoBlock = $('.videoBlock'),
//     videoBlockLabel = $('.videoBlock__label'),
//     videoBlockIframe = $('.videoBlock__main-iframe');
//
// videoBlockLabel.click(function(){
//     var _this = $(this);
//
//     _this.addClass('active').siblings().removeClass('active');
//     var iframe = _this.find('iframe');
//     if(iframe[0]){
//         videoBlockIframe.attr('src', iframe.attr('src'));
//     }
// });

$('.tabs__nav').find('a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        className = 'active',
        block = $(_this.attr('data-block')),
        time = 300;

    if(!parent.hasClass(className)){
        parent.addClass(className);
    }
    parent.siblings().removeClass(className)
        .each(function () {
            var __this = $(this),
                link = __this.find('a'),
                block = $(link.attr('data-block'));
            if(block[0]){
                block.fadeOut(time)
            }
        });

    block.delay(time).fadeIn(time)
});

$('.form-search_hidden').hover(function () {
   $(this).addClass('active');
}, function () {
   $(this).removeClass('active');
});

function initYmaps() {
    var coords = [52.32594308927015, 104.2421168088913];
    var MapPlaces = new ymaps.Map('yamap', {
        center: coords,
        zoom: 12,
        controls: ['zoomControl']
    });
    MapPlaces.behaviors.disable('scrollZoom');

    collection = new ymaps.GeoObjectCollection(null,{
        iconLayout: 'default#image',
        iconImageHref: 'placemark.png',
        iconImageSize: [101, 84],
        iconImageOffset: [-31, -83]
    });

    MapPlaces.geoObjects.add(collection);

    placemark = new ymaps.Placemark(coords);
    collection.add(placemark);
}

try{
    ymaps.ready(initYmaps);
}catch (e){}


$('.video-list__preview-item').click(function (e) {
    e.preventDefault();
    var _this = $(this),
        dataAttr = _this.data();

    _this.addClass('active').siblings().removeClass('active');
    $('.video-list__video-el iframe').attr('src', dataAttr.video);
    $('.video-list__video-content span').text(dataAttr.text);
});

$('.toggle-btn').click(function(e){
    var _this = $(this);
        block = $(_this.data('block'));

    if(block[0]){
        block.stop().slideToggle(300);
    }
});


