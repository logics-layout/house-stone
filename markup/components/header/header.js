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

var menuHeaderTopToggle3 = $('#header-bottom-toggleMenuMbles');
var menuHeaderTopList3 = $('#navigationMenu2');
menuHeaderTopToggle3.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle3, menuHeaderTopList3, true);});
_fnMenuHeaderTop(menuHeaderTopToggle3, menuHeaderTopList3, true);

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

    if (menuHeaderTopToggle[0]&&(!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
        menuHeaderTopToggle[0].checked = false;
        _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
    }
    if (menuHeaderTopToggle2[0]&&(!target.is(menuHeaderTopList2) && !target.closest(menuHeaderTopList2)[0]) && (!target.is(menuHeaderTopToggle2) && !target.is('.menuTopMobel'))) {
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