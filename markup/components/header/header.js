// var toggleBtn = $('.toggle-btn');
// toggleBtn.change(function () {
//     toggleBtn.each(function(e){
//         var _this = $(this),
//             checked = this.checked,
//             block = _this.data('block');
//
//         if(block){
//             block = $(block);
//             if(block[0]){
//                 if(checked){
//                     block.slideDown(300)
//                 }else{
//                     block.slideUp(300)
//                 }
//             }
//         }
//     });
// });

// var menuHeaderTopToggle = $('#header-bottom-toggleMenuMbl');
// var menuHeaderTopList = $('.header-bottom-nav');
//
// menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);});
// _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
// $(document).click(function(e) {
//     var target;
//     target = $(e.target);
//
//     // toggleBtn
//     console.log(target);
// });

var _fnMenuHeaderTop = function(toggle, list, slide) {
    var className, el, time;
    time = 300;
    el = toggle.closest('.mobile-list-anim');
    className = 'active';

    if (toggle.prop("checked")) {
        if(slide) list.stop().slideDown(time);
        el.add(list).addClass(className);
    } else {
        if(slide) list.stop().slideUp(time);
        el.add(list).removeClass(className);
    }
};

var menuHeaderTopToggle = $('#header-bottom-toggleMenuMble');
var menuHeaderTopList = $('#navigationMenu');
var menuHeaderTopToggle2 = $('#header-bottom-toggleMenuMble1');
var menuHeaderTopList2 = $('#navigationCat');

menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);});
_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);

menuHeaderTopToggle2.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle2, menuHeaderTopList2, true);});
_fnMenuHeaderTop(menuHeaderTopToggle2, menuHeaderTopList2, true);

var fnClearNav = function () {
    $('.header-navigation').removeClass('active');
    $('.mobile-list-anim__input').each(function(e){
        this.checked = false;
    })
};

$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        fnClearNav();
    }
});
$('.header-navigation__clear').click(fnClearNav);

$(document).click(function(e) {
    var target = $(e.target);

    var toggle = $('.header-desktop').find('.mobile-list-anim__input'),
        checkedToggle = toggle.filter(':checked');

    toggle.each(function(){
        var _this = $(this),
            id = _this.attr('id'),
            block = $('[data-for="'+id+'"]'),
            checked = this.checked,
            fn = 'removeClass';

        if(checked){
            fn = 'addClass';
        }

        // console.log(fn, block)
        block[fn]('active');
    });

    if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
    }
    if ((!target.is(menuHeaderTopList2) && !target.closest(menuHeaderTopList2)[0]) && (!target.is(menuHeaderTopToggle2) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle2[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle2, menuHeaderTopList2, true);
    }
});


$('.header-mobile__navigation-list a').click(function(e){
    if($(document).width() > 991) return true;
    var _this = $(this),
        list = _this.next('ul'),
        parent = _this.parent(),
        className = 'active',
        time = 300;

    if(list[0]){
        e.preventDefault();
        parent.toggleClass(className);
        list.slideToggle(time);

        parent.siblings().removeClass(className)
            .find('ul').slideUp(time);
    }
});
//
// //
// var header = $('.header'),
//     headerBottomFix = $('.header-bottom-fix'),
//     checkPad = true;
//
// window.headerHeight = _heightBlock(header);
// var checkHeaderFix = function(){
//     // return false;
//
//     if($(window).width() < 991){
//
//         if($(window).scrollTop() > headerBottomFix.offset().top){
//             header.addClass('fix');
//         }else{
//             header.removeClass('fix');
//         }
//
//         //     if(checkPad){
//         //         header.addClass('fix');
//         //         header.css({marginTop: "-"+headerHeight+"px"}).animate({marginTop: "0"}, 500);
//         //         page__wrapper.css('padding-top', headerHeight+"px");
//         //         checkPad = false;
//         //     }
//         // }else if(checkPad===false){
//         //     checkPad = true;
//         //     header.removeClass('fix');
//         //     page__wrapper.css('padding-top', 0+"px");
//         //     $('.header-slider-el').slick('slickNext');
//         //     window.headerHeight = _heightBlock(header);
//         // }
//     }
// };